# -*- coding: utf-8 -*-
# @Time    : 2019/10/4 15:34
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : test.py
# @Software: PyCharm

import os
import re
import json
import time
import execjs
import numpy as np
from PIL import Image
import cv2
import random
import requests
from selenium import webdriver

session = requests.session()
session.headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'referer': 'https://v4.passport.sohu.com/fe/register/1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
}
cookies = {
    'gidinf': 'x099980109ee1014ae86ee0560000377a3aa24695584',
    'jv': '9f1a3e757410b19696fe3ad65a214502-fEncCjo71570020399788',
}


def _pic_download(url, type):
    """
    图片下载
    :param url:
    :param type:
    :return:
    """
    img_path = os.path.abspath('...') + '\\' + '{}.jpg'.format(type)
    img_data = session.get(url, cookies=cookies).content
    with open(img_path, 'wb') as f:
        f.write(img_data)
    return img_path


def _cut_slider(path):
    """
    滑块切割
    :return:
    """
    image = Image.open(path)
    x = []
    y = []
    for i in range(image.size[0]):
        for j in range(image.size[1]):
            pix = image.load()[i, j]
            if pix != 255:
                x.append(i)
                y.append(j)
    z = (np.min(x), np.min(y), np.max(x), np.max(y))
    result = image.crop(z)
    result.convert('RGB').save('targ.jpg')
    # result.show()
    return result.size[0], result.size[1]


def merge_img(img_path):
    """
    图片还原 python 实现, 还原 js 如下:
    // 生成一个空的图片对象
    t = new Image;
    // 获取后台返回的乱序图片对象
    var n = document.getElementById("slideImg")
      , i = n.getContext("2d");
    // 清空
    i.clearRect(0, 0, 260, 160);
    // 将乱序图片分割粘贴进新建的空图片
    for (var o = 0; o < 13; o++)
        // drawImage 方法说明:
             i: 乱序图片
             t: 空图片
             20 * o, 0: 切割起始 x, y
             20, 80: 切割图片宽、高
             20 * (12 - o), 80: 粘贴起始x, y
        i.drawImage(t, 20 * o, 0, 20, 80, 20 * (12 - o), 80, 20, 80),
        i.drawImage(t, 20 * o, 80, 20, 80, 20 * (12 - o), 0, 20, 80);
    :param img_path:
    :return:
    """
    img1 = Image.open(img_path)
    img2 = Image.new('RGB', (260, 160))

    for i in range(13):
        img_upper = img1.crop((20 * i, 0, 20 * i + 20, 80))
        img2.paste(img_upper, (20 * (12 - i), 80))
        img_lower = img1.crop((20 * i, 80, 20 * i + 20, 160))
        img2.paste(img_lower, (20 * (12 - i), 0))

    img2.save(img_path)
    # img2.show()


def _get_distance(slider_url, captcha_url):
    """
    获取缺口距离
    :param slider_url: 滑块图片 url
    :param captcha_url: 验证码图片 url
    :return:
    """

    # 引用上面的图片下载
    slider_path = _pic_download(slider_url, 'slider')

    # time.sleep(2)

    # 引用上面的图片下载
    captcha_path = _pic_download(captcha_url, 'captcha')

    # 图片还原
    merge_img(captcha_path)

    # # 计算拼图还原距离
    target = cv2.imread(slider_path, 0)
    template = cv2.imread(captcha_path, 0)
    temp = 'temp.jpg'
    targ = 'targ.jpg'
    cv2.imwrite(targ, target)
    w, h = _cut_slider(slider_path)
    cv2.imwrite(temp, template)
    target = cv2.imread(targ)
    target = cv2.cvtColor(target, cv2.COLOR_BGR2GRAY)
    target = abs(255 - target)
    cv2.imwrite(targ, target)
    target = cv2.imread(targ)
    template = cv2.imread(temp)
    result = cv2.matchTemplate(target, template, cv2.TM_CCOEFF_NORMED)
    x, y = np.unravel_index(result.argmax(), result.shape)

    # 调用PIL Image 做测试
    image = Image.open(captcha_path)

    xy = (y + 5, x + 8, y + w - 3, x + h - 3)
    # 切割
    imagecrop = image.crop(xy)
    # 保存切割的缺口
    imagecrop.convert('RGB').save("new_image.jpg")
    imagecrop.show()
    return int(y + 5)


def _generate_trace(distance):
    """
    生成轨迹
    :param distance:
    :return:
    """
    # 初速度
    v = 0
    # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
    tracks_list = []
    # 当前的位移
    current = 0
    while current < distance - 3:
        # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
        a = random.randint(10000, 12000)  # 加速运动
        # 初速度
        v0 = v
        t = random.randint(9, 18)
        s = v0 * t / 1000 + 0.5 * a * ((t / 1000) ** 2)
        # 当前的位置
        current += s
        # 速度已经达到v,该速度作为下次的初速度
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
    zy = 0
    for j in range(len(tracks_list)):
        y = random.choice(
            [0, 0, 1, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
             -1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0])
        zy += y
        y_list.append(zy)
        j += 1
    base_y = str(-random.randint(330, 350))
    trace = [['0', base_y], ['0', base_y], ['0', base_y]]
    for index, x in enumerate(tracks_list):
        trace.append([str(x), str(y_list[index])])
    t_last = trace[-1]
    for _ in range(random.randint(4, 6)):
        trace.append(t_last)
    return trace


def process_trace(trace):
    """
    处理轨迹
    :param trace:
    :return:
    """
    return json.dumps({
        'data': ['|'.join(x) for x in trace],
        'rdata': {
            'r1': '|'.join([str(int(trace[-1][0]) + 1), trace[-1][1]]),
        }
    }).replace(' ', '')


def _encrypt_trace(trace):
    """
    加密轨迹
    :return:
    """
    with open('sh_slider.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('encrypt_trace', trace)


def get_captcha():
    url = 'https://v4.passport.sohu.com/i/captcha/npicture'
    pagetoken = int(time.time() * 1000)
    params = {
        'pagetoken': pagetoken,
        'appid': '999801',
        'callback': 'passport4071_cb1569998901921',
        '_': int(time.time() * 1000)
    }
    resp = session.get(url, params=params, cookies=cookies)
    result = json.loads(resp.text.replace('passport4071_cb1569998901921(', '').replace(')', ''))
    if result['status'] == 200:
        captcha = 'https://39d0825d09f05.cdn.sohucs.com/' + result['body']['bg']
        slider = 'https://39d0825d09f05.cdn.sohucs.com/' + result['body']['slice']
        return {
            'captcha_url': captcha,
            'slider_url': slider,
            'pagetoken': pagetoken,
        }
    return None


def get_js():
    url = 'https://v4.passport.sohu.com/i/jf/code'
    params = {
        'callback': '',
        'type': 0,
        '_': int(time.time() * 1000)
    }
    resp = session.get(url, params=params, cookies=cookies)
    js = resp.text.replace('"', '')
    return js


def evaluate_js(js):
    """
    执行接口返回的js生成 cookie jv
    这段混淆 js 调用了 document 对象, 测试伪造 document 生成的 jv 值不生效
    猜测需要搜狐站点的某些特征（具体哪些暂时不知道）, 因此采用 selenium 执行
    :param js:
    :return:
    """
    options = webdriver.ChromeOptions()
    options.add_argument('lang=zh_CN.UTF-8')
    options.add_argument('--headless')
    options.add_argument(
        'user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"'
    )
    driver = webdriver.Chrome(options=options)
    # 进入搜狐注册页面构造 jv 生成函数所需环境
    driver.get('https://v4.passport.sohu.com/fe/register/1')
    driver.delete_all_cookies()
    jv = driver.execute_script('return {}'.format(js)).split(';')[0].split('=')[1]
    driver.quit()
    return jv


def _slider_verify(pagetoken, point):
    url = 'https://v4.passport.sohu.com/i/captcha/nvalid'
    data = {
        'pagetoken': pagetoken,
        'point': point,
        'appid': '999801',
        'callback': ''
    }
    resp = session.post(url, data=data, cookies=cookies)
    result = json.loads(re.search(r'parent\.\((.*?)\)', resp.text).group(1))
    print(result)
    if result['status'] == 200:
        return {
            'success': 1,
            'message': '校验成功! ',
            'data': {
                'validate': result['body']['validate']
            }
        }
    return {
        'success': 0,
        'message': '校验失败! ',
        'data': None
    }


def crack():
    init_data = get_captcha()
    distance = _get_distance(init_data['slider_url'], init_data['captcha_url'])
    trace = _generate_trace(distance)
    trace = process_trace(trace)
    js = get_js()
    jv = evaluate_js(js)
    cookies.update({'jv': jv})
    point = _encrypt_trace(trace)
    result = _slider_verify(init_data['pagetoken'], point)
    return result


if __name__ == '__main__':
    x = crack()
    print(x)
