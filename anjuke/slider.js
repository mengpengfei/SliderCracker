var CryptoJS = CryptoJS || function (e, t) {
    var i = {}
        , a = i.lib = {}
        , r = function () {
    }
        , n = a.Base = {
        extend: function (e) {
            r.prototype = this;
            var t = new r;
            return e && t.mixIn(e),
            t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments)
                }
            ),
                t.init.prototype = t,
                t.$super = this,
                t
        },
        create: function () {
            var e = this.extend();
            return e.init.apply(e, arguments),
                e
        },
        init: function () {
        },
        mixIn: function (e) {
            for (var t in e)
                e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString)
        },
        clone: function () {
            return this.init.prototype.extend(this)
        }
    }
        , s = a.WordArray = n.extend({
        init: function (e, t) {
            e = this.words = e || [],
                this.sigBytes = void 0 != t ? t : 4 * e.length
        },
        toString: function (e) {
            return (e || o).stringify(this)
        },
        concat: function (e) {
            var t = this.words
                , i = e.words
                , a = this.sigBytes;
            if (e = e.sigBytes,
                this.clamp(),
            a % 4)
                for (var r = 0; r < e; r++)
                    t[a + r >>> 2] |= (i[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 24 - (a + r) % 4 * 8;
            else if (i.length > 65535)
                for (r = 0; r < e; r += 4)
                    t[a + r >>> 2] = i[r >>> 2];
            else
                t.push.apply(t, i);
            return this.sigBytes += e,
                this
        },
        clamp: function () {
            var t = this.words
                , i = this.sigBytes;
            t[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                t.length = e.ceil(i / 4)
        },
        clone: function () {
            var e = n.clone.call(this);
            return e.words = this.words.slice(0),
                e
        },
        random: function (t) {
            for (var i = [], a = 0; a < t; a += 4)
                i.push(4294967296 * e.random() | 0);
            return new s.init(i, t)
        }
    })
        , c = i.enc = {}
        , o = c.Hex = {
        stringify: function (e) {
            var t = e.words;
            e = e.sigBytes;
            for (var i = [], a = 0; a < e; a++) {
                var r = t[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                i.push((r >>> 4).toString(16)),
                    i.push((15 & r).toString(16))
            }
            return i.join("")
        },
        parse: function (e) {
            for (var t = e.length, i = [], a = 0; a < t; a += 2)
                i[a >>> 3] |= parseInt(e.substr(a, 2), 16) << 24 - a % 8 * 4;
            return new s.init(i, t / 2)
        }
    }
        , l = c.Latin1 = {
        stringify: function (e) {
            var t = e.words;
            e = e.sigBytes;
            for (var i = [], a = 0; a < e; a++)
                i.push(String.fromCharCode(t[a >>> 2] >>> 24 - a % 4 * 8 & 255));
            return i.join("")
        },
        parse: function (e) {
            for (var t = e.length, i = [], a = 0; a < t; a++)
                i[a >>> 2] |= (255 & e.charCodeAt(a)) << 24 - a % 4 * 8;
            return new s.init(i, t)
        }
    }
        , d = c.Utf8 = {
        stringify: function (e) {
            try {
                return decodeURIComponent(escape(l.stringify(e)))
            } catch (e) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function (e) {
            return l.parse(unescape(encodeURIComponent(e)))
        }
    }
        , p = a.BufferedBlockAlgorithm = n.extend({
        reset: function () {
            this._data = new s.init,
                this._nDataBytes = 0
        },
        _append: function (e) {
            "string" == typeof e && (e = d.parse(e)),
                this._data.concat(e),
                this._nDataBytes += e.sigBytes
        },
        _process: function (t) {
            var i = this._data
                , a = i.words
                , r = i.sigBytes
                , n = this.blockSize
                , c = r / (4 * n)
                , c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0);
            if (t = c * n,
                r = e.min(4 * t, r),
                t) {
                for (var o = 0; o < t; o += n)
                    this._doProcessBlock(a, o);
                o = a.splice(0, t),
                    i.sigBytes -= r
            }
            return new s.init(o, r)
        },
        clone: function () {
            var e = n.clone.call(this);
            return e._data = this._data.clone(),
                e
        },
        _minBufferSize: 0
    });
    a.Hasher = p.extend({
        cfg: n.extend(),
        init: function (e) {
            this.cfg = this.cfg.extend(e),
                this.reset()
        },
        reset: function () {
            p.reset.call(this),
                this._doReset()
        },
        update: function (e) {
            return this._append(e),
                this._process(),
                this
        },
        finalize: function (e) {
            return e && this._append(e),
                this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function (e) {
            return function (t, i) {
                return new e.init(i).finalize(t)
            }
        },
        _createHmacHelper: function (e) {
            return function (t, i) {
                return new h.HMAC.init(e, i).finalize(t)
            }
        }
    });
    var h = i.algo = {};
    return i
}(Math);
!function () {
    var t = CryptoJS
        , i = t.lib.WordArray;
    t.enc.Base64 = {
        stringify: function (e) {
            var t = e.words
                , i = e.sigBytes
                , a = this._map;
            e.clamp(),
                e = [];
            for (var r = 0; r < i; r += 3)
                for (var n = (t[r >>> 2] >>> 24 - r % 4 * 8 & 255) << 16 | (t[r + 1 >>> 2] >>> 24 - (r + 1) % 4 * 8 & 255) << 8 | t[r + 2 >>> 2] >>> 24 - (r + 2) % 4 * 8 & 255, s = 0; s < 4 && r + .75 * s < i; s++)
                    e.push(a.charAt(n >>> 6 * (3 - s) & 63));
            if (t = a.charAt(64))
                for (; e.length % 4;)
                    e.push(t);
            return e.join("")
        },
        parse: function (e) {
            var t = e.length
                , a = this._map
                , r = a.charAt(64);
            r && -1 != (r = e.indexOf(r)) && (t = r);
            for (var r = [], n = 0, s = 0; s < t; s++)
                if (s % 4) {
                    var c = a.indexOf(e.charAt(s - 1)) << s % 4 * 2
                        , o = a.indexOf(e.charAt(s)) >>> 6 - s % 4 * 2;
                    r[n >>> 2] |= (c | o) << 24 - n % 4 * 8,
                        n++
                }
            return i.create(r, n)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(),
    function (t) {
        function i(e, t, i, a, r, n, s) {
            return ((e = e + (t & i | ~t & a) + r + s) << n | e >>> 32 - n) + t
        }

        function a(e, t, i, a, r, n, s) {
            return ((e = e + (t & a | i & ~a) + r + s) << n | e >>> 32 - n) + t
        }

        function r(e, t, i, a, r, n, s) {
            return ((e = e + (t ^ i ^ a) + r + s) << n | e >>> 32 - n) + t
        }

        function n(e, t, i, a, r, n, s) {
            return ((e = e + (i ^ (t | ~a)) + r + s) << n | e >>> 32 - n) + t
        }

        for (var s = CryptoJS, c = s.lib, o = c.WordArray, l = c.Hasher, c = s.algo, d = [], p = 0; p < 64; p++)
            d[p] = 4294967296 * t.abs(t.sin(p + 1)) | 0;
        c = c.MD5 = l.extend({
            _doReset: function () {
                this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function (e, t) {
                for (var s = 0; s < 16; s++) {
                    var c = t + s
                        , o = e[c];
                    e[c] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                }
                var s = this._hash.words
                    , c = e[t + 0]
                    , o = e[t + 1]
                    , l = e[t + 2]
                    , p = e[t + 3]
                    , h = e[t + 4]
                    , f = e[t + 5]
                    , v = e[t + 6]
                    , u = e[t + 7]
                    , g = e[t + 8]
                    , m = e[t + 9]
                    , w = e[t + 10]
                    , _ = e[t + 11]
                    , y = e[t + 12]
                    , x = e[t + 13]
                    , C = e[t + 14]
                    , k = e[t + 15]
                    , D = s[0]
                    , b = s[1]
                    , S = s[2]
                    , T = s[3]
                    , D = i(D, b, S, T, c, 7, d[0])
                    , T = i(T, D, b, S, o, 12, d[1])
                    , S = i(S, T, D, b, l, 17, d[2])
                    , b = i(b, S, T, D, p, 22, d[3])
                    , D = i(D, b, S, T, h, 7, d[4])
                    , T = i(T, D, b, S, f, 12, d[5])
                    , S = i(S, T, D, b, v, 17, d[6])
                    , b = i(b, S, T, D, u, 22, d[7])
                    , D = i(D, b, S, T, g, 7, d[8])
                    , T = i(T, D, b, S, m, 12, d[9])
                    , S = i(S, T, D, b, w, 17, d[10])
                    , b = i(b, S, T, D, _, 22, d[11])
                    , D = i(D, b, S, T, y, 7, d[12])
                    , T = i(T, D, b, S, x, 12, d[13])
                    , S = i(S, T, D, b, C, 17, d[14])
                    , b = i(b, S, T, D, k, 22, d[15])
                    , D = a(D, b, S, T, o, 5, d[16])
                    , T = a(T, D, b, S, v, 9, d[17])
                    , S = a(S, T, D, b, _, 14, d[18])
                    , b = a(b, S, T, D, c, 20, d[19])
                    , D = a(D, b, S, T, f, 5, d[20])
                    , T = a(T, D, b, S, w, 9, d[21])
                    , S = a(S, T, D, b, k, 14, d[22])
                    , b = a(b, S, T, D, h, 20, d[23])
                    , D = a(D, b, S, T, m, 5, d[24])
                    , T = a(T, D, b, S, C, 9, d[25])
                    , S = a(S, T, D, b, p, 14, d[26])
                    , b = a(b, S, T, D, g, 20, d[27])
                    , D = a(D, b, S, T, x, 5, d[28])
                    , T = a(T, D, b, S, l, 9, d[29])
                    , S = a(S, T, D, b, u, 14, d[30])
                    , b = a(b, S, T, D, y, 20, d[31])
                    , D = r(D, b, S, T, f, 4, d[32])
                    , T = r(T, D, b, S, g, 11, d[33])
                    , S = r(S, T, D, b, _, 16, d[34])
                    , b = r(b, S, T, D, C, 23, d[35])
                    , D = r(D, b, S, T, o, 4, d[36])
                    , T = r(T, D, b, S, h, 11, d[37])
                    , S = r(S, T, D, b, u, 16, d[38])
                    , b = r(b, S, T, D, w, 23, d[39])
                    , D = r(D, b, S, T, x, 4, d[40])
                    , T = r(T, D, b, S, c, 11, d[41])
                    , S = r(S, T, D, b, p, 16, d[42])
                    , b = r(b, S, T, D, v, 23, d[43])
                    , D = r(D, b, S, T, m, 4, d[44])
                    , T = r(T, D, b, S, y, 11, d[45])
                    , S = r(S, T, D, b, k, 16, d[46])
                    , b = r(b, S, T, D, l, 23, d[47])
                    , D = n(D, b, S, T, c, 6, d[48])
                    , T = n(T, D, b, S, u, 10, d[49])
                    , S = n(S, T, D, b, C, 15, d[50])
                    , b = n(b, S, T, D, f, 21, d[51])
                    , D = n(D, b, S, T, y, 6, d[52])
                    , T = n(T, D, b, S, p, 10, d[53])
                    , S = n(S, T, D, b, w, 15, d[54])
                    , b = n(b, S, T, D, o, 21, d[55])
                    , D = n(D, b, S, T, g, 6, d[56])
                    , T = n(T, D, b, S, k, 10, d[57])
                    , S = n(S, T, D, b, v, 15, d[58])
                    , b = n(b, S, T, D, x, 21, d[59])
                    , D = n(D, b, S, T, h, 6, d[60])
                    , T = n(T, D, b, S, _, 10, d[61])
                    , S = n(S, T, D, b, l, 15, d[62])
                    , b = n(b, S, T, D, m, 21, d[63]);
                s[0] = s[0] + D | 0,
                    s[1] = s[1] + b | 0,
                    s[2] = s[2] + S | 0,
                    s[3] = s[3] + T | 0
            },
            _doFinalize: function () {
                var e = this._data
                    , i = e.words
                    , a = 8 * this._nDataBytes
                    , r = 8 * e.sigBytes;
                i[r >>> 5] |= 128 << 24 - r % 32;
                var n = t.floor(a / 4294967296);
                for (i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                         i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                         e.sigBytes = 4 * (i.length + 1),
                         this._process(),
                         e = this._hash,
                         i = e.words,
                         a = 0; a < 4; a++)
                    r = i[a],
                        i[a] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
                return e
            },
            clone: function () {
                var e = l.clone.call(this);
                return e._hash = this._hash.clone(),
                    e
            }
        }),
            s.MD5 = l._createHelper(c),
            s.HmacMD5 = l._createHmacHelper(c)
    }(Math),
    function () {
        var t = CryptoJS
            , i = t.lib
            , a = i.Base
            , r = i.WordArray
            , i = t.algo
            , n = i.EvpKDF = a.extend({
            cfg: a.extend({
                keySize: 4,
                hasher: i.MD5,
                iterations: 1
            }),
            init: function (e) {
                this.cfg = this.cfg.extend(e)
            },
            compute: function (e, t) {
                for (var i = this.cfg, a = i.hasher.create(), n = r.create(), s = n.words, c = i.keySize, i = i.iterations; s.length < c;) {
                    o && a.update(o);
                    var o = a.update(e).finalize(t);
                    a.reset();
                    for (var l = 1; l < i; l++)
                        o = a.finalize(o),
                            a.reset();
                    n.concat(o)
                }
                return n.sigBytes = 4 * c,
                    n
            }
        });
        t.EvpKDF = function (e, t, i) {
            return n.create(i).compute(e, t)
        }
    }();
CryptoJS.lib.Cipher || function (t) {
    var i = CryptoJS
        , a = i.lib
        , r = a.Base
        , n = a.WordArray
        , s = a.BufferedBlockAlgorithm
        , c = i.enc.Base64
        , o = i.algo.EvpKDF
        , l = a.Cipher = s.extend({
        cfg: r.extend(),
        createEncryptor: function (e, t) {
            return this.create(this._ENC_XFORM_MODE, e, t)
        },
        createDecryptor: function (e, t) {
            return this.create(this._DEC_XFORM_MODE, e, t)
        },
        init: function (e, t, i) {
            this.cfg = this.cfg.extend(i),
                this._xformMode = e,
                this._key = t,
                this.reset()
        },
        reset: function () {
            s.reset.call(this),
                this._doReset()
        },
        process: function (e) {
            return this._append(e),
                this._process()
        },
        finalize: function (e) {
            return e && this._append(e),
                this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function (e) {
            return {
                encrypt: function (t, i, a) {
                    return ("string" == typeof i ? u : v).encrypt(e, t, i, a)
                },
                decrypt: function (t, i, a) {
                    return ("string" == typeof i ? u : v).decrypt(e, t, i, a)
                }
            }
        }
    });
    a.StreamCipher = l.extend({
        _doFinalize: function () {
            return this._process(!0)
        },
        blockSize: 1
    });
    var d = i.mode = {}
        , p = function (e, t, i) {
        var a = this._iv;
        a ? this._iv = void 0 : a = this._prevBlock;
        for (var r = 0; r < i; r++)
            e[t + r] ^= a[r]
    }
        , h = (a.BlockCipherMode = r.extend({
        createEncryptor: function (e, t) {
            return this.Encryptor.create(e, t)
        },
        createDecryptor: function (e, t) {
            return this.Decryptor.create(e, t)
        },
        init: function (e, t) {
            this._cipher = e,
                this._iv = t
        }
    })).extend();
    h.Encryptor = h.extend({
        processBlock: function (e, t) {
            var i = this._cipher
                , a = i.blockSize;
            p.call(this, e, t, a),
                i.encryptBlock(e, t),
                this._prevBlock = e.slice(t, t + a)
        }
    }),
        h.Decryptor = h.extend({
            processBlock: function (e, t) {
                var i = this._cipher
                    , a = i.blockSize
                    , r = e.slice(t, t + a);
                i.decryptBlock(e, t),
                    p.call(this, e, t, a),
                    this._prevBlock = r
            }
        }),
        d = d.CBC = h,
        h = (i.pad = {}).Pkcs7 = {
            pad: function (e, t) {
                for (var i = 4 * t, i = i - e.sigBytes % i, a = i << 24 | i << 16 | i << 8 | i, r = [], s = 0; s < i; s += 4)
                    r.push(a);
                i = n.create(r, i),
                    e.concat(i)
            },
            unpad: function (e) {
                e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
            }
        },
        a.BlockCipher = l.extend({
            cfg: l.cfg.extend({
                mode: d,
                padding: h
            }),
            reset: function () {
                l.reset.call(this);
                var e = this.cfg
                    , t = e.iv
                    , e = e.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                    var i = e.createEncryptor;
                else
                    i = e.createDecryptor,
                        this._minBufferSize = 1;
                this._mode = i.call(e, this, t && t.words)
            },
            _doProcessBlock: function (e, t) {
                this._mode.processBlock(e, t)
            },
            _doFinalize: function () {
                var e = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    e.pad(this._data, this.blockSize);
                    var t = this._process(!0)
                } else
                    t = this._process(!0),
                        e.unpad(t);
                return t
            },
            blockSize: 4
        });
    var f = a.CipherParams = r.extend({
        init: function (e) {
            this.mixIn(e)
        },
        toString: function (e) {
            return (e || this.formatter).stringify(this)
        }
    })
        , d = (i.format = {}).OpenSSL = {
        stringify: function (e) {
            var t = e.ciphertext;
            return e = e.salt,
                (e ? n.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(c)
        },
        parse: function (e) {
            e = c.parse(e);
            var t = e.words;
            if (1398893684 == t[0] && 1701076831 == t[1]) {
                var i = n.create(t.slice(2, 4));
                t.splice(0, 4),
                    e.sigBytes -= 16
            }
            return f.create({
                ciphertext: e,
                salt: i
            })
        }
    }
        , v = a.SerializableCipher = r.extend({
        cfg: r.extend({
            format: d
        }),
        encrypt: function (e, t, i, a) {
            a = this.cfg.extend(a);
            var r = e.createEncryptor(i, a);
            return t = r.finalize(t),
                r = r.cfg,
                f.create({
                    ciphertext: t,
                    key: i,
                    iv: r.iv,
                    algorithm: e,
                    mode: r.mode,
                    padding: r.padding,
                    blockSize: e.blockSize,
                    formatter: a.format
                })
        },
        decrypt: function (e, t, i, a) {
            return a = this.cfg.extend(a),
                t = this._parse(t, a.format),
                e.createDecryptor(i, a).finalize(t.ciphertext)
        },
        _parse: function (e, t) {
            return "string" == typeof e ? t.parse(e, this) : e
        }
    })
        , i = (i.kdf = {}).OpenSSL = {
        execute: function (e, t, i, a) {
            return a || (a = n.random(8)),
                e = o.create({
                    keySize: t + i
                }).compute(e, a),
                i = n.create(e.words.slice(t), 4 * i),
                e.sigBytes = 4 * t,
                f.create({
                    key: e,
                    iv: i,
                    salt: a
                })
        }
    }
        , u = a.PasswordBasedCipher = v.extend({
        cfg: v.cfg.extend({
            kdf: i
        }),
        encrypt: function (e, t, i, a) {
            return a = this.cfg.extend(a),
                i = a.kdf.execute(i, e.keySize, e.ivSize),
                a.iv = i.iv,
                e = v.encrypt.call(this, e, t, i.key, a),
                e.mixIn(i),
                e
        },
        decrypt: function (e, t, i, a) {
            return a = this.cfg.extend(a),
                t = this._parse(t, a.format),
                i = a.kdf.execute(i, e.keySize, e.ivSize, t.salt),
                a.iv = i.iv,
                v.decrypt.call(this, e, t, i.key, a)
        }
    })
}(),
    function () {
        for (var t = CryptoJS, i = t.lib.BlockCipher, a = t.algo, r = [], n = [], s = [], c = [], o = [], l = [], d = [], p = [], h = [], f = [], v = [], u = 0; u < 256; u++)
            v[u] = u < 128 ? u << 1 : u << 1 ^ 283;
        for (var g = 0, m = 0, u = 0; u < 256; u++) {
            var w = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4
                , w = w >>> 8 ^ 255 & w ^ 99;
            r[g] = w,
                n[w] = g;
            var _ = v[g]
                , y = v[_]
                , x = v[y]
                , C = 257 * v[w] ^ 16843008 * w;
            s[g] = C << 24 | C >>> 8,
                c[g] = C << 16 | C >>> 16,
                o[g] = C << 8 | C >>> 24,
                l[g] = C,
                C = 16843009 * x ^ 65537 * y ^ 257 * _ ^ 16843008 * g,
                d[w] = C << 24 | C >>> 8,
                p[w] = C << 16 | C >>> 16,
                h[w] = C << 8 | C >>> 24,
                f[w] = C,
                g ? (g = _ ^ v[v[v[x ^ _]]],
                    m ^= v[v[m]]) : g = m = 1
        }
        var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
            , a = a.AES = i.extend({
            _doReset: function () {
                for (var e = this._key, t = e.words, i = e.sigBytes / 4, e = 4 * ((this._nRounds = i + 6) + 1), a = this._keySchedule = [], n = 0; n < e; n++)
                    if (n < i)
                        a[n] = t[n];
                    else {
                        var s = a[n - 1];
                        n % i ? i > 6 && n % i == 4 && (s = r[s >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s]) : (s = s << 8 | s >>> 24,
                            s = r[s >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s],
                            s ^= k[n / i | 0] << 24),
                            a[n] = a[n - i] ^ s
                    }
                for (t = this._invKeySchedule = [],
                         i = 0; i < e; i++)
                    n = e - i,
                        s = i % 4 ? a[n] : a[n - 4],
                        t[i] = i < 4 || n <= 4 ? s : d[r[s >>> 24]] ^ p[r[s >>> 16 & 255]] ^ h[r[s >>> 8 & 255]] ^ f[r[255 & s]]
            },
            encryptBlock: function (e, t) {
                this._doCryptBlock(e, t, this._keySchedule, s, c, o, l, r)
            },
            decryptBlock: function (e, t) {
                var i = e[t + 1];
                e[t + 1] = e[t + 3],
                    e[t + 3] = i,
                    this._doCryptBlock(e, t, this._invKeySchedule, d, p, h, f, n),
                    i = e[t + 1],
                    e[t + 1] = e[t + 3],
                    e[t + 3] = i
            },
            _doCryptBlock: function (e, t, i, a, r, n, s, c) {
                for (var o = this._nRounds, l = e[t] ^ i[0], d = e[t + 1] ^ i[1], p = e[t + 2] ^ i[2], h = e[t + 3] ^ i[3], f = 4, v = 1; v < o; v++)
                     var u = a[l >>> 24] ^ r[d >>> 16 & 255] ^ n[p >>> 8 & 255] ^ s[255 & h] ^ i[f++]
                         , g = a[d >>> 24] ^ r[p >>> 16 & 255] ^ n[h >>> 8 & 255] ^ s[255 & l] ^ i[f++]
                         , m = a[p >>> 24] ^ r[h >>> 16 & 255] ^ n[l >>> 8 & 255] ^ s[255 & d] ^ i[f++]
                         , h = a[h >>> 24] ^ r[l >>> 16 & 255] ^ n[d >>> 8 & 255] ^ s[255 & p] ^ i[f++]
                         , l = u
                         , d = g
                         , p = m;
                u = (c[l >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[p >>> 8 & 255] << 8 | c[255 & h]) ^ i[f++],
                    g = (c[d >>> 24] << 24 | c[p >>> 16 & 255] << 16 | c[h >>> 8 & 255] << 8 | c[255 & l]) ^ i[f++],
                    m = (c[p >>> 24] << 24 | c[h >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & d]) ^ i[f++],
                    h = (c[h >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & p]) ^ i[f++],
                    e[t] = u,
                    e[t + 1] = g,
                    e[t + 2] = m,
                    e[t + 3] = h
            },
            keySize: 8
        });
        t.AES = i._createHelper(a)
    }();

AESEncryption = function (e, responseId) {
    var t = CryptoJS.enc.Utf8.parse(responseId.substr(0, 16));
    return CryptoJS.AES.encrypt(e, t, {
        iv: t,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).ciphertext.toString().toUpperCase()
};

function encrypt_data(track, distance, fptoken, responseId) {
    // for (var r = track.slice(0, 260), n = "", l = 0; l < r.length; l++)
    //     n += r[l].p + "," + r[l].t + "|";
    return AESEncryption('{"x":"' + (distance || 0) + '","track":"' + track + '","p":"' + [0, 0] + '","finger":"' + fptoken + '"}', responseId);
}

console.log(encrypt_data(
    '29,16,1|30,16,93|32,17,114|35,18,130|39,18,148|45,19,165|52,20,180|59,20,196|63,20,213|66,20,231|68,20,247|71,20,264|76,20,280|79,20,296|82,20,314|86,20,329|90,21,346|95,21,364|98,21,379|101,21,396|103,21,413|105,21,430|108,21,446|111,21,463|115,21,480|117,21,497|119,21,514|122,21,531|125,21,546|128,21,564|132,21,580|133,22,596|134,22,616|135,22,630|136,22,647|137,22,663|140,22,679|142,22,696|144,22,713|146,22,729|147,22,746|149,22,763|151,22,779|152,22,796|153,22,828|154,22,850|155,22,863|156,23,879|158,23,896|161,23,913|163,23,929|164,23,947|165,23,964|166,23,980|167,23,1013|168,23,1049|168,24,1067|169,24,1082|170,24,1216|171,24,1371|172,24,1442|173,24,1500|173,25,1513|174,25,1624|175,25,1754|176,25,1796|177,25,2821|177,25,3329|',
    76,
    "tUGrNESxtIBvCy3gqA4uX1IPaRsVRGeOY2E9NFsWZMYWxDHQtHKCll5ANR7RUCKiin35brBb//eSODvMgkQULA==",
    "93b77d6fe53b4196aec830b898bfaae6")
);
