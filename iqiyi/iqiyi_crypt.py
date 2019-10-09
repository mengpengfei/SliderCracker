# -*- coding: utf-8 -*-
# @Time    : 2019/10/9 14:28
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : iqiyi_crypt.py
# @Software: PyCharm


import execjs
import base64
import random
import hmac
import hashlib
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import algorithms
from Crypto.Cipher import AES
from Crypto.Cipher import PKCS1_v1_5 as Cipher_pkcs1_v1_5
from Crypto.PublicKey import RSA
from binascii import b2a_hex, a2b_hex


class AESCrypt:
    """
    AES 加解密
    """

    def __init__(self, key):
        self.key = key.encode('utf-8')
        self.iv = b"qwertyuiopasdfgh"  # 偏移量 定值

    # 加密函数，如果text不足16位就用空格补足为16位，
    # 如果大于16当时不是16的倍数，那就补足为16的倍数。
    def encrypt(self, text):
        """
        加密
        :param text: 密文
        :return:
        """
        cryptor = AES.new(self.key, AES.MODE_CBC, self.iv)
        text = text.encode('utf-8')

        # 这里密钥key 长度必须为16（AES-128）,
        # 24（AES-192）,或者32 （AES-256）Bytes 长度
        # 目前AES-128 足够目前使用

        text = self.pkcs7_padding(text)

        ciphertext = cryptor.encrypt(text)

        # 因为AES加密时候得到的字符串不一定是ascii字符集的，输出到终端或者保存时候可能存在问题
        # 所以这里统一把加密后的字符串转化为16进制字符串 "Kd34yA0KlX5E6g06WVy187bKxgTtg1M0Ml5vXK859Ooy7ACjXGdLZH1Y2xbNbAfL"  "wpgNVJD3xtv3oVzPDD4U8EiAJLijmCtQ"
        return b2a_hex(ciphertext).decode('ISO-8859-1')

    @staticmethod
    def process_decrypt(text):
        """
        处理解密文本
        :param text: 待处理加密字符串
        :return:
        """
        js = """
        // require 导入 crypto-js 
        var CryptoJS = require("C:\\\\Users\\\\Administrator\\\\node_modules\\\\crypto-js");
        function process_text(text) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(text))
        }
        """
        ctx = execjs.compile(js)
        return ctx.call('process_text', text)

    def decrypt(self, text):
        """
        解密
        :param text: 密文
        :return:
        """
        # 偏移量'abcdefg'
        if not isinstance(text, bytes):
            text = text.encode()
        cryptor = AES.new(self.key, AES.MODE_CBC, self.iv)
        try:
            plain_text = cryptor.decrypt(a2b_hex(text))
            return bytes.decode(plain_text).rstrip()
        except:
            # base64加密后的解密
            text = self.process_decrypt(text)
            print(text)
            plain_text = cryptor.decrypt(base64.decodebytes(text)).decode()
            return plain_text[0:-ord(plain_text[-1])]

    @staticmethod
    def pkcs7_padding(data):
        if not isinstance(data, bytes):
            data = data.encode()

        padder = padding.PKCS7(algorithms.AES.block_size).padder()

        padded_data = padder.update(data) + padder.finalize()

        return padded_data

    @staticmethod
    def pkcs7_unpadding(padded_data):
        unpadder = padding.PKCS7(algorithms.AES.block_size).unpadder()
        data = unpadder.update(padded_data)

        try:
            uppadded_data = data + unpadder.finalize()
        except ValueError:
            raise Exception('无效的加密信息! ')
        else:
            return uppadded_data


def generate_aeskey(i, r, sr):
    """
    生成 AES 密钥
    :param i
    :param r
    :param sr
    :return:
    """
    aes_key = sha256_encrypt(i)[:4] + sha256_encrypt(r)[:8] + sha256_encrypt(sr)[:4]
    return aes_key


def generate_hmackey(i, r, sr):
    """
    生成 hMac 密钥
    :param i
    :param r
    :param sr
    :return:
    """
    hmac_key = sha256_encrypt(i)[8: 12] + sha256_encrypt(r)[8: 16] + sha256_encrypt(sr)[8:12]
    return hmac_key


def rsa_encrypt(text):
    """
    RSA 加密
    :param text:
    :return:
    """
    with open('rsa_encrypt.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('RSAEncrypt', text)


def process_rsa(text):
    """
    处理 rsa 加密明文
    :return:
    """
    js = """
    function process_rsa(x) {
        for (var c = [], t = 0; t < x.length; t += 2)
            c.push(parseInt(x.substr(t, 2), 16));
        return c    
    }
    """
    ctx = execjs.compile(js)
    return ctx.call('process_rsa', text)


# def rsa_encrypt(text):
#     """
#     RSA 加密
#     :param text: 明文
#     :return:
#     """
#     public_key = '\n'.join([
#         "-----BEGIN PUBLIC KEY-----",
#         "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfyy01w1BXvMX8hc0ooyaCcXv2A0fsqDjcEXZ8AQJSHU00iG9YoYyLwmS0G9eE+dEFomOI2a+mrh9JYpw2Y26oGFZFA8Dtly5Go4nXeFT/pEeSwWINcXQ5Y9WCMTkQ+RN5WJ0UPvWt+soqP3Z5FJdMJTWA4lwIyoN3c4d9dWcpkQIDAQAB",
#         "-----END PUBLIC KEY-----"
#     ])
#     print(public_key)
#     rsa_key = RSA.importKey(public_key)
#     encrypter = Cipher_pkcs1_v1_5.new(rsa_key)
#     cipher = base64.b64encode(encrypter.encrypt(process_rsa(text)))
#     return cipher.decode()


def sha256_encrypt(text):
    """
    sha256 加密
    :param text: 明文
    :return:
    """
    sha256 = hashlib.sha256()
    sha256.update(text.encode())
    return sha256.hexdigest()


def aes_encrypt(key, text):
    """
    AES 加密
    :param key: 密钥
    :param text: 明文
    :return:
    """
    encrypter = AESCrypt(key)
    return encrypter.encrypt(text)


def aes_decrypt(key, text):
    """
    AES 解密
    :param key: 密钥
    :param text: 密文
    :return:
    """
    decryter = AESCrypt(key)
    return decryter.decrypt(text)


def hamc_encrypt(key, text):
    """
    hMac sha256 加密
    :param key: 密钥
    :param text: 明文
    :return:
    """
    return hmac.new(key.encode(), text.encode(), digestmod=hashlib.sha256).hexdigest().upper()


def crypt_srcdata(aes_key, hmac_key, text):
    """
    生成 cryptSrcdata 参数
    :param aes_key: AES 密钥
    :param hmac_key: hmac 密钥
    :param text: 待加密表单字符串
    :return:
    """
    aes_str = aes_encrypt(aes_key, text)
    hmac_str = hamc_encrypt(hmac_key, aes_str)
    cryptsrc_data = aes_str + '|' + hmac_str
    return cryptsrc_data


def get_random_phone():
    """
    生成随机11位电话号码, 用作测试
    :return:
    """
    return '1' + ''.join(random.sample(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 10))


def encrypt_pwd(password):
    """
    RSA 加密, 修改过的
    :return:
    """
    with open('encrypt_pwd.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('rsaFun', password)


def get_random_str(num):
    """
    根据当前时间生成指定长度的随机字符串
    :param num: 字符串长度
    :return:
    """
    with open('random_str.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('getRandomStr', num)


def encode_r_str(r):
    """
    编码 随机 32 位字符串 r
    :return:
    """
    js = """
    function encodeR(x) {
        for (var c = [], t = 0, e = x["length"]; t < e; t++) {
            var _ = Number(x["charCodeAt"](t)).toString(16);
            1 == _["length"] && (_ = "0" + _),
                c["push"](_)
        }
        return c["join"]("")
    }
    """
    ctx = execjs.compile(js)
    return ctx.call('encodeR', r)


def decode_rsa_str(rsa_str):
    """
    解码 RSA 字符串
    :param rsa_str
    :return:
    """
    with open('decode_rsa.js', 'rb') as f:
        js = f.read().decode()
    ctx = execjs.compile(js)
    return ctx.call('decodeRSA', rsa_str)


def generate_secure(i, r):
    """
    传输字符串给后台生成初始化密钥
    :param i: 随机 64 位字符串
    :param r: 随机 32 位字符串
    :return:
    """
    encode_str = encode_r_str(r)
    # print(encode_str)
    rsa_str = rsa_encrypt(encode_str)
    # print(rsa_str)
    decode_str = decode_rsa_str(rsa_str)
    # print(decode_str)
    sha256_str = sha256_encrypt("web20180418xkdewxe3dkxu9" + i + decode_str)
    # print(sha256_str)
    secure = "web|20180418xkdewxe3dkxu9|" + i + "|" + decode_str + "|" + sha256_str + "|1|1|1"
    return secure


if __name__ == '__main__':
    pass
