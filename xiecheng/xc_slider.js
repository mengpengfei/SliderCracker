var C = function (a, b) {
    var c = {}
        , d = c.lib = {}
        , e = d.Base = function () {
        function a() {
        }

        return {
            extend: function (b) {
                a.prototype = this;
                var c = new a;
                b && c.mixIn(b);
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () {
            },
            mixIn: function (a) {
                for (var b in a)
                    a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.$super.extend(this)
            }
        }
    }()
        , g = d.WordArray = e.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != b ? c : 4 * a.length
        },
        toString: function (a) {
            return (a || q).stringify(this)
        },
        concat: function (a) {
            var b = this.words
                , c = a.words
                , h = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (h % 4)
                for (var p = 0; p < a; p++)
                    b[h + p >>> 2] |= (c[p >>> 2] >>> 24 - p % 4 * 8 & 255) << 24 - (h + p) % 4 * 8;
            else if (65535 < c.length)
                for (p = 0; p < a; p += 4)
                    b[h + p >>> 2] = c[p >>> 2];
            else
                b.push.apply(b, c);
            this.sigBytes += a;
            return this
        },
        clamp: function () {
            var b = this.words
                , c = this.sigBytes;
            b[c >>> 2] &= 4294967295 << 32 - c % 4 * 8;
            b.length = a.ceil(c / 4)
        },
        clone: function () {
            var a = e.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function (b) {
            for (var c = [], d = 0; d < b; d += 4)
                c.push(4294967296 * a.random() | 0);
            return g.create(c, b)
        }
    })
        , f = c.enc = {}
        , q = f.Hex = {
        stringify: function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], h = 0; h < a; h++) {
                var p = b[h >>> 2] >>> 24 - h % 4 * 8 & 255;
                c.push((p >>> 4).toString(16));
                c.push((p & 15).toString(16))
            }
            return c.join("")
        },
        parse: function (a) {
            for (var b = a.length, c = [], h = 0; h < b; h += 2)
                c[h >>> 3] |= parseInt(a.substr(h, 2), 16) << 24 - h % 8 * 4;
            return g.create(c, b / 2)
        }
    }
        , v = f.Latin1 = {
        stringify: function (a) {
            var b = a.words;
            a = a.sigBytes;
            for (var c = [], h = 0; h < a; h++)
                c.push(String.fromCharCode(b[h >>> 2] >>> 24 - h % 4 * 8 & 255));
            return c.join("")
        },
        parse: function (a) {
            for (var b = a.length, c = [], h = 0; h < b; h++)
                c[h >>> 2] |= (a.charCodeAt(h) & 255) << 24 - h % 4 * 8;
            return g.create(c, b)
        }
    }
        , u = f.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(v.stringify(a)))
            } catch (td) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function (a) {
            return v.parse(unescape(encodeURIComponent(a)))
        }
    }
        , ja = d.BufferedBlockAlgorithm = e.extend({
        reset: function () {
            this._data = g.create();
            this._nDataBytes = 0
        },
        _append: function (a) {
            "string" == typeof a && (a = u.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes
        },
        _process: function (b) {
            var c = this._data
                , d = c.words
                , h = c.sigBytes
                , p = this.blockSize
                , e = h / (4 * p);
            e = b ? a.ceil(e) : a.max((e | 0) - this._minBufferSize, 0);
            b = e * p;
            h = a.min(4 * b, h);
            if (b) {
                for (var va = 0; va < b; va += p)
                    this._doProcessBlock(d, va);
                va = d.splice(0, b);
                c.sigBytes -= h
            }
            return g.create(va, h)
        },
        clone: function () {
            var a = e.clone.call(this);
            a._data = this._data.clone();
            return a
        },
        _minBufferSize: 0
    });
    d.Hasher = ja.extend({
        init: function () {
            this.reset()
        },
        reset: function () {
            ja.reset.call(this);
            this._doReset()
        },
        update: function (a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function (a) {
            a && this._append(a);
            this._doFinalize();
            return this._hash
        },
        clone: function () {
            var a = ja.clone.call(this);
            a._hash = this._hash.clone();
            return a
        },
        blockSize: 16,
        _createHelper: function (a) {
            return function (b, c) {
                return a.create(c).finalize(b)
            }
        },
        _createHmacHelper: function (a) {
            return function (b, c) {
                return ua.HMAC.create(a, c).finalize(b)
            }
        }
    });
    var ua = c.algo = {};
    return c
}(Math);
(function () {
        var a = C
            , b = a.lib.WordArray;
        a.enc.Base64 = {
            stringify: function (a) {
                var b = a.words
                    , c = a.sigBytes
                    , g = this._map;
                a.clamp();
                a = [];
                for (var f = 0; f < c; f += 3)
                    for (var q = (b[f >>> 2] >>> 24 - f % 4 * 8 & 255) << 16 | (b[f + 1 >>> 2] >>> 24 - (f + 1) % 4 * 8 & 255) << 8 | b[f + 2 >>> 2] >>> 24 - (f + 2) % 4 * 8 & 255, v = 0; 4 > v && f + .75 * v < c; v++)
                        a.push(g.charAt(q >>> 6 * (3 - v) & 63));
                if (b = g.charAt(64))
                    for (; a.length % 4;)
                        a.push(b);
                return a.join("")
            },
            parse: function (a) {
                a = a.replace(/\s/g, "");
                var c = a.length
                    , e = this._map
                    , g = e.charAt(64);
                g && (g = a.indexOf(g),
                -1 != g && (c = g));
                g = [];
                for (var f = 0, q = 0; q < c; q++)
                    if (q % 4) {
                        var v = e.indexOf(a.charAt(q - 1)) << q % 4 * 2
                            , u = e.indexOf(a.charAt(q)) >>> 6 - q % 4 * 2;
                        g[f >>> 2] |= (v | u) << 24 - f % 4 * 8;
                        f++
                    }
                return b.create(g, f)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }
)();
(function (a) {
        function b(a, b, c, d, e, h, p) {
            a = a + (b & c | ~b & d) + e + p;
            return (a << h | a >>> 32 - h) + b
        }

        function c(a, b, c, d, e, h, p) {
            a = a + (b & d | c & ~d) + e + p;
            return (a << h | a >>> 32 - h) + b
        }

        function d(a, b, c, d, e, h, p) {
            a = a + (b ^ c ^ d) + e + p;
            return (a << h | a >>> 32 - h) + b
        }

        function e(a, b, c, d, e, h, p) {
            a = a + (c ^ (b | ~d)) + e + p;
            return (a << h | a >>> 32 - h) + b
        }

        var g = C
            , f = g.lib
            , q = f.WordArray;
        f = f.Hasher;
        var v = g.algo
            , u = [];
        (function () {
                for (var b = 0; 64 > b; b++)
                    u[b] = 4294967296 * a.abs(a.sin(b + 1)) | 0
            }
        )();
        v = v.MD5 = f.extend({
            _doReset: function () {
                this._hash = q.create([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function (a, g) {
                for (var f = 0; 16 > f; f++) {
                    var q = g + f
                        , y = a[q];
                    a[q] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360
                }
                q = this._hash.words;
                y = q[0];
                var h = q[1]
                    , p = q[2]
                    , H = q[3];
                for (f = 0; 64 > f; f += 4)
                    16 > f ? (y = b(y, h, p, H, a[g + f], 7, u[f]),
                        H = b(H, y, h, p, a[g + f + 1], 12, u[f + 1]),
                        p = b(p, H, y, h, a[g + f + 2], 17, u[f + 2]),
                        h = b(h, p, H, y, a[g + f + 3], 22, u[f + 3])) : 32 > f ? (y = c(y, h, p, H, a[g + (f + 1) % 16], 5, u[f]),
                        H = c(H, y, h, p, a[g + (f + 6) % 16], 9, u[f + 1]),
                        p = c(p, H, y, h, a[g + (f + 11) % 16], 14, u[f + 2]),
                        h = c(h, p, H, y, a[g + f % 16], 20, u[f + 3])) : 48 > f ? (y = d(y, h, p, H, a[g + (3 * f + 5) % 16], 4, u[f]),
                        H = d(H, y, h, p, a[g + (3 * f + 8) % 16], 11, u[f + 1]),
                        p = d(p, H, y, h, a[g + (3 * f + 11) % 16], 16, u[f + 2]),
                        h = d(h, p, H, y, a[g + (3 * f + 14) % 16], 23, u[f + 3])) : (y = e(y, h, p, H, a[g + 3 * f % 16], 6, u[f]),
                        H = e(H, y, h, p, a[g + (3 * f + 7) % 16], 10, u[f + 1]),
                        p = e(p, H, y, h, a[g + (3 * f + 14) % 16], 15, u[f + 2]),
                        h = e(h, p, H, y, a[g + (3 * f + 5) % 16], 21, u[f + 3]));
                q[0] = q[0] + y | 0;
                q[1] = q[1] + h | 0;
                q[2] = q[2] + p | 0;
                q[3] = q[3] + H | 0
            },
            _doFinalize: function () {
                var a = this._data
                    , b = a.words
                    , c = 8 * this._nDataBytes
                    , d = 8 * a.sigBytes;
                b[d >>> 5] |= 128 << 24 - d % 32;
                b[(d + 64 >>> 9 << 4) + 14] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
                a.sigBytes = 4 * (b.length + 1);
                this._process();
                a = this._hash.words;
                for (b = 0; 4 > b; b++)
                    c = a[b],
                        a[b] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360
            }
        });
        g.MD5 = f._createHelper(v);
        g.HmacMD5 = f._createHmacHelper(v)
    }
)(Math);
(function () {
        var a = C
            , b = a.lib
            , c = b.Base
            , d = b.WordArray;
        b = a.algo;
        var e = b.EvpKDF = c.extend({
            cfg: c.extend({
                keySize: 4,
                hasher: b.MD5,
                iterations: 1
            }),
            init: function (a) {
                this.cfg = this.cfg.extend(a)
            },
            compute: function (a, b) {
                var c = this.cfg
                    , f = c.hasher.create()
                    , e = d.create()
                    , g = e.words
                    , k = c.keySize;
                for (c = c.iterations; g.length < k;) {
                    l && f.update(l);
                    var l = f.update(a).finalize(b);
                    f.reset();
                    for (var n = 1; n < c; n++)
                        l = f.finalize(l),
                            f.reset();
                    e.concat(l)
                }
                e.sigBytes = 4 * k;
                return e
            }
        });
        a.EvpKDF = function (a, b, c) {
            return e.create(c).compute(a, b)
        }
    }
)();
C.lib.Cipher || function (a) {
    var b = C
        , c = b.lib
        , d = c.Base
        , e = c.WordArray
        , g = c.BufferedBlockAlgorithm
        , f = b.enc.Base64
        , q = b.algo.EvpKDF
        , k = c.Cipher = g.extend({
        cfg: d.extend(),
        createEncryptor: function (a, b) {
            return this.create(this._ENC_XFORM_MODE, a, b)
        },
        createDecryptor: function (a, b) {
            return this.create(this._DEC_XFORM_MODE, a, b)
        },
        init: function (a, b, c) {
            this.cfg = this.cfg.extend(c);
            this._xformMode = a;
            this._key = b;
            this.reset()
        },
        reset: function () {
            g.reset.call(this);
            this._doReset()
        },
        process: function (a) {
            this._append(a);
            return this._process()
        },
        finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function () {
            return function (a) {
                return {
                    encrypt: function (b, c, h) {
                        return ("string" == typeof c ? y : m).encrypt(a, b, c, h)
                    },
                    decrypt: function (b, c, h) {
                        return ("string" == typeof c ? y : m).decrypt(a, b, c, h)
                    }
                }
            }
        }()
    });
    c.StreamCipher = k.extend({
        _doFinalize: function () {
            return this._process(!0)
        },
        blockSize: 1
    });
    var u = b.mode = {}
        , l = c.BlockCipherMode = d.extend({
        createEncryptor: function (a, b) {
            return this.Encryptor.create(a, b)
        },
        createDecryptor: function (a, b) {
            return this.Decryptor.create(a, b)
        },
        init: function (a, b) {
            this._cipher = a;
            this._iv = b
        }
    });
    u = u.CBC = function () {
        function b(b, c, h) {
            var d = this._iv;
            d ? this._iv = a : d = this._prevBlock;
            for (var p = 0; p < h; p++)
                b[c + p] ^= d[p]
        }

        var c = l.extend();
        c.Encryptor = c.extend({
            processBlock: function (a, c) {
                var h = this._cipher
                    , d = h.blockSize;
                b.call(this, a, c, d);
                h.encryptBlock(a, c);
                this._prevBlock = a.slice(c, c + d)
            }
        });
        c.Decryptor = c.extend({
            processBlock: function (a, c) {
                var h = this._cipher
                    , d = h.blockSize
                    , p = a.slice(c, c + d);
                h.decryptBlock(a, c);
                b.call(this, a, c, d);
                this._prevBlock = p
            }
        });
        return c
    }();
    var n = (b.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            var c = 4 * b;
            c -= a.sigBytes % c;
            for (var h = c << 24 | c << 16 | c << 8 | c, d = [], p = 0; p < c; p += 4)
                d.push(h);
            c = e.create(d, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    c.BlockCipher = k.extend({
        cfg: k.cfg.extend({
            mode: u,
            padding: n
        }),
        reset: function () {
            k.reset.call(this);
            var a = this.cfg
                , b = a.iv;
            a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                    this._minBufferSize = 1;
            this._mode = c.call(a, this, b && b.words)
        },
        _doProcessBlock: function (a, b) {
            this._mode.processBlock(a, b)
        },
        _doFinalize: function () {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else
                b = this._process(!0),
                    a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var r = c.CipherParams = d.extend({
        init: function (a) {
            this.mixIn(a)
        },
        toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    });
    u = (b.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            b = (a ? e.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(f);
            return b.replace(/(.{64})/g, "$1\n")
        },
        parse: function (a) {
            a = f.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = e.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return r.create({
                ciphertext: a,
                salt: c
            })
        }
    };
    var m = c.SerializableCipher = d.extend({
        cfg: d.extend({
            format: u
        }),
        encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var h = a.createEncryptor(c, d);
            b = h.finalize(b);
            h = h.cfg;
            return r.create({
                ciphertext: b,
                key: c,
                iv: h.iv,
                algorithm: a,
                mode: h.mode,
                padding: h.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        _parse: function (a, b) {
            return "string" == typeof a ? b.parse(a) : a
        }
    });
    b = (b.kdf = {}).OpenSSL = {
        compute: function (a, b, c, d) {
            d || (d = e.random(8));
            a = q.create({
                keySize: b + c
            }).compute(a, d);
            c = e.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return r.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    };
    var y = c.PasswordBasedCipher = m.extend({
        cfg: m.cfg.extend({
            kdf: b
        }),
        encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            c = d.kdf.compute(c, a.keySize, a.ivSize);
            d.iv = c.iv;
            a = m.encrypt.call(this, a, b, c.key, d);
            a.mixIn(c);
            return a
        },
        decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            c = d.kdf.compute(c, a.keySize, a.ivSize, b.salt);
            d.iv = c.iv;
            return m.decrypt.call(this, a, b, c.key, d)
        }
    })
}();
(function () {
        var a = C
            , b = a.lib.BlockCipher
            , c = a.algo
            , d = []
            , e = []
            , g = []
            , f = []
            , q = []
            , k = []
            , u = []
            , l = []
            , n = []
            , r = [];
        (function () {
                for (var a = [], b = 0; 256 > b; b++)
                    a[b] = 128 > b ? b << 1 : b << 1 ^ 283;
                var c = 0
                    , v = 0;
                for (b = 0; 256 > b; b++) {
                    var m = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
                    m = m >>> 8 ^ m & 255 ^ 99;
                    d[c] = m;
                    e[m] = c;
                    var Rb = a[c]
                        , w = a[Rb]
                        , ja = a[w]
                        , t = 257 * a[m] ^ 16843008 * m;
                    g[c] = t << 24 | t >>> 8;
                    f[c] = t << 16 | t >>> 16;
                    q[c] = t << 8 | t >>> 24;
                    k[c] = t;
                    t = 16843009 * ja ^ 65537 * w ^ 257 * Rb ^ 16843008 * c;
                    u[m] = t << 24 | t >>> 8;
                    l[m] = t << 16 | t >>> 16;
                    n[m] = t << 8 | t >>> 24;
                    r[m] = t;
                    c ? (c = Rb ^ a[a[a[ja ^ Rb]]],
                        v ^= a[a[v]]) : c = v = 1
                }
            }
        )();
        var m = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        c = c.AES = b.extend({
            _doReset: function () {
                var a = this._key
                    , b = a.words
                    , c = a.sigBytes / 4;
                a = 4 * ((this._nRounds = c + 6) + 1);
                for (var f = this._keySchedule = [], e = 0; e < a; e++)
                    if (e < c)
                        f[e] = b[e];
                    else {
                        var g = f[e - 1];
                        e % c ? 6 < c && 4 == e % c && (g = d[g >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & 255] << 8 | d[g & 255]) : (g = g << 8 | g >>> 24,
                            g = d[g >>> 24] << 24 | d[g >>> 16 & 255] << 16 | d[g >>> 8 & 255] << 8 | d[g & 255],
                            g ^= m[e / c | 0] << 24);
                        f[e] = f[e - c] ^ g
                    }
                b = this._invKeySchedule = [];
                for (c = 0; c < a; c++)
                    e = a - c,
                        g = c % 4 ? f[e] : f[e - 4],
                        b[c] = 4 > c || 4 >= e ? g : u[d[g >>> 24]] ^ l[d[g >>> 16 & 255]] ^ n[d[g >>> 8 & 255]] ^ r[d[g & 255]]
            },
            encryptBlock: function (a, b) {
                this._doCryptBlock(a, b, this._keySchedule, g, f, q, k, d)
            },
            decryptBlock: function (a, b) {
                var c = a[b + 1];
                a[b + 1] = a[b + 3];
                a[b + 3] = c;
                this._doCryptBlock(a, b, this._invKeySchedule, u, l, n, r, e);
                c = a[b + 1];
                a[b + 1] = a[b + 3];
                a[b + 3] = c
            },
            _doCryptBlock: function (a, b, c, d, e, f, g, q) {
                for (var h = this._nRounds, k = a[b] ^ c[0], p = a[b + 1] ^ c[1], u = a[b + 2] ^ c[2], l = a[b + 3] ^ c[3], v = 4, m = 1; m < h; m++) {
                    var n = d[k >>> 24] ^ e[p >>> 16 & 255] ^ f[u >>> 8 & 255] ^ g[l & 255] ^ c[v++]
                        , r = d[p >>> 24] ^ e[u >>> 16 & 255] ^ f[l >>> 8 & 255] ^ g[k & 255] ^ c[v++]
                        , t = d[u >>> 24] ^ e[l >>> 16 & 255] ^ f[k >>> 8 & 255] ^ g[p & 255] ^ c[v++];
                    l = d[l >>> 24] ^ e[k >>> 16 & 255] ^ f[p >>> 8 & 255] ^ g[u & 255] ^ c[v++];
                    k = n;
                    p = r;
                    u = t
                }
                n = (q[k >>> 24] << 24 | q[p >>> 16 & 255] << 16 | q[u >>> 8 & 255] << 8 | q[l & 255]) ^ c[v++];
                r = (q[p >>> 24] << 24 | q[u >>> 16 & 255] << 16 | q[l >>> 8 & 255] << 8 | q[k & 255]) ^ c[v++];
                t = (q[u >>> 24] << 24 | q[l >>> 16 & 255] << 16 | q[k >>> 8 & 255] << 8 | q[p & 255]) ^ c[v++];
                l = (q[l >>> 24] << 24 | q[k >>> 16 & 255] << 16 | q[p >>> 8 & 255] << 8 | q[u & 255]) ^ c[v++];
                a[b] = n;
                a[b + 1] = r;
                a[b + 2] = t;
                a[b + 3] = l
            },
            keySize: 8
        });
        a.AES = b._createHelper(c)
    }
)();
(function () {
        var a = C
            , b = a.lib
            , c = b.WordArray;
        b = b.Hasher;
        var d = []
            , e = a.algo.SHA1 = b.extend({
            _doReset: function () {
                this._hash = c.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function (a, b) {
                for (var c = this._hash.words, e = c[0], f = c[1], g = c[2], k = c[3], l = c[4], m = 0; 80 > m; m++) {
                    if (16 > m)
                        d[m] = a[b + m] | 0;
                    else {
                        var n = d[m - 3] ^ d[m - 8] ^ d[m - 14] ^ d[m - 16];
                        d[m] = n << 1 | n >>> 31
                    }
                    n = (e << 5 | e >>> 27) + l + d[m];
                    n = 20 > m ? n + ((f & g | ~f & k) + 1518500249) : 40 > m ? n + ((f ^ g ^ k) + 1859775393) : 60 > m ? n + ((f & g | f & k | g & k) - 1894007588) : n + ((f ^ g ^ k) - 899497514);
                    l = k;
                    k = g;
                    g = f << 30 | f >>> 2;
                    f = e;
                    e = n
                }
                c[0] = c[0] + e | 0;
                c[1] = c[1] + f | 0;
                c[2] = c[2] + g | 0;
                c[3] = c[3] + k | 0;
                c[4] = c[4] + l | 0
            },
            _doFinalize: function () {
                var a = this._data
                    , b = a.words
                    , c = 8 * this._nDataBytes
                    , d = 8 * a.sigBytes;
                b[d >>> 5] |= 128 << 24 - d % 32;
                b[(d + 64 >>> 9 << 4) + 15] = c;
                a.sigBytes = 4 * b.length;
                this._process()
            }
        });
        a.SHA1 = b._createHelper(e);
        a.HmacSHA1 = b._createHmacHelper(e)
    }
)();
(function () {
        var a = C
            , b = a.enc.Utf8;
        a.algo.HMAC = a.lib.Base.extend({
            init: function (a, d) {
                a = this._hasher = a.create();
                "string" == typeof d && (d = b.parse(d));
                var c = a.blockSize
                    , g = 4 * c;
                d.sigBytes > g && (d = a.finalize(d));
                for (var f = this._oKey = d.clone(), k = this._iKey = d.clone(), l = f.words, m = k.words, n = 0; n < c; n++)
                    l[n] ^= 1549556828,
                        m[n] ^= 909522486;
                f.sigBytes = k.sigBytes = g;
                this.reset()
            },
            reset: function () {
                var a = this._hasher;
                a.reset();
                a.update(this._iKey)
            },
            update: function (a) {
                this._hasher.update(a);
                return this
            },
            finalize: function (a) {
                var b = this._hasher;
                a = b.finalize(a);
                b.reset();
                return b.finalize(this._oKey.clone().concat(a))
            }
        })
    }
)();
(function () {
        var a = C
            , b = a.lib
            , c = b.Base
            , d = b.WordArray;
        b = a.algo;
        var e = b.HMAC
            , g = b.PBKDF2 = c.extend({
            cfg: c.extend({
                keySize: 4,
                hasher: b.SHA1,
                iterations: 1
            }),
            init: function (a) {
                this.cfg = this.cfg.extend(a)
            },
            compute: function (a, b) {
                var c = this.cfg
                    , f = e.create(c.hasher, a)
                    , g = d.create()
                    , k = d.create([1])
                    , l = g.words
                    , m = k.words
                    , q = c.keySize;
                for (c = c.iterations; l.length < q;) {
                    var h = f.update(b).finalize(k);
                    f.reset();
                    for (var p = h.words, n = p.length, r = h, t = 1; t < c; t++) {
                        r = f.finalize(r);
                        f.reset();
                        for (var w = r.words, x = 0; x < n; x++)
                            p[x] ^= w[x]
                    }
                    g.concat(h);
                    m[0]++
                }
                g.sigBytes = 4 * q;
                return g
            }
        });
        a.PBKDF2 = function (a, b, c) {
            return g.create(c).compute(a, b)
        }
    }
)();

(Sb = function(e, t) {
        this.keySize = e / 32,
            this.iterationCount = t,
            this.key = {
                words: [250181692, 1287279318, -2018848139, 38282178, -1732303752],
                sigBytes: 16
            }
    }).prototype.encrypt = function(e, t) {
    return C.AES.encrypt(t, this.key, {
        iv: C.enc.Hex.parse(e)
    }).ciphertext.toString(C.enc.Base64)
};

Sb.prototype.decrypt = function(e, t) {
    var i = C.lib.CipherParams.create({
        ciphertext: C.enc.Base64.parse(t)
    });
    return C.AES.decrypt(i, this.key, {
        iv: C.enc.Hex.parse(e)
    }).toString(C.enc.Utf8)
};

function I(e, t) {
    var i = new Sb(128, 1e3);
    return 0 === t ? i.encrypt("3d70d6aee9810adac87eac0a78ba69be", e) : i.decrypt("3d70d6aee9810adac87eac0a78ba69be", e)
}

function za(cookie, e) {
    var t;
    return (t = cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"))) ? unescape(t[2]) : null
}

function md() {
    try {
        if (Ta && localStorage && "getItem" in localStorage) {
            var e = localStorage.getItem("GUID");
            if (e)
                return e
        }
    } catch (t) {
    }
    return za("GUID")
}

function Pc(e, t) {
    if (null === e)
        return null;
    var i = e.match(new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"));
    return null != i ? unescape(i[2]) : null
}

function ib(e, t, i) {
    if (!(i = za(i))) {
        i = "",
            e = e || 32;
        for (var n = (t = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", "0123456789", "0123456789abcdef"][t || 0]).length, o = 0; o < e; o++)
            i += t.charAt(Math.floor(Math.random() * n))
    }
    return i
}

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
