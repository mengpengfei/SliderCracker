# -*- coding: utf-8 -*-
# @Time    : 2019/10/3 21:13
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm

import os
import requests
import json
import time
import cv2
import numpy as np
import base64
import random
from shumei.des import encrypt, decrypt

headers = {
    "Referer": "https://www.fengkongcloud.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36"
}


def _init_slider():
    """
    初始化验证码
    :return:
    """
    url = 'https://captcha.fengkongcloud.com/ca/v1/register'
    params = {
        'organization': 'TKWQ4vmgC3PJLGDTMIoJ',
        'appId': 'default',
        'channel': 'DEFAULT',
        'lang': 'zh-cn',
        'model': 'slide',
        'rversion': '1.0.1',
        'sdkver': '1.1.2',
        'data': {},
        'callback': 'sm_{}'.format(int(time.time() * 1000))
    }
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('{}('.format(params['callback']), '').replace(')', ''))
    if result['riskLevel'] == 'PASS':
        return {
            'k': result['detail']['k'],
            'captcha_url': 'https://castatic.fengkongcloud.com{}'.format(result['detail']['bg']),
            'rid': result['detail']['rid']
        }
    return None


def _encrypt_trace(k, trace, distance):
    """
    加密轨迹
    :param k: 初始密钥
    :param trace: 轨迹
    :param distance: 距离
    :return:
    """
    text = base64.b64decode(k)
    new_key = decrypt('sshummei', text)[:8]
    data = {
        # 滑动距离 / 300
        "d": distance / 300,
        # 轨迹
        "m": trace,
        # 滑动所用时间
        "c": trace[-1][-1],
        "w": 300,
        'h': 150,
        'os': 'web_pc',
        "cs": 0,
        "wd": 0,
        'sm': -1
    }
    return encrypt(new_key, json.dumps(data).replace(' ', '')).decode()


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


def _get_distance(captcha_url):
    """
    获取缺口距离
    :param captcha_url: 验证码 url
    :return:
    """
    img_path = _pic_download(captcha_url, 'captcha')
    img1 = cv2.imread(img_path, 0)
    img2 = cv2.imread("slider.jpg", 0)
    res = cv2.matchTemplate(img1, img2, cv2.TM_CCOEFF_NORMED)
    loc = np.where(res >= 0.6)
    for pt in zip(*loc[::-1]):
        p = pt
    try:
        cv2.imshow('Detected', img1[p[1]:, p[0]:])
        cv2.waitKey(3000)
    except Exception as e:
        print(e.args)
        return None
    res = cv2.resize(img1, (255, int(300 * (255 / 600))), interpolation=cv2.INTER_CUBIC)
    cv2.imshow("res", res[:, int(p[0] * (255 / 600) + 15):])
    # cv2.waitKey(3000)
    return int(p[0] * (290 / 600))


def _generate_trace(distance, start_time):
    """
    生成轨迹
    :param distance:
    :param start_time:
    :return:
    """
    back = random.randint(2, 6)
    distance += back
    # 初速度
    v = 0
    # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
    tracks_list = []
    # 当前的位移
    current = 0
    while current < distance - 13:
        # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
        a = random.randint(10000, 12000)  # 加速运动
        # 初速度
        v0 = v
        t = random.randint(9, 18)
        s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
        # 当前的位置
        current += s
        # 速度已经达到v,该速度作为下次的初速度
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
    # 回退
    for _ in range(back):
        current -= 1
        tracks_list.append(round(current))
    tracks_list.append(round(current) - 1)
    if tracks_list[-1] != distance - back:
        tracks_list.append(distance - back)
    # 生成时间戳列表
    timestamp_list = []
    timestamp = int(time.time() * 1000)
    for i in range(len(tracks_list)):
        t = random.randint(11, 18)
        timestamp += t
        timestamp_list.append(timestamp)
        i += 1
    y_list = []
    zy = 0
    for j in range(len(tracks_list)):
        y = random.choice(
            [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,
             0, -1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1, 0, 0])
        zy += y
        y_list.append(zy)
        j += 1
    trace = []
    for index, x in enumerate(tracks_list):
        trace.append([x, y_list[index], timestamp_list[index] - start_time])
    return trace


def _slider_verify(act, rid):
    """
    验证
    :param act:
    :param rid:
    :return:
    """
    url = 'https://captcha.fengkongcloud.com/ca/v1/fverify'
    params = {
        "organization": "TKWQ4vmgC3PJLGDTMIoJ",
        "appId": "default",
        "channel": "DEFAULT",
        "act": act,
        "rid": rid,
        "lang": "zh-cn",
        "ostype": "web",
        "rversion": "1.0.1",
        "sdkver": "1.1.2",
        "callback": "sm_{}".format(int(time.time() * 1000)),
    }
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('{}('.format(params['callback']), '').replace(')', ''))
    print(result)
    return result


def crack():
    """
    滑块验证
    :return:
    """
    while True:
        _init_data = _init_slider()
        if _init_data:
            break
        time.sleep(random.random())
    print('滑块初始化成功! ')
    distance = _get_distance(_init_data['captcha_url'])
    if not distance:
        return {
            'success': 0,
            'message': '缺口距离获取失败! ',
            'data': None
        }
    start_time = int(time.time() * 1000)
    time.sleep(random.uniform(0.01, 0.05))
    trace = _generate_trace(distance, start_time)
    act = _encrypt_trace(_init_data['k'], trace, distance)
    rid = _init_data['rid']
    result = _slider_verify(act, rid)
    if result['riskLevel'] == 'PASS':
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': rid
        }
    return {
        'success': 0,
        'message': '校验失败! ',
        'data': None
    }


if __name__ == '__main__':
    x = crack()
    print(x)
