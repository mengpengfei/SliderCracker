# -*- coding: utf-8 -*-
# @Time    : 2019/10/3 20:54
# @Author  : Esbiya
# @Email   : 18829040039@163.com
# @File    : des.py
# @Software: PyCharm


from Crypto.Cipher import DES
import base64


def encrypt(key, text):
    """
    DES 加密
    :param key: 密钥, 长度必须为 16(AES-128)、24(AES-192)、32(AES-256) Bytes 长度
    :param text: 密文
    :return:
    """
    encrypter = DES.new(key.encode(), DES.MODE_ECB)
    length = 8
    count = len(text)
    if count < length:
        add = (length - count)
        text = text + ('\0' * add)
    elif count > length:
        add = (length - (count % length))
        text = text + ('\0' * add)
    ciphertext = encrypter.encrypt(text.encode())
    return base64.b64encode(ciphertext)


def decrypt(key, text):
    """
    DES 解密
    :param key: 密钥
    :param text: 密文
    :return:
    """
    decrypter = DES.new(key.encode(), DES.MODE_ECB)
    return decrypter.decrypt(text).decode()


if __name__ == '__main__':
    pass
