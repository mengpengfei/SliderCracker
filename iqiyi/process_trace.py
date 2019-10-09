# -*- coding: utf-8 -*-
# @Time    : 2019/10/9 9:29
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : img_process.py
# @Software: PyCharm

import time
import random


def get_required_origin_data(post_data_length, trace):
    """
    将轨迹数组按照5个一组重新排列
    :param post_data_length:
    :param trace:
    :return:
    """
    required_origin_data = []
    a = 0
    per = int((len(trace) - 4) / 20)
    for _ in range(post_data_length):
        required_origin_data.append(trace[a: a + 5])
        a += per
    return required_origin_data


def get_acceleration(data):
    """
    处理轨迹数据生成加速度等信息
    :param data: 一组长度为5的轨迹数组
    :return:
    """
    u = []
    i = len(data) - 1
    while i > 0:
        u.append((data[i]['x'] - data[i - 1]['x']) / (data[i]['date'] - data[i - 1]['date']))
        i -= 1
    t = len(u) - 1
    a = []
    while t > 0:
        a.append((u[t] + u[t - 1]) / 2)
        t -= 1
    e = a[1]
    _ = (a[0] - a[2]) / (data[3]['date'] - data[1]['date'])

    return {
        'x': data[2]['x'],
        'y': data[2]['y'],
        'date': data[2]['date'],
        'v': e,
        'aspeed': _
    }


def process_trace(trace):
    """
    处理轨迹
    :param trace:
    :return:
    """
    speed_and_aspeed = []
    post_data_length = len(trace) - 4
    if post_data_length >= 20:
        post_data_length = 20
    required_origin_data = get_required_origin_data(post_data_length, trace)
    for i in range(post_data_length):
        process_data = required_origin_data[i]
        speed_and_aspeed.append(get_acceleration(process_data))
    return speed_and_aspeed


def _generate_trace(distance, ypos):
    """
    生成轨迹
    :param distance: 缺口距离
    :param ypos: y 坐标
    :return:
    """
    start_x = random.randint(105, 120)
    back = random.randint(2, 6)
    distance += back
    # 初速度
    v = 0
    # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
    tracks_list = []
    # 当前的位移
    current = 0
    while current < distance - 13:
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
    # 回退
    for _ in range(back):
        current -= 1
        tracks_list.append(round(current))
    tracks_list.append(round(current) - 1)
    if tracks_list[-1] != distance - back:
        tracks_list.append(distance - back)
    # 生成时间戳列表
    timestamp_list = []
    timestamp = int(time.time() * 1000)
    for i in range(len(tracks_list)):
        t = random.randint(11, 18)
        timestamp += t
        timestamp_list.append(timestamp)
        i += 1
    y_list = []
    zy = 0
    for j in range(len(tracks_list)):
        y = random.choice(
            [0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
             -1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, -1, 0, 0])
        zy += y
        y_list.append(zy)
        j += 1
    trace = []
    for index, x in enumerate(tracks_list):
        trace.append({
            'x': x + start_x,
            'y': y_list[index] + ypos,
            'date': timestamp_list[index]
        })
    return trace[: -1]


def get_risk_data(distance, start_time, ypos):
    """
    根据缺口距离构造轨迹数组并处理成提交表单样式
    :return:
    """
    trace = _generate_trace(distance, ypos)
    speed_and_aspeed = process_trace(trace)
    time.sleep(random.uniform(0.3, 0.6))
    arrive_time = int(time.time() * 1000)
    spend_time = arrive_time - start_time
    return {
        'click_times': 1,
        'arrive_time': arrive_time,
        'click_frequency': 1 / spend_time * 1000,
        'spend_time': spend_time,
        'speed_and_aspeed': speed_and_aspeed
    }


if __name__ == '__main__':
    pass
