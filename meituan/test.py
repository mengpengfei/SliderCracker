# -*- coding: utf-8 -*-
# @Time    : 2019/9/27 15:09
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm

import random
import requests
import execjs
import time
from bs4 import BeautifulSoup
from meituan.geetest import crack

headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': '__mta=187022615.1564213998822.1569568175960.1569574587654.43; _lxsdk_cuid=16c326b5ddec8-0b4a4921c317cb-37c153e-100200-16c326b5ddec8; uuid=ea8b149299ce4622b486.1568812285.1.0.0; SERV=www; LREF=aHR0cHM6Ly93d3cubWVpdHVhbi5jb20vYWNjb3VudC9zZXR0b2tlbj9jb250aW51ZT1odHRwcyUzQSUyRiUyRnd3dy5tZWl0dWFuLmNvbSUyRg%3D%3D; mtcdn=K; _lx_utm=utm_source%3Dso.com%26utm_medium%3Dorganic; passport.sid=ygl4KVoY6psrtpp65UWIxALs4HJc6Kmx; passport.sid.sig=J63y9teUkt1vtBfBVgVP-O7xOPQ',
    'Referer': 'https://passport.meituan.com/account/unitivesignup?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttps%253A%252F%252Fwww.meituan.com%252F',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36',
    'X-Client': 'javascript',
    # 'X-CSRF-Token': 'CgrjJCqV-xzeXxWMteylLgtoDMuzG9qmPmEo',
    'X-Requested-With': 'XMLHttpRequest'
}


def _get_csrf():
    """
    获取认证Csrf参数
    :return:
    """
    url = 'https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fcd.meituan.com%252F'

    resp = requests.get(url, headers=headers)
    soup = BeautifulSoup(resp.text, 'lxml')
    csrf = soup.select('input[name="csrf"]')[0]['value']

    return csrf


def get_token(url):
    with open('token.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('get_token', url)


def _encrypt_pwd(password):
    """
    RSA加密密码
    :return:
    """
    with open('encrypt_pwd.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    pwd = ctx.call('encrypt', password)
    return pwd


def get_phone():
    """
    生成一个随机11位号码
    :return:
    """
    return '1' + ''.join(map(str, (random.sample(range(10), 10))))


def test():
    """
    模拟登录滑块测试
    :return:
    """
    login_api = 'https://passport.meituan.com/account/unitivelogin?risk_partner=0&risk_platform=1&risk_app=-1&uuid=ea8b149299ce4622b486.1568870998.1.0.0&service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttps%253A%252F%252Fhf.meituan.com%252F'

    # username = get_phone()
    pwd = _encrypt_pwd('123456')

    csrf = _get_csrf()
    headers.update({
        'Referer': 'https://passport.meituan.com/account/unitivelogin?service=www&continue=https%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fcd.meituan.com%252F',
        'X-CSRF-Token': csrf,
        'X-Client': 'javascript',
        'X-Requested-With': 'XMLHttpRequest',
    })
    if 'Authorization' in set(headers):
        del headers['Authorization']
    data = {
        'countrycode': '86',
        'email': '18829040039',
        'password': pwd,
        'origin': 'account-login',
        'csrf': csrf,
        'requestCode': '',
        'responseCode': '',
        'h5Fingerprint': ''
    }
    resp = requests.post(login_api, data=data, headers=headers).json()
    print(resp)
    if resp['error']['code'] == 101190:
        request_code = resp['error']['data']['requestCode']
        return request_code
    return None


def main():
    num = 0
    while num <= 5:
        request_code = test()
        if request_code:
            print('Captcha load success! ')
            result = crack(request_code)
            print(result)
            break
        num += 1
        print('The {} verification failed! '.format(num))
    else:
        print('Captcha load failed! ')
    time.sleep(random.random())


if __name__ == '__main__':
    main()
