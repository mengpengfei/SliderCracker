# -*- coding: utf-8 -*-
# @Time    : 2019/9/7 15:19
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : encrypt.py
# @Software: PyCharm


from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import binascii, json, os
import random
import hashlib
import rsa


class Encrypter:

    def __init__(self):
        # rsa 加密系数
        self.modulus = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81"
        # rsa 加密指数
        self.pub_key = '10001'

    def encrypted_request(self, initData, userresponse, passtime, aa):
        """
        md5 加密
        :param initData:
        :param userresponse:
        :param passtime:
        :param aa:
        :return:
        """
        md5 = hashlib.md5()
        md5.update(bytes(initData['gt'], encoding='utf-8'))
        md5.update(bytes(initData['challenge'][0:32], encoding='utf-8'))
        md5.update(bytes(str(passtime), encoding='utf-8'))
        text = {
            "userresponse": userresponse,
            "passtime": passtime,
            "imgload": random.randint(100, 800),
            "aa": aa,
            "ep": {"v": "6.0.9"},
            'rp': md5.hexdigest()
        }
        text = json.dumps(text, separators=(',', ':'))
        sec_key = self.create_secret_key(8)
        # rsa 不对称性对 aes的密钥进行加密
        enc_sec_key = self.rsa_encrpt(sec_key, self.pub_key, self.modulus)

        # aes 对称加密  进行轨迹加密
        iv = b"0000000000000000"
        enc_text = self.aes_encrypt(text, sec_key.decode('utf-8'), iv)
        array = []
        for byte in enc_text:
            array.append(byte)

        enc_text = self.bytes_to_string(array)
        # print(enc_text)
        data = {
            'gt': initData['gt'],
            'challenge': initData['challenge'],
            'w': enc_text + enc_sec_key,
            # 'callback': 'geetest_' + str(int(time.time() * 1000)),
        }
        return data

    @staticmethod
    def aes_encrypt(text, secKey, iv, style='pkcs7'):
        """
        :param text: 文本
        :param secKey: 密钥
        :param iv: 初始iv  bytes
        :param style: 返回函数类型
        :return:
        """
        encryptor = AES.new(secKey.encode('utf-8'), AES.MODE_CBC, iv)
        pad_pkcs7 = pad(text.encode('utf-8'), AES.block_size, style=style)
        ciphertext = encryptor.encrypt(pad_pkcs7)
        return ciphertext

    @staticmethod
    def rsa_encrpt(text, pubKey, modulus):
        """
        rsa 加密
        :param text: 文本
        :param pubKey: 公钥
        :param modulus: 加密系数
        :return:
        """
        PublicKey = rsa.PublicKey(int(modulus, 16), int(pubKey, 16))  # rsa库公钥形式
        rs = rsa.encrypt(text, PublicKey)
        return rs.hex()

    @staticmethod
    def create_secret_key(size):
        # 作用是返回的二进制数据的十六进制表示。每一个字节的数据转换成相应的2位十六进制表示
        return binascii.hexlify(os.urandom(size))

    @staticmethod
    def bytes_to_string(enc_byte):
        flag = 3
        I9z = 3
        t6B = {
            'wa': 7274496,
            'xa': 9483264,
            'ya': 19220,
            'za': 235,
            'r': '.'
        }
        string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()"

        def da(r0B):
            if r0B < 0 or r0B >= len(string):
                return "."
            else:
                return string[r0B]

        def function(Q6B, x6B):
            a5r = 0
            while a5r != -1:
                if a5r == 1:
                    a5r = 2 if v6B >= 0 else 4
                elif a5r == 0:
                    I6B = 0
                    v6B = 24 - 1  # t6B["Aa"]
                    a5r = 1
                elif a5r == 2:
                    if 1 == (x6B >> v6B & 1):
                        I6B = (I6B << 1) + (Q6B >> v6B & 1)
                    a5r = 3
                elif a5r == 4:
                    return I6B
                elif a5r == 3:
                    v6B -= 1
                    a5r = 1

        N6B = function
        j6B = ""
        K6B = ""
        c6B = len(enc_byte)
        f6B = 0

        while flag != -1:
            if flag == 6:
                # 每三位为一组  246 76 179
                B6B = (enc_byte[f6B] << 16) + (enc_byte[f6B + 1] << 8) + enc_byte[f6B + 2]
                j6B += da(N6B(B6B, t6B["wa"])) + da(N6B(B6B, t6B["xa"])) + da(N6B(B6B, t6B["ya"])) + da(
                    N6B(B6B, t6B["za"]))
                flag = 8
            elif flag == 5:
                flag = 6 if f6B + 2 < c6B else 9
            elif flag == 3:
                flag = 5 if f6B < c6B else 11
            elif flag == 8:
                f6B += 3
                flag = 3
            elif flag == 9:
                n6B = c6B % 3
                flag = 10
            elif flag == 10:
                if 2 == n6B:
                    B6B = (enc_byte[f6B] << 16) + (enc_byte[f6B + 1] << 8)
                    j6B += da(N6B(B6B, t6B["wa"])) + da(N6B(B6B, t6B["xa"])) + da(N6B(B6B, t6B["ya"]))
                    K6B = t6B["r"]
                else:
                    if 1 == n6B:
                        B6B = enc_byte[f6B] << 16
                        j6B += da(N6B(B6B, t6B["wa"])) + da(N6B(B6B, t6B["xa"]))
                        K6B = t6B["r"] + t6B["r"]
                flag = 8
            elif flag == 11:
                tmp = {
                    '\x72\x65\x73': j6B,
                    '\x65\x6e\x64': K6B
                }
                return j6B + K6B


if __name__ == '__main__':
    pass