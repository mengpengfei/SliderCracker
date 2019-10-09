# -*- coding: utf-8 -*-
# @Time    : 2019/10/9 11:31
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : img_locate.py
# @Software: PyCharm

import os
import requests
from PIL import Image
import cv2
import numpy as np


def _pic_download(url, type):
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


def merge_captcha(init_data):
    """
    还原验证码背景图
    :param init_data: 验证码初始化数据
    :return:
    """
    per_width = init_data['imageBlockPerWidth']
    per_height = init_data['imageBlockPerHeight']
    merge_array = init_data['imageBlockOffset']
    captcha_url = 'https://qcaptcha.iqiyi.com' + init_data['imageBgUrl']
    captcha_path = _pic_download(captcha_url, 'captcha')
    image = Image.open(captcha_path)

    new_image = Image.new('RGB', image.size)
    for s in range(2):
        for p in range(len(merge_array[0])):
            d = merge_array[s]
            h = len(d)
            l = d[h - 1]
            G = d[p]
            v = G['t1'] * per_width
            Z = G['t2'] * per_height
            g = per_width
            W = per_height
            if G['t1'] > l['t1']:
                v += 290 - per_width * h
            if p == h - 1:
                g = 290 - per_width * p
            if s == 1:
                W = 170 - per_height * s
            imgcrop = image.crop((v, Z, v + g, Z + W))
            new_image.paste(imgcrop, (p * per_width, s * per_height))
    new_image.save(captcha_path)
    # new_image.show()
    return captcha_path


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
    result.convert('RGB').save('targ.jpg')
    # result.show()
    return result.size[0], result.size[1]


def get_distance(init_data):
    """
    获取缺口距离
    :param init_data: 验证码初始化数据
    :return:
    """
    slider_url = 'https://qcaptcha.iqiyi.com' + init_data['iconUrl']
    slider_path = _pic_download(slider_url, 'slider')
    w, h = Image.open('slider.jpg').size

    # 验证码图片还原
    captcha_path = merge_captcha(init_data)

    # # 计算拼图还原距离
    target = cv2.imread(slider_path, 0)
    template = cv2.imread(captcha_path, 0)
    temp = 'temp.jpg'
    targ = 'targ.jpg'
    cv2.imwrite(targ, target)
    cv2.imwrite(temp, template)

    template = cv2.imread(temp)
    template = cv2.cvtColor(template, cv2.COLOR_BGR2GRAY)
    template = abs(255 - template)
    cv2.imwrite(temp, template)
    w, h = _cut_slider('targ.jpg')
    target = cv2.imread(targ)
    target = cv2.cvtColor(target, cv2.COLOR_BGR2GRAY)
    target = abs(255 - target)
    cv2.imwrite(targ, target)
    target = cv2.imread(targ)
    template = cv2.imread(temp)
    result = cv2.matchTemplate(target, template, cv2.TM_CCOEFF_NORMED)
    x, y = np.unravel_index(result.argmax(), result.shape)

    # 调用PIL Image 做测试
    image = Image.open(captcha_path)

    xy = (y, x, y + w, x + h)
    # 切割
    imagecrop = image.crop(xy)
    # 保存切割的缺口
    imagecrop.convert('RGB').save("new_image.jpg")
    imagecrop.show()
    return int(y)

