# -*- coding: utf-8 -*-
# @Time    : 2019/9/26 15:23
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : crack.py
# @Software: PyCharm

import requests
import execjs


def _reload_js():
    """
    加载 js
    :return:
    """
    with open('./slider.js', 'rb') as f:
        slider_js = f.read().decode()
    return slider_js


def _get_behavior_token(slider_js, page_data):
    ctx = execjs.compile(slider_js)
    verify_data = ctx.call('get_behavior_token', page_data)
    return verify_data


def _init_slider(session, request_code):
    """
    初始化滑块
    :param session:
    :param request_code:
    :return:
    """
    data = {
        'requestCode': request_code,
        'feVersion': '1.4.0',
        'source': '1'
    }
    url = 'https://verify.meituan.com/v2/ext_api/page_data'
    result = session.post(url, data=data).json()
    if result['status']:
        return result['data']
    return None


def _slider_verify(session, request_code, verify_data):
    """
    滑块风控验证
    :param session
    :param request_code:
    :param verify_data
    :return:
    """

    url = 'https://verify.meituan.com/v2/ext_api/merchantlogin/verify?id=71'

    session.headers.update({
        'Authorization': 'Bearer ' + request_code,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://epassport.meituan.com',
    })
    data = {
        'request_code': request_code,
        'behavior': verify_data['behavior'],
        'fingerprint': '',
        '_token': verify_data['token'],
    }
    result = session.post(url, data=data).json()
    if result['status']:
        print('成功通过滑块验证!')
        return result['data']['response_code']
    return None


def crack(request_code):
    session = requests.session()
    session.headers = {
        'Referer': 'https://epassport.meituan.com/account/unitivelogin?bg_source=3&service=waimai&platform=2&continue=http://e.waimai.meituan.com/v2/epassport/entry&left_bottom_link=%2Faccount%2Funitivesignup%3Fbg_source%3D3%26service%3Dwaimai%26platform%3D2%26continue%3Dhttp%3A%2F%2Fe.waimai.meituan.com%2Fv2%2Fepassport%2FsignUp%26extChannel%3Dwaimaie%26ext_sign_up_channel%3Dwaimaie&right_bottom_link=%2Faccount%2Funitiverecover%3Fbg_source%3D3%26service%3Dwaimai%26platform%3D2%26continue%3Dhttp%3A%2F%2Fe.waimai.meituan.com%2Fv2%2Fepassport%2FchangePwd',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
    }
    slider_js = _reload_js()
    page_data = None
    for _ in range(5):
        page_data = _init_slider(session, request_code)
        if page_data:
            break
    if not page_data:
        return None
    verify_data = _get_behavior_token(slider_js, page_data)
    response_code = _slider_verify(session, request_code, verify_data)
    if response_code:
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': {
                'response_code': response_code
            }
        }
    return {
        'success': 0,
        'message': '校验失败! ',
        'data': None
    }


if __name__ == '__main__':
    pass
