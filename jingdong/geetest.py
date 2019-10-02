# -*- coding: utf-8 -*-
# @Time    : 2019/9/28 10:56
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm


import requests
import json
import base64
import io
import execjs
import re
import time
import cv2
from PIL import Image
import random
import numpy as np


def pic_download(url, type):
    img_data = base64.b64decode(url)
    current_img = Image.open(io.BytesIO(img_data)).convert("RGB")
    current_img.save('./{}.jpg'.format(type))


def get_distance(small_url, big_url):
    # 引用上面的图片下载
    pic_download(small_url, 'slider')

    # 引用上面的图片下载
    pic_download(big_url, 'captcha')

    # # 计算拼图还原距离
    target = cv2.imread('slider.jpg', 0)
    template = cv2.imread('captcha.jpg', 0)
    w, h = target.shape[::-1]
    temp = 'temp.jpg'
    targ = 'targ.jpg'
    cv2.imwrite(temp, template)
    cv2.imwrite(targ, target)
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
    image = Image.open('captcha.jpg')

    xy = (y, x, y + w, x + h)
    # 切割
    imagecrop = image.crop(xy)
    # 保存切割的缺口
    imagecrop.save("new_image.jpg")
    imagecrop.show()
    return y


def get_trace(distance):
    """
    生成轨迹
    :param distance:
    :return:
    """
    back = random.randint(2, 6)
    distance += back

    base_x = 851
    base_y = 342
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
    timestamp = int(time.time() * 1000)
    timestamp_list = [timestamp]
    time.sleep(random.uniform(0.5, 1.5))
    for i in range(1, len(tracks_list)):
        t = random.randint(11, 18)
        timestamp += t
        timestamp_list.append(timestamp)
        i += 1
    y_list = []
    for j in range(len(tracks_list)):
        y = random.choice([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0])
        y_list.append(y)
        j += 1
    trace = [[str(base_x), str(base_y), timestamp_list[0]]]
    x_offset = random.randint(20, 40)
    y_offset = random.randint(20, 40)
    for index, x in enumerate(tracks_list):
        trace.append([str(base_x + x_offset + x), str(base_y + y_offset + y_list[index]), timestamp_list[index]])
    return trace


class JDCracker:
    def __init__(self, eid):
        self.eid = eid
        self.session = requests.Session()
        self.session.headers = {
            'Connection': 'keep-alive',
            'Referer': 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fh5.m.jd.com%2Fpc%2Fdev%2F3mr2iWXgiWcZvyGYrQAoYp3KXAaq%2Findex.html%3Futm_source%3Dkong%26utm_medium%3Dzssc%26utm_campaign%3Dt_1000023384_100757%26utm_term%3D36f20e86-5b4d-4b6e-8fba-d79e6c2654a9-p_1999-pr_1646-at_100757%26jd_pop%3D36f20e86-5b4d-4b6e-8fba-d79e6c2654a9%26abt%3D0',
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36"
        }

    def _init_slider(self):
        """
        初始化滑块
        :return:
        """
        response = self.session.get(
            "https://iv.jd.com/slide/g.html?appId=1604ebb2287&scene=login&"
            "product=click-bind-suspend&e=%s&callback=jsonp_0682216393529359" % self.eid
        )
        init_data = json.loads(response.text.replace("jsonp_0682216393529359(", "").replace(")", ""))
        return init_data

    @staticmethod
    def _encrypt_trace(trace):
        """
        加密轨迹, 生成参数 d
        :return:
        """
        with open('jd_slider.js', 'r') as f:
            js = f.read()

        ctx = execjs.compile(js)
        return ctx.call('encrypt_trace', trace)

    def get_session_id(self):
        """
        获取 _jdtdmap_sessionId
        :return:
        """
        response = self.session.get(
            "https://seq.jd.com/jseqf.html?bizId=passport_jd_com_login_pc&platform=js&version=1"
        )
        _jdtdmap_sessionId = re.findall(r'_jdtdmap_sessionId="(.*?)"', response.text)[0]
        return _jdtdmap_sessionId

    def crack(self):
        init_data = self._init_slider()

        bg = init_data['bg']
        small = init_data['patch']
        distance = int(get_distance(small, bg) * (278 / 360))

        if not distance:
            print("缺口定位失败")
            return

        _jdtdmap_sessionId = self.get_session_id()

        trace = get_trace(distance)
        d = self._encrypt_trace(trace)

        url = "https://iv.jd.com/slide/s.html?"
        params = {
            "d": d,
            "c": init_data["challenge"],
            "w": 278,
            "appId": "1604ebb2287",
            "scene": "login",
            "product": "click-bind-suspend",
            "e": self.eid,
            "s": _jdtdmap_sessionId,
            "o": 'xxx',
            "lang": 'zh_CN',
            "callback": "jsonp_042151781690389"
        }
        response = self.session.get(url, params=params)
        result = json.loads(response.text.replace("jsonp_042151781690389(", "").replace(")", ""))
        print(result)
        if "validate" not in result.keys():
            return {
                'success': 0,
                'message': '校验失败: {}'.format(result["message"]),
                'data': None
            }
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': {
                "validate": result["validate"],
                "challenge": init_data["challenge"],
            }
        }


if __name__ == '__main__':
    x = get_trace(95)
    print(x)
