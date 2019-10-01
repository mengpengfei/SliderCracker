# -*- coding: utf-8 -*-
# @Time    : 2019/9/27 15:40
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm


import requests
import time
import json
from anjuke.geetest import crack
from bs4 import BeautifulSoup


headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'referer': 'https://shanghai.anjuke.com/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0'
}


def get_sessionid():
    url = 'https://www.anjuke.com/captcha-verify/?callback=shield&from=antispam'
    resp = requests.get(url, headers=headers)
    bsobj = BeautifulSoup(resp.text, 'lxml')
    session_id = bsobj.select('#sessionId')[0]['value']
    return session_id


def get_captcha(session_id):
    url = 'https://verifycode.58.com/captcha/getV3'
    params = {
        'callback': '',
        'showType': 'embed',
        'sessionId': session_id,
        '_': int(time.time() * 1000)
    }
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('(', '').replace(')', ''))
    if result['message'] == '成功':
        if '描摹' in result['data']['tip']:
            return {
                'status': 0,
                'message': result['data']['tip']
            }
        bg = 'https://verifycode.58.com' + result['data']['bgImgUrl']
        response_id = result['data']['responseId']
        return {
            'status': 1,
            'data': {
                'captcha_url': bg,
                'response_id': response_id
            }
        }
    return {
        'status': 0,
        'message': '验证码初始化失败! '
    }


def main():
    session_id = get_sessionid()
    init_data = get_captcha(session_id)
    if not init_data['status']:
        return {
            'success': 0,
            'message': init_data['message'],
            'data': None
        }
    result = crack(init_data['data']['captcha_url'], session_id, init_data['data']['response_id'])
    return result


if __name__ == '__main__':
    print('开始测试...')
    print('=' * 100)
    num = 1
    success = 0
    while num <= 20:
        x = main()
        print(x)
        if x['success']:
            success += 1
        time.sleep(5)
    print('最后测试结果 >> %.2f%%' % success)
