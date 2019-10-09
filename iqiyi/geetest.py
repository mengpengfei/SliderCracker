# -*- coding: utf-8 -*-
# @Time    : 2019/10/7 10:43
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : geetest.py
# @Software: PyCharm

import re
import json
import random
import time
import requests
from iqiyi.img_locate import get_distance
from iqiyi.process_trace import get_risk_data
from iqiyi import iqiyi_crypt


class IqiyiSliderCracker:

    def __init__(self, dfp):
        self.i = iqiyi_crypt.get_random_str(64)
        self.r = iqiyi_crypt.get_random_str(32)
        # 这个 dfp 参数是个环境参数, 很重要, 是绕过爱奇艺滑块的关键, 我们这里使用的是过期的 dfp 参数, 以便可以触发爱奇艺安全盾
        self.dfp = dfp
        self.session = requests.session()
        self.session.headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://www.iqiyi.com',
            'Referer': 'https://www.iqiyi.com/iframe/loginreg?ver=1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36'
        }

    def login(self, env_token=''):
        """
        登录, 只有一个加密参数密码, 其他为定值
        触发滑块, 测试用
        :return:
        """
        url = 'https://passport.iqiyi.com/apis/reglogin/login.action'

        encrypt_pwd = iqiyi_crypt.encrypt_pwd('fheniudhqiu')

        data = {
            'email': iqiyi_crypt.get_random_phone(),
            'fromSDK': '1',
            'sdk_version': '1.0.0',
            'passwd': encrypt_pwd,
            'agenttype': '1',
            '__NEW': '1',
            'checkExist': '1',
            'lang': '',
            'ptid': '01010021010000000000',
            'nr': '1',
            'verifyPhone': '1',
            'area_code': '86',
            'dfp': self.dfp,
            'env_token': env_token,
            'envinfo': 'eyJqbiI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NS4wLjM3NzAuODAgU2FmYXJpLzUzNy4zNiIsImNtIjoiemgtQ04iLCJndSI6MjQsInVmIjoxLCJqciI6WzEzNjYsNzY4XSwiZGkiOlsxMzY2LDcyOF0sInpwIjotNDgwLCJ1aCI6MSwic2giOjEsImhlIjoxLCJ6byI6MSwicnYiOiJ1bmtub3duIiwibngiOiJXaW4zMiIsIml3IjoidW5rbm93biIsInFtIjpbIkNocm9tZSBQREYgUGx1Z2luOjpQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQ6OmFwcGxpY2F0aW9uL3gtZ29vZ2xlLWNocm9tZS1wZGZ+cGRmIiwiQ2hyb21lIFBERiBWaWV3ZXI6Ojo6YXBwbGljYXRpb24vcGRmfnBkZiIsIk5hdGl2ZSBDbGllbnQ6Ojo6YXBwbGljYXRpb24veC1uYWNsfixhcHBsaWNhdGlvbi94LXBuYWNsfiJdLCJ3ciI6ImI3NzY2NGM3MTcwNzdhZmZmMzNhN2QyODM2ZTIzNzdjIiwid2ciOiJlZDI2NTg5MTM1MTJlNTA5MmZlMjE5NDAwOGQ3OWEwZSIsImZrIjpmYWxzZSwicmciOmZhbHNlLCJ4eSI6ZmFsc2UsImptIjpmYWxzZSwiYmEiOmZhbHNlLCJ0bSI6WzAsZmFsc2UsZmFsc2VdLCJhdSI6dHJ1ZSwibWkiOiI5YTZlZWMzMS0xODAxLWI5ZGEtMDU3My1jMTVmOGVhMjVlNDEiLCJjbCI6IlBDV0VCIiwic3YiOiIxLjAiLCJqZyI6IjhkYTZmNDY5NmQ4YmU1ODFkMDliNzE3MTkwNTIxMGI5IiwiZmgiOiI0OGZpem1rcnZkejJ3Y2Q2ZzhqMXNybjkiLCJpZm0iOlt0cnVlLDQ2MCw0MjAsImh0dHBzOi8vd3d3LmlxaXlpLmNvbS8iXSwiZXgiOiIiLCJkdiI6Im9mZiIsInB2Ijp0cnVlfQ=='
        }
        result = self.session.post(url, data=data).json()
        if result['code'] == 'P00223':
            print('出现滑块: {}'.format(result))
            return result['data']['data']['token']
        elif result['code'] == 'P00159':
            print('未出现滑块: {}'.format(result))
            return None
        print('滑块验证通过: {}'.format(result))
        return None

    def _init_key(self):
        """
        初始化密钥
        :return:
        """
        secure = iqiyi_crypt.generate_secure(self.i, self.r)
        # print('secure: {}'.format(secure))

        url = 'https://qcaptcha.iqiyi.com/api/outer/sbox/sbox_init_key'
        data = {
            'secure': secure,
            'platform': 'web',
            'lang': 'zh_cn',
            'langVersion': '6',
            'dfp': 'undefined',
            'authcookie': 'undefined',
            'nifc': 'false'
        }
        result = self.session.post(url, data=data).json()
        if result['code'] == 'A00000':
            print('初始化密钥成功! ')
            # print('密钥初始化数据: {}'.format(result))
            return {
                'sid': result['data']['sid'],
                'sr': result['data']['sr']
            }
        return None

    def format_origin_data(self, token):
        """
        构造滑块初始化加密字符串
        :param token:
        :return:
        """
        return json.dumps({
            't': int(time.time() * 1000),
            'token': token,
            'width': 290,
            'height': 170,
            'clientVersion': 1,
            'dfp': self.dfp,
            'extend': json.dumps({
                "dfp": self.dfp,
                "ptid": "01010021010000000000",
                "agentType": 1,
                "deviceId": "268f8fe0ab5234ce32705696d288397e",
                "areaCode": "86"
            }
            )}).replace(' ', '')

    def _init_slider(self, token, aes_key, hmac_key, sid):
        """
        初始化滑块
        :param token:
        :param aes_key: AES 密钥
        :param hmac_key hmac 密钥
        :param sid: 密钥认证参数
        :return:
        """
        url = 'https://qcaptcha.iqiyi.com/api/outer/verifycenter/initpage'

        origin_data = self.format_origin_data(token)
        cryptsrc_data = iqiyi_crypt.crypt_srcdata(aes_key, hmac_key, origin_data)

        encrypt_data = {
            'cryptSrcData': cryptsrc_data,
            'cryptVersion': 'web|20180418xkdewxe3dkxu9|' + sid,
            'platform': 'web',
            'nifc': 'false'
        }
        # print('提交表单: {}'.format(encrypt_data))
        resp = self.session.post(url, data=encrypt_data)
        # print('验证码初始化接口返回加密数据: {}'.format(resp.text))
        decrypt_data = json.loads(iqiyi_crypt.aes_decrypt(aes_key, resp.text.split('|')[0])[:-4])
        # print('AES 解密后数据: {}'.format(decrypt_data))
        init_data = decrypt_data['data']['initData']
        print('滑块初始化成功! ')
        return init_data

    def format_verify_data(self, token, distance, start_time, ypos):
        """
        构造提交表单
        :param token:
        :param distance:
        :param start_time:
        :param ypos:
        :return:
        """
        risk_data = get_risk_data(distance, start_time, ypos)
        time.sleep(random.uniform(0.5, 1.5))
        return json.dumps({
            "t": int(time.time() * 1000),
            "token": token,
            "staticVerifyValue": distance,
            "riskData": json.dumps(risk_data),
            "clientVersion": 1,
            "platform": "web",
            "dfp": self.dfp
        }).replace(' ', '')

    def _slider_verify(self, post_data, aes_key, hmac_key, sid):
        """
        最终验证
        :param post_data: 提交表单
        :param aes_key: AES 密钥
        :param hmac_key hmac 密钥
        :param sid: 密钥认证参数, 服务器用来识别你加密的密钥, 从而解密你提交的表单
        :return:
        """
        url = 'https://qcaptcha.iqiyi.com/api/outer/verifycenter/verify'
        data = {
            'cryptSrcData': iqiyi_crypt.crypt_srcdata(aes_key, hmac_key, post_data),
            'cryptVersion': 'web|20180418xkdewxe3dkxu9|' + sid,
            'platform': 'web',
            'noCryptToken': 'undefined',
            'nifc': 'false'
        }
        resp = self.session.post(url, data=data)
        print('接口返回的加密数据: {}'.format(resp.text))
        result = json.loads(re.search('{(.*?)}', iqiyi_crypt.aes_decrypt(aes_key, resp.text.split('|')[0])).group(0))
        print('AES 解密后的数据: {}'.format(result))
        return result

    def crack(self):
        """
        整个破解流程
        :return:
        """
        # 登录触发滑块, 注意要使用未过期且可疑的 dfp 参数,
        token = self.login()
        if not token:
            return {
                'success': 0,
                'message': '该 dfp 参数已过期, 请更换未过期并且可疑的 dfp 参数, 以便触发滑块验证! ',
                'data': None
            }
        # 初始化密钥, 明文传输 i、加密传输 r 这两个参数给服务器, 服务器会返回给你一个 sr 和 sid
        # 其中 i, r, sr 用来生成 AES 和 hMac 密钥, sid 用来给服务器识别你之后传输的加密数据是哪个密钥加密的, 方便服务器解密
        key_data = self._init_key()
        # 生成 AES 密钥
        aes_key = iqiyi_crypt.generate_aeskey(self.i, self.r, key_data['sr'])
        # 生成 hMac 哈希密钥
        hmac_key = iqiyi_crypt.generate_hmackey(self.i, self.r, key_data['sr'])
        # 用和服务器约定好的密钥进行 AES 对称加密, 初始化滑块
        init_data = self._init_slider(token, aes_key, hmac_key, key_data['sid'])
        # 模拟滑动轨迹
        start_time = int(time.time() * 1000)
        # 停顿0.1~0.5 s, 模拟人为反应
        time.sleep(random.uniform(0.1, 0.5))
        # js 还原乱序图片, 并用 cv2 的 matchTemplate 方法识别缺口距离
        distance = get_distance(init_data)
        # 构造滑动轨迹 post 表单
        verify_data = self.format_verify_data(token, distance, start_time, init_data['iconYOffset'])
        # 最终验证
        result = self._slider_verify(verify_data, aes_key, hmac_key, key_data['sid'])
        if result['code'] == "A00000":
            return {
                'success': 1,
                'message': '校验通过! ',
                'data': {
                    'env_token': result['data']
                }
            }
        return {
            'success': 0,
            'message': result['msg'],
            'data': None
        }


if __name__ == '__main__':
    x = IqiyiSliderCracker('a1835676114a1946afb9b57417746ac8cc1ae2ca2e797a88078f7be3ba64f4db31').crack()
    print(x)
