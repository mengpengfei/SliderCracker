# -*- coding: utf-8 -*-
# @Time    : 2019/9/8 15:15
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm


import execjs
import json
import time
import requests
import random
from pprint import pprint
from geetest2.geetest import crack


def get_captcha():
    url = 'https://www.tianyancha.com/verify/geetest.xhtml'
    payload = {
        'uuid': int(time.time() * 1000)
    }
    referer = 'https://www.tianyancha.com/vipintro/?jsid=SEM-360-PZ-SY-081001'
    headers = {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json; charset=UTF-8',
        'Referer': referer,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
    result = requests.post(url, data=json.dumps(payload), headers=headers).json()
    if result['state'] == 'ok':
        return result['data']['gt'], result['data']['challenge'], referer
    else:
        return None


def main():
    while True:
        data = get_captcha()
        if data:
            break
        time.sleep(random.random())
    result = crack(data[0], data[1], data[2])
    print(result)


if __name__ == '__main__':
    main()
