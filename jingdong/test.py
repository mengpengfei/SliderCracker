# -*- coding: utf-8 -*-
# @Time    : 2019/9/28 10:59
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm

import requests
from jingdong.geetest import JDSlide
from bs4 import BeautifulSoup


def main():
    resp = requests.get(
        'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dhaosou-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_haosoupinzhuan%26utm_term%3D0a875d61c5fe47d8bc48679132932d23_0_bd3750333d254fc398ac4f9a8c5ed320',
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36"
        })
    soup = BeautifulSoup(resp.text, 'lxml')
    eid = soup.select('#eid')[0]['value']
    spider = JDSlide(eid)
    spider.slide()


if __name__ == '__main__':
    main()
