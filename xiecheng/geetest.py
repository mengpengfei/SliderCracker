# -*- coding: utf-8 -*-
# @Time    : 2019/10/4 9:00
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm

import requests
import time
import json
import execjs
import random
import hashlib


"""
加密参数说明:
    1、verify_msg: 滑动轨迹等信息参数加密
    2、dimensions: 运行环境等信息参数加密
    3、extend_param: 屏幕信息参数加密, 可按自己电脑信息写死
    4、对接口所有参数按指定顺序排序后的字符串进行md5加密校验
"""


headers = {
    'Referer': 'https://passport.ctrip.com/user/login?BackUrl=https%3A%2F%2Fwww.ctrip.com%2F%3Fsid%3D153507%26allianceid%3D5376%26ouid%3Dtitle',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
}

# 接口通用参数
params = {
    'callback': 'captcha029311869916299216',
    'appid': '100008493',
    # 滑块使用接口标识, 如登录时需要滑块验证, 则为: crm_login_online, 手机号查询订单: crm_getorder_online, 按自己需求替换
    'business_site': 'crm_sms_online',
    'version': '2.5.31'
}


def _generate_trace():
    """
    生成轨迹
    :return:
    """
    distance = random.randint(260, 270)
    zx = random.randint(330, 340)
    zy = random.randint(240, 250)
    # 初速度
    v = 0
    # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
    tracks_list = []
    # 当前的位移
    current = 0
    while current < distance - 13:
        # 加速度越小, 单位时间的位移越小, 模拟的轨迹就越多越详细
        a = random.randint(10000, 12000)  # 加速运动
        # 初速度
        v0 = v
        t = random.randint(9, 18)
        s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
        # 当前的位置
        current += s
        # 速度已经达到v, 该速度作为下次的初速度
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
    y_list = []
    for j in range(len(tracks_list)):
        y = random.choice(
            [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
             -1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1, 0, 0])
        y_list.append(y)
        j += 1
    trace = []
    for index, x in enumerate(tracks_list):
        trace.append({
            'x': zx + x,
            'y': zy + y_list[index]
        })
    return trace


def get_token():
    """
    获取页面 token 认证
    :return:
    """
    url = "https://m.ctrip.com/restapi/soa2/11470/getToken.json?t={}&callback=$_bf_uniq_F5".format(int(time.time() * 1000))
    resp = requests.get(url, headers=headers)
    result = json.loads(resp.text.replace('$_bf_uniq_F5(', '').replace(')', ''))
    token = result['data']['token']
    return token


def get_sfp(token):
    """
    加密 token 生成 sfp 参数
    :param token:
    :return:
    """
    with open('get_sfp.js', 'rb') as f:
        fjs = f.read().decode()
    fctx = execjs.compile(fjs)
    sfp = fctx.call('get_sfp', token)
    return sfp


def init_encrypt(sfp):
    """
    滑块初始化接口加密
    :param sfp:
    :return:
    """
    with open('xc_slider.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    data = ctx.call('init_encrypt', sfp)
    return data


def verify_encrypt(verify_msg, dimensions):
    """
    滑块验证接口加密
    :param verify_msg:
    :param dimensions:
    :return:
    """
    with open('xc_slider.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('verify_encrypt', verify_msg, dimensions)


def process_param(trace, pass_time, start_time):
    """
    轨迹等信息参数处理
    :param trace:
    :param pass_time: 滑动总时间
    :param start_time: 开始时间
    :return:
    """
    M = {
        'st': start_time,
        'slidingTime': pass_time,
        'display': "1366x768",
        'keykoardTrack': [],
        'slidingTrack': trace,
        'timezone': -480,
        'flashState': 'false',
        'language': "zh-CN",
        'platform': "Win32",
        'cpuClass': 'undefined',
        'hasSessStorage': 'true',
        'hasLocalStorage': 'true',
        'hasIndexedDB': 'true',
        'hasDataBase': 'true',
        'doNotTrack': 'false',
        'touchSupport': 'false',
        'mediaStreamTrack': 'true'
    }
    x = json.dumps(M)
    x = x.replace('"undefined"', 'undefined')
    x = x.replace('"true"', 'true')
    x = x.replace('"false"', 'false')
    x = x.replace(' ', '')
    return x


def md5_encrypt(verify_msg, dimensions):
    """
    md5 加密 sign 参数
    :param verify_msg:
    :param dimensions:
    :return:
    """
    md5 = hashlib.md5()
    text = "appid=100008493&business_site={}&version=2.5.31&verify_msg=".format(params['business_site']) + verify_msg + "&dimensions=" + dimensions + "&extend_param=iSGlZQho4OSS/KGB9EdMa4gs7/aOolEsmfreUUGCzkYnLgC1AIjYbIE3CK3ICeMvDgY8mdt4SZaP9R3sESMrKTUJI77Mw+Myw7MabSpqYmTwvU4v53bDBOiB8/V0GSZaARtsr5b5SdF7+AsEcVKKQ6/BPidZ/wyPxqDO1KovoAe7zM9T6Ib2TGojr9EfzVYQ"
    md5.update(text.encode())
    return md5.hexdigest()


def get_verify_msg(data):
    """
    轨迹加密
    :param data:
    :return:
    """
    with open('xc_slider.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    verify_msg = ctx.call('get_verify_msg', data)
    return verify_msg


def _init_slider(data):
    """
    滑块初始化
    :param data:
    :return:
    """
    url = 'https://ic.ctrip.com/captcha/risk_inspect'
    params.update(data)
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('captcha029311869916299216(', '').replace(')', ''))
    if result['message'] == 'Success':
        print('滑块初始化成功! ')
        return result['result']['rid']
    return None


def _slider_verify(rid, verify_msg, dimensions, sign):
    """
    滑块验证
    :param rid: 滑块标识
    :param verify_msg: 轨迹等信息加密参数
    :param dimensions: 环境加密参数
    :param sign: md5 校验签名
    :return:
    """
    url = 'https://ic.ctrip.com/captcha/verify_slider'

    params.update({
        'rid': rid,
        'verify_msg': verify_msg,
        'dimensions': dimensions,
        'extend_param': 'iSGlZQho4OSS/KGB9EdMa4gs7/aOolEsmfreUUGCzkYnLgC1AIjYbIE3CK3ICeMvDgY8mdt4SZaP9R3sESMrKTUJI77Mw+Myw7MabSpqYmTwvU4v53bDBOiB8/V0GSZaARtsr5b5SdF7+AsEcVKKQ6/BPidZ/wyPxqDO1KovoAe7zM9T6Ib2TGojr9EfzVYQ',
        'sign': sign,
    })
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('captcha029311869916299216(', '').replace(')', ''))
    print(result)
    if result['message'] == 'Success':
        if result['result']['risk_info']['risk_level'] == 0:
            return {
                'success': 1,
                'message': '校验通过! ',
                'data': {
                    'token': result['result']['token']
                }
            }
        return {
            'success': 1,
            'message': '需要进一步点选验证! ',
            'data': None
        }
    return {
        'success': 0,
        'message': '校验失败! ',
        'data': None
    }


def crack():
    token = get_token()
    sfp = get_sfp(token)
    data = init_encrypt(sfp)
    time.sleep(random.uniform(0.1, 0.5))
    start_time = int(time.time() * 1000)
    dimensions = data['dimensions']
    rid = _init_slider(data)
    trace = _generate_trace()
    pass_time = int(time.time() * 1000) - start_time
    y_data = process_param(trace, pass_time, start_time)
    verify_msg = get_verify_msg(y_data)
    sign = md5_encrypt(verify_msg, dimensions)
    result = _slider_verify(rid, verify_msg, dimensions, sign)
    return result


if __name__ == '__main__':
    x = crack()
    print(x)
