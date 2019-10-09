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
    dfp = 'a14276d7cc6c11427090d0b9dd4f48657a8b0e9d57769b1809e310381e1ce1fada'
    main(dfp)
