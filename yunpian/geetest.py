# -*- coding: utf-8 -*-
# @Time    : 2019/9/28 11:32
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm

import os
import time
import cv2
import numpy as np
import json
import execjs
import random
import requests
from PIL import Image


headers = {
    'Referer': 'https://www.yunpian.com/product-captcha.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
}


def _reload_js():
    """
    加载 js
    :return:
    """
    with open('yp_slider.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx


def _get_cb(ctx):
    """
    生成 cb 参数
    :param ctx:
    :return:
    """
    return ctx.call('get_cb')


def _generate_trace(ctx, distance):
    """
    生成轨迹
    :param ctx:
    :param distance:
    :return:
    """
    return ctx.call('get_trace', distance)


def _encrypt_data(ctx, data):
    """
    js 加密, 生成 i, k 参数, 其中 i 参数为 AES 加密, k 参数为 RSA 加密
    :param ctx:
    :param data:
    :return:
    """
    return ctx.call('encrypt', data)


def pic_download(url, type):
    """
    图片下载
    :param url:
    :param type:
    :return:
    """
    img_path = os.path.abspath('...') + '\\' + '{}.jpg'.format(type)
    img_data = requests.get(url).content
    with open(img_path, 'wb') as f:
        f.write(img_data)
    return img_path


def process_img(img1, img2):
    """
    图片处理
    :param img1: 处理后图片
    :param img2: 待处理图片
    :return:
    """
    cv2.imwrite(img1, img2)
    target = cv2.imread(img1)
    target = cv2.cvtColor(target, cv2.COLOR_BGR2GRAY)
    target = abs(255 - target)
    cv2.imwrite(img1, target)
    # Image.open(img1).show()


def cut_slider(path):
    """
    滑块切割
    :return:
    """
    image = Image.open(path)
    x = []
    y = []
    for i in range(image.size[0]):
        for j in range(image.size[1]):
            pix = image.load()[i, j]
            if pix != 255:
                x.append(i)
                y.append(j)
    z = (np.min(x), np.min(y), np.max(x), np.max(y))
    result = image.crop(z)
    result.save('targ.jpg')
    return result.size[0], result.size[1]


def _get_distance(slider_url, captcha_url):
    """
    获取缺口距离
    :param slider_url: 滑块图片 url
    :param captcha_url: 验证码图片 url
    :return:
    """

    # 引用上面的图片下载
    slider_path = pic_download(slider_url, 'slider')

    # time.sleep(2)

    # 引用上面的图片下载
    captcha_path = pic_download(captcha_url, 'captcha')

    # # 计算拼图还原距离
    target = cv2.imread(slider_path, 0)
    template = cv2.imread(captcha_path, 0)
    temp = 'temp.jpg'
    targ = 'targ.jpg'
    process_img(temp, template)
    process_img(targ, target)
    w, h = cut_slider(targ)
    cv2.imwrite(temp, template)
    target = cv2.imread(targ)
    template = cv2.imread(temp)
    result = cv2.matchTemplate(target, template, cv2.TM_CCOEFF_NORMED)
    x, y = np.unravel_index(result.argmax(), result.shape)
    # 缺口位置
    # print((y, x, y + w, x + h))

    # 调用PIL Image 做测试
    image = Image.open(captcha_path)

    xy = (y + 3, x + 3, y + w - 3, x + h - 3)
    # 切割
    imagecrop = image.crop(xy)
    # 保存切割的缺口
    imagecrop.save("new_image.jpg")
    # imagecrop.show()
    return y


def _init_slider(ctx):
    """
    初始化验证码
    :return:
    """
    url = 'https://captcha.yunpian.com/v1/jsonp/captcha/get'

    # 浏览器环境等参数, 可固定
    data = {
        "browserInfo": [
            {"key": "userAgent",
             "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36"},
            {"key": "language", "value": "zh-CN"},
            {"key": "hardware_concurrency", "value": 4},
            {"key": "resolution", "value": [1366, 768]},
            {"key": "navigator_platform", "value": "Win32"}
        ],
        "mobile": "",
        "nativeInfo": {},
        "options": {
            "sdk": "https://www.yunpian.com/static/official/js/libs/riddler-sdk-0.2.2.js?version=d64b4905b3d97729a01f89b39459c6ae"},
        "fp": "87a6ecfe812d030a3c2885223270da33",
        "address": "https://www.yunpian.com",
        "yp_riddler_id": "0dd345b7-b3b5-4c48-8b33-93dd4970e11f"
    }

    encrypt_data = _encrypt_data(ctx, data)
    params = {
        'cb': _get_cb(ctx),
        'i': encrypt_data['i'],
        'k': encrypt_data['k'],
        'captchaId': '974cd565f11545b6a5006d10dc324281'  # 固定值
    }
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('ypjsonp(', '').replace(')', ''))
    if result['msg'] == 'ok':
        bg = result['data']['bg']
        fg = result['data']['front']
        token = result['data']['token']
        return {
            'captcha_url':bg,
            'slider_url': fg,
            'token': token
        }
    return None


def crack():
    """
    滑块验证
    :return:
    """
    url = 'https://captcha.yunpian.com/v1/jsonp/captcha/verify'

    ctx = _reload_js()
    while True:
        init_data = _init_slider(ctx)
        if init_data:
            print('滑块初始化加载成功! ')
            break
        time.sleep(random.random())
    distance = _get_distance(init_data['slider_url'], init_data['captcha_url'])
    # 图片尺寸比: 浏览器上的验证码图片尺寸为 310 * 155 像素, 而下载下来的图片尺寸为 480 * 240 像素
    distance = int(distance * (310 / 480))
    trace = _generate_trace(ctx, distance)
    data = {
        'points': trace,
        'distanceX': distance / 310,
        'fp': "87a6ecfe812d030a3c2885223270da33",  # 指纹可固定
        'address': "https://www.yunpian.com",
        'yp_riddler_id': "0dd345b7-b3b5-4c48-8b33-93dd4970e11f"  # 这个不知道啥也可以固定
    }
    encrypt_data = ctx.call('encrypt', data)
    params = {
        'cb': ctx.call('get_cb'),
        'i': encrypt_data['i'],
        'k': encrypt_data['k'],
        'token': init_data['token'],
        'captchaId': '974cd565f11545b6a5006d10dc324281'
    }

    resp = requests.get(url, headers=headers, params=params)
    result = json.loads(resp.text.replace('ypjsonp(', '').replace(')', ''))
    if result['msg'] == 'ok':
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': result['data']
        }
    return {
        'success': 0,
        'message': '校验失败! ',
        'data': None
    }


if __name__ == '__main__':
    x = crack()
    print(x)
