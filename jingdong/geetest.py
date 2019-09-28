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
import os
import execjs
import re
import time
import cv2
from bs4 import BeautifulSoup
from hashlib import md5
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


class JDSlide:
    def __init__(self, eid):
        self.__eid = eid

    def slide(self):
        session = requests.Session()
        session.headers = {
            'Connection': 'keep-alive',
            'Referer': 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fh5.m.jd.com%2Fpc%2Fdev%2F3mr2iWXgiWcZvyGYrQAoYp3KXAaq%2Findex.html%3Futm_source%3Dkong%26utm_medium%3Dzssc%26utm_campaign%3Dt_1000023384_100757%26utm_term%3D36f20e86-5b4d-4b6e-8fba-d79e6c2654a9-p_1999-pr_1646-at_100757%26jd_pop%3D36f20e86-5b4d-4b6e-8fba-d79e6c2654a9%26abt%3D0',
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) "
                          "Chrome/69.0.3497.81 Safari/537.36"
        }
        # 获取滑动
        response = session.get(
            "https://iv.jd.com/slide/g.html?appId=1604ebb2287&scene=login&"
            "product=click-bind-suspend&e=%s&callback=jsonp_0682216393529359" % self.__eid
        )
        init_data = json.loads(response.text.replace("jsonp_0682216393529359(", "").replace(")", ""))
        # print("初始化数据", init_data)

        bg = init_data['bg']
        small = init_data['patch']
        distance = int(get_distance(small, bg) * (278 / 360))
        print("缺口坐标", distance)

        if not distance:
            print("缺口定位失败")
            return

        # 获取 _jdtdmap_sessionId
        response = session.get(
            "https://seq.jd.com/jseqf.html?bizId=passport_jd_com_login_pc&platform=js&version=1"
        )
        _jdtdmap_sessionId = re.findall(r'_jdtdmap_sessionId="(.*?)"', response.text)[0]
        print("_jdtdmap_sessionId", _jdtdmap_sessionId)

        time.sleep(1)  # 非常关键

        with open('jd_slider.js', 'r') as f:
            js = f.read()

        ctx = execjs.compile(js)
        d = ctx.call('getParam', distance)

        # 最终请求
        params = {
            "d": d,
            "c": init_data["challenge"],
            "w": 278,
            "appId": "1604ebb2287",
            "scene": "login",
            "product": "click-bind-suspend",
            "e": self.__eid,
            "s": _jdtdmap_sessionId,
            "o": 'xxx',
            "lang": 'zh_CN',
            "callback": "jsonp_042151781690389"
        }
        response = session.get(
            "https://iv.jd.com/slide/s.html?",
            params=params
        )

        answer_data = json.loads(response.text.replace("jsonp_042151781690389(", "").replace(")", ""))
        if "validate" not in answer_data.keys():
            print(answer_data)
            print("识别失败", answer_data["message"])
            return
        answer = {
            "validate": answer_data["validate"],
            "challenge": init_data["challenge"],
        }
        print("结果", answer)
        return answer


if __name__ == '__main__':
    pass
