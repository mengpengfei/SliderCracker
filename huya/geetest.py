# -*- coding: utf-8 -*-
# @Time    : 2019/10/6 14:53
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm

"""
说明：虎牙滑块验证通过后
"""


import numpy as np
import requests
import json
import random
import time
from PIL import Image
import cv2
import base64
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad


headers = {
    'Content-Type': 'application/json',
    'Origin': 'https://captcha.huya.com',
    'Referer': 'https://captcha.huya.com/page/proxy',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
}


def _init_slider():
    """
    初始化滑块
    :return:
    """
    url = 'https://captcha.huya.com/slider/index'

    payload = json.dumps({})

    result = requests.post(url, headers=headers, data=payload).json()

    return {
        'code': result['data']['code'],
        'ypos': result['data']['location_y'],
        'aes_key': result['data']['huyapk']
    }


def _pic_download(code, type):
    """
    验证码图片下载
    :param code: 图片标识
    :param type: 类型
    :return:
    """
    url = 'https://captcha.huya.com/slider/getPuzzleImage?'
    params = {
        'type': type,
        'code': code
    }
    img_data = requests.get(url, params=params, headers=headers).content
    with open('{}.jpg'.format(type), 'wb') as f:
        f.write(img_data)


def _cut_slider(path):
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
    result.convert('RGB').save(path)
    # result.show()
    return result.size[0], result.size[1]


def _get_distance(code):
    """
    获取缺口距离
    :param code:
    :return:
    """
    # 下载背景
    _pic_download(code, 'big')

    # 下载滑块
    _pic_download(code, 'small')

    # # 计算拼图还原距离
    target = cv2.imread('small.jpg', 0)
    template = cv2.imread('big.jpg', 0)
    temp = 'temp.jpg'
    targ = 'targ.jpg'
    cv2.imwrite(temp, template)
    cv2.imwrite(targ, target)
    w, h = _cut_slider('targ.jpg')
    target = cv2.imread(targ)
    target = cv2.cvtColor(target, cv2.COLOR_BGR2GRAY)
    target = abs(255 - target)
    cv2.imwrite(targ, target)
    target = cv2.imread(targ)
    template = cv2.imread(temp)
    result = cv2.matchTemplate(target, template, cv2.TM_CCOEFF_NORMED)
    x, y = np.unravel_index(result.argmax(), result.shape)
    # 缺口位置
    # print((y, x, y + w, x + h))

    # 调用PIL Image 做测试
    image = Image.open('big.jpg')

    xy = (y, x, y + w, x + h)
    # 切割
    imagecrop = image.crop(xy)
    # 保存切割的缺口
    imagecrop.convert('RGB').save("new_image.jpg")
    imagecrop.show()
    return int(y)


def _generate_trace(distance):
    """
    生成轨迹
    :param distance:
    :return:
    """
    zx = random.randint(30, 50)
    # 初速度
    v = 0
    # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
    tracks_list = []
    # 当前的位移
    current = 0
    while current < distance - 13:
        # 加速度越小, 单位时间的位移越小, 模拟的轨迹就越多越详细
        a = random.randint(10000, 12000)  # 加速运动
        # 初速度
        v0 = v
        t = random.randint(9, 18)
        s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
        # 当前的位置
        current += s
        # 速度已经达到v, 该速度作为下次的初速度
        v = v0 + a * t / 1000
        # 添加到轨迹列表
        if current < distance:
            tracks_list.append(round(current))
    # 减速慢慢滑
    if round(current) < distance:
        for i in range(round(current) + 1, distance + 1):
            tracks_list.append(i)
    else:
        for i in range(tracks_list[-1] + 1, distance + 1):
            tracks_list.append(i)
    tracks_list.append(distance)
    trace = []
    for index, x in enumerate(tracks_list):
        trace.append({
            'x': zx + x,
            'y': zx + x
        })
    return trace


def aes_encrypt(key, data):
    """
    AES ECB模式 Pkcs7补全 加密
    :param key: 密钥
    :param data: 待加密表单
    :return:
    """
    data = json.dumps(data).replace(' ', '')
    # 初始化 AES 加密, ECB模式
    encrypter = AES.new(key.encode('utf-8'), AES.MODE_ECB)
    # Pkcs7 补全
    pad_pkcs7 = pad(data.encode('utf-8'), AES.block_size, style='pkcs7')  # 选择pkcs7补全
    # 加密
    result = encrypter.encrypt(pad_pkcs7)
    # base64 解码, 并去除换行符
    return str(base64.encodebytes(result), encoding='utf-8').replace('\n', '')


def _slider_verify(data):
    """
    验证
    :param data:
    :return:
    """
    url = 'https://captcha.huya.com/slider/check'
    payload = json.dumps({
        'data': data
    })
    result = requests.post(url, data=payload, headers=headers).json()
    print(result)
    if result['data']['code'] == 0:
        return {
            'success': 1,
            'message': '校验通过! ',
            'data': {}
        }
    return {
        'success': 0,
        'message': result['data']['message'],
        'data': None
    }


def crack():
    # 初始化滑块
    init_data = _init_slider()
    # 停顿 0.1 到 0.5 秒, 模拟人为操作
    time.sleep(random.uniform(0.1, 0.5))
    # 图像处理获取缺口距离
    start_time = int(time.time() * 1000)
    distance = _get_distance(init_data['code'])
    # 页面显示图片与下载图片尺寸差
    distance = round(distance * (386 / 780))
    # 生成轨迹
    trace = _generate_trace(distance)
    pass_time = int(time.time() * 1000) - start_time
    # 加密表单
    data = {
        'point': distance / 386 * 780,
        'travel':  trace,
        'code': init_data['code'],
        'endTime': pass_time
    }
    payload = aes_encrypt(init_data['aes_key'], data)
    # 最终验证
    result = _slider_verify(payload)
    if result['success']:
        result.update({
            'data': {
                'ticket': init_data['code']
            }
        })
    return result


if __name__ == '__main__':
    x = crack()
    print(x)
