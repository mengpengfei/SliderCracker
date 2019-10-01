# -*- coding: utf-8 -*-
# @Time    : 2019/9/27 10:43
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm


import requests
import json
import execjs
import os
import random
from PIL import Image

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'referer': 'https://www.anjuke.com/captcha-verify/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:69.0) Gecko/20100101 Firefox/69.0'
}


def get_token():
    url = 'https://cdata.58.com/fpToken?callback='
    resp = requests.get(url, headers=headers)
    result = json.loads(resp.text.replace('(', '').replace(')', ''))
    if result['status'] == 'success':
        return result['token']


def get_track(distance):
    track_path = os.getcwd() + '\\' + 'trace.txt'
    with open(track_path, 'r+') as fp:
        lines = fp.readlines()
    match_tracks = []
    for line in lines:
        if line.strip() == '':
            continue
        x_pos = int(line.split('=')[0])
        track = line.split('=')[1].strip()

        if distance == x_pos or distance == x_pos + 1 or distance == x_pos - 1:
            match_tracks.append((distance, track))
    try:
        x_pos, track = random.choice(match_tracks)
        return x_pos, track
    except:
        return distance, None


def pic_download(url):
    """
    下载验证码图片
    :param url:
    :return:
    """
    img_data = requests.get(url).content
    img_db_path = os.getcwd() + '\\' + 'img_db'
    if not os.path.exists(img_db_path):
        os.mkdir(img_db_path)
    img_path = img_db_path + '\\' + 'anjuke_captcha.jpg'
    with open(img_path, 'wb') as f:
        f.write(img_data)
    return img_db_path, img_path


def get_distance(image):
    """
    获取缺口距离
    :param image:
    :return:
    """
    img_db_path, img_path = pic_download(image)
    image = Image.open(img_path)
    # image.show()
    image = image.resize((284, 160))
    image = image.convert('L')
    yuzhi = 150
    yuzhi2 = 40
    ll = 10
    for i in range(55, image.size[0] - 20):  # 260
        for j in range(0, image.size[1] - 20):  # 160
            flag = True
            for l in range(0, ll):
                pixel = image.getpixel((i, j)) - image.getpixel((i + 1, j + l))
                if pixel < yuzhi2:
                    flag = False
                # pixel = image.getpixel((i - l, j))
                # if pixel<yuzhi:flag=False
            for l in range(0, ll):
                pixel = image.getpixel((i, j + l))
                if pixel < yuzhi:
                    flag = False
            if flag:
                cropedimage = image.crop((i - 7, j - 7, i + 50, j + 50))
                cropedimage.save(img_db_path + '\\' + 'anjuke_slider.jpg')
                # cropedimage.show()
                return i - 7


def encrypt(track, distance, token, response_id):
    """
    轨迹加密
    :param track: 轨迹
    :param distance: 缺口距离
    :param token: 页面 token
    :param response_id: 验证码标识
    :return:
    """
    js_path = os.getcwd() + '\\' + 'slider.js'
    with open(js_path, 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('encrypt_data', track, int(distance), token, response_id)


def verify(response_id, session_id, data):
    """
    最终验证
    :param response_id:
    :param session_id:
    :param data:
    :return:
    """
    url = 'https://verifycode.58.com/captcha/checkV3?'
    params = {
        'callback': '',
        'responseId': response_id,
        'sessionId': session_id,
        'data': data
    }
    resp = requests.get(url, params=params, headers=headers)
    result = json.loads(resp.text.replace('(', '').replace(')', ''))
    if result['message'] == '校验成功':
        return result['data']['successToken']
    return None


def crack(captcha_url, session_id, response_id):
    """
    验证
    :param captcha_url:
    :param session_id:
    :param response_id:
    :return:
    """
    distance = get_distance(captcha_url)
    token = get_token()
    distance, track = get_track(distance)
    if not track:
        return {
            'success': 0,
            'message': '无库存轨迹! ',
            'data': None
        }
    data = encrypt(track, distance, token, response_id)
    result = verify(response_id, session_id, data)
    if result:
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': {
                'successToken': result
            }
        }
    return {
        'success': 0,
        'message': '校验失败!',
        'data': None
    }


if __name__ == '__main__':
    pass
