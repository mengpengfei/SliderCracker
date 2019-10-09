
function init_encrypt(sfp) {
    var S = {
        rt: "fp=13awamm-1dc6k9j-zf90ov&vid=1563080773482.2fun2q&pageId=&r=7e44164fbc7d4f968bed98b669ae54d5&ip=223.152.39.68&rg=undefined&kpData=0_0_0&kpControl=0_0_0-0_0_0&kpEmp=0_0_0_0_0_0_0_0_0_0-0_0_0_0_0_0_0_0_0_0-0_0_0_0_0_0_0_0_0_0&screen=1366x768&tz=+8&blang=zh-CN&oslang=zh-CN&ua=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F75.0.3770.80%20Safari%2F537.36&d=passport.ctrip.com&v=22",
        ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.80 Safari/537.36",
        p: "pc",
        fp: "13awamm-1dc6k9j-zf90ov",
        vid: null,
        sfp: sfp,
        svid: "Rq%3D-xh%24A!%7C%400AI%25%23u%23DFB%7DXhF(",
        guid: null,
        h5_duid: null,
        pc_duid: null,
        hb_uid: null,
        pc_uid: null,
        h5_uid: null,
        infosec_openid: null,
        device_id: ib(32, 3, "_bfs"),
        client_id: ib(32, 0, "_bfi"),
        pid: ib(16, 2, "corpid"),
        sid: ib(16, 1, "SMBID"),
        login_uid: ib(10, 2, "login_uid")
    },
    Db = {
        resolution_width: 1366,
        resolution_height: 768,
        language: "zh-CN"
    };
    var X = I(JSON.stringify(S), 0),
      ea = I(JSON.stringify(Db), 0),
      ra = C.MD5("appid=" + 100008493 + "&business_site=" + "crm_sms_online" + "&version=" + "2.5.31" + "&dimensions=" + X + "&extend_param=" + ea);
    return {
        dimensions: X,
        extend_param: ea,
        sign: ra.toString()
    }
}

// console.log(init_encrypt());

function get_verify_msg(data) {
    return I(data, 0)
}
// console.log(get_verify_msg('{"st":1570097582399,"slidingTime":426,"display":"1366x768","keykoardTrack":[],"slidingTrack":[{"x":336,"y":253},{"x":353,"y":253},{"x":378,"y":254},{"x":390,"y":255},{"x":400,"y":256},{"x":415,"y":257},{"x":426,"y":257},{"x":435,"y":258},{"x":443,"y":258},{"x":450,"y":259},{"x":456,"y":259},{"x":465,"y":261},{"x":477,"y":261},{"x":486,"y":263},{"x":496,"y":264},{"x":502,"y":265},{"x":508,"y":266},{"x":515,"y":267},{"x":521,"y":267},{"x":526,"y":268},{"x":532,"y":268},{"x":535,"y":268},{"x":538,"y":268},{"x":542,"y":268},{"x":545,"y":268},{"x":549,"y":267},{"x":553,"y":266},{"x":560,"y":265},{"x":567,"y":264},{"x":574,"y":262},{"x":581,"y":262},{"x":588,"y":262},{"x":591,"y":262},{"x":595,"y":262},{"x":598,"y":262}],"timezone":-480,"flashState":false,"language":"zh-CN","platform":"Win32","cpuClass":undefined,"hasSessStorage":true,"hasLocalStorage":true,"hasIndexedDB":true,"hasDataBase":true,"doNotTrack":false,"touchSupport":false,"mediaStreamTrack":true}'))

function verify_encrypt(verify_msg, dimensions) {
    var ea = "iSGlZQho4OSS/KGB9EdMa4gs7/aOolEsmfreUUGCzkYnLgC1AIjYbIE3CK3ICeMvDgY8mdt4SZaP9R3sESMrKTUJI77Mw+Myw7MabSpqYmTwvU4v53bDBOiB8/V0GSZaARtsr5b5SdF7+AsEcVKKQ6/BPidZ/wyPxqDO1KovoAe7zM9T6Ib2TGojr9EfzVYQ",
        ra = C.MD5("appid=100008493&business_site=crm_crm_online&version=2.5.31&verify_msg=" + verify_msg + "&dimensions=" + dimensions + "&extend_param=" + ea);
    return ra.toString()
}
