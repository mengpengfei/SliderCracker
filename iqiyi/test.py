# -*- coding: utf-8 -*-
# @Time    : 2019/10/9 16:31
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm

from iqiyi.geetest import IqiyiSliderCracker


def main(dfp):
    x = IqiyiSliderCracker(dfp).crack()
    print(x)
    if x['success']:
        IqiyiSliderCracker(dfp).login(x['data']['env_token'])


if __name__ == '__main__':
    # 这个参数已过期, 请自行更换, 登录爱奇艺直至出现滑块, 从出现滑块的登录接口 login.action 中取 Form Data 参数 dfp
    dfp = 'a1835676114a1946afb9b57417746ac8cc1ae2ca2e797a88078f7be3ba64f4db31'
    main(dfp)
