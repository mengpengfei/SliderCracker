// 已删除关键 js, RSA 加密, 请自行补全

function RSAEncrypt(text) {
    var encrypter = new zc();
    var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCfyy01w1BXvMX8hc0ooyaCcXv2A0fsqDjcEXZ8AQJSHU00iG9YoYyLwmS0G9eE+dEFomOI2a+mrh9JYpw2Y26oGFZFA8Dtly5Go4nXeFT/pEeSwWINcXQ5Y9WCMTkQ+RN5WJ0UPvWt+soqP3Z5FJdMJTWA4lwIyoN3c4d9dWcpkQIDAQAB";
    encrypter.setPublicKey(publicKey);
    return encrypter.encrypt(a(text))
}
