navigator = {
    // WT-JS_DEBUG
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this, window.navigator = navigator;

function int2char(n) {
    return BI_RM.charAt(n)
}

function hex2b64(h) {
    var i, c, ret = "";
    for (i = 0; i + 3 <= h.length; i += 3)
        c = parseInt(h.substring(i, i + 3), 16),
            ret += b64map.charAt(c >> 6) + b64map.charAt(63 & c);
    for (i + 1 == h.length ? (c = parseInt(h.substring(i, i + 1), 16),
        ret += b64map.charAt(c << 2)) : i + 2 == h.length && (c = parseInt(h.substring(i, i + 2), 16),
        ret += b64map.charAt(c >> 2) + b64map.charAt((3 & c) << 4)); (3 & ret.length) > 0;)
        ret += b64pad;
    return ret
}

function __extends(d, b) {
    function __() {
        this.constructor = d
    }

    extendStatics(d, b),
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype,
            new __)
}

function nbi() {
    return new BigInteger(null)
}

function parseBigInt(str, r) {
    return new BigInteger(str, r)
}

function am1(i, x, w, j, c, n) {
    for (; --n >= 0;) {
        var v = x * this[i++] + w[j] + c;
        c = Math.floor(v / 67108864),
            w[j++] = 67108863 & v
    }
    return c
}

function am2(i, x, w, j, c, n) {
    for (var xl = 32767 & x, xh = x >> 15; --n >= 0;) {
        var l = 32767 & this[i]
            , h = this[i++] >> 15
            , m = xh * l + h * xl;
        l = xl * l + ((32767 & m) << 15) + w[j] + (1073741823 & c),
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30),
            w[j++] = 1073741823 & l
    }
    return c
}

function am3(i, x, w, j, c, n) {
    for (var xl = 16383 & x, xh = x >> 14; --n >= 0;) {
        var l = 16383 & this[i]
            , h = this[i++] >> 14
            , m = xh * l + h * xl;
        l = xl * l + ((16383 & m) << 14) + w[j] + c,
            c = (l >> 28) + (m >> 14) + xh * h,
            w[j++] = 268435455 & l
    }
    return c
}

function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return null == c ? -1 : c
}

function nbv(i) {
    var r = nbi();
    return r.fromInt(i),
        r
}

function nbits(x) {
    var t, r = 1;
    return 0 != (t = x >>> 16) && (x = t,
        r += 16),
    0 != (t = x >> 8) && (x = t,
        r += 8),
    0 != (t = x >> 4) && (x = t,
        r += 4),
    0 != (t = x >> 2) && (x = t,
        r += 2),
    0 != (t = x >> 1) && (x = t,
        r += 1),
        r
}

function prng_newstate() {
    return new Arcfour
}

function rng_get_byte() {
    if (null == rng_state) {
        for (rng_state = prng_newstate(); rng_pptr < rng_psize;) {
            var random = Math.floor(65536 * Math.random());
            rng_pool[rng_pptr++] = 255 & random
        }
        for (rng_state.init(rng_pool),
                 rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
            rng_pool[rng_pptr] = 0;
        rng_pptr = 0
    }
    return rng_state.next()
}

function pkcs1pad2(s, n) {
    if (n < s.length + 11)
        return console.error("Message too long for RSA"),
            null;
    for (var ba = [], i = s.length - 1; i >= 0 && n > 0;) {
        var c = s.charCodeAt(i--);
        c < 128 ? ba[--n] = c : c > 127 && c < 2048 ? (ba[--n] = 63 & c | 128,
            ba[--n] = c >> 6 | 192) : (ba[--n] = 63 & c | 128,
            ba[--n] = c >> 6 & 63 | 128,
            ba[--n] = c >> 12 | 224)
    }
    ba[--n] = 0;
    for (var rng = new SecureRandom, x = []; n > 2;) {
        for (x[0] = 0; 0 == x[0];)
            rng.nextBytes(x);
        ba[--n] = x[0]
    }
    return ba[--n] = 2,
        ba[--n] = 0,
        new BigInteger(ba)
}

var decoder$1, dbits, BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
    b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b64pad = "=",
    extendStatics = function (d, b) {
        return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (d, b) {
                    d.__proto__ = b
                }
                || function (d, b) {
                    for (var p in b)
                        b.hasOwnProperty(p) && (d[p] = b[p])
                }
        )(d, b)
    }, Base64 = {
        decode: function (a) {
            var i;
            if (void 0 === decoder$1) {
                var ignore = "= \f\n\r\t \u2028\u2029";
                for (decoder$1 = Object.create(null),
                         i = 0; i < 64; ++i)
                    decoder$1["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i)] = i;
                for (i = 0; i < ignore.length; ++i)
                    decoder$1[ignore.charAt(i)] = -1
            }
            var out = []
                , bits = 0
                , char_count = 0;
            for (i = 0; i < a.length; ++i) {
                var c = a.charAt(i);
                if ("=" == c)
                    break;
                if (-1 != (c = decoder$1[c])) {
                    if (void 0 === c)
                        throw new Error("Illegal character at offset " + i);
                    bits |= c,
                        ++char_count >= 4 ? (out[out.length] = bits >> 16,
                            out[out.length] = bits >> 8 & 255,
                            out[out.length] = 255 & bits,
                            bits = 0,
                            char_count = 0) : bits <<= 6
                }
            }
            switch (char_count) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    out[out.length] = bits >> 10;
                    break;
                case 3:
                    out[out.length] = bits >> 16,
                        out[out.length] = bits >> 8 & 255
            }
            return out
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function (a) {
            var m = Base64.re.exec(a);
            if (m)
                if (m[1])
                    a = m[1];
                else {
                    if (!m[2])
                        throw new Error("RegExp out of sync");
                    a = m[2]
                }
            return Base64.decode(a)
        }
    }, Stream = function () {
        function Stream(enc, pos) {
            this.hexDigits = "0123456789ABCDEF",
                enc instanceof Stream ? (this.enc = enc.enc,
                    this.pos = enc.pos) : (this.enc = enc,
                    this.pos = pos)
        }

        return Stream.prototype.get = function (pos) {
            if (void 0 === pos && (pos = this.pos++),
            pos >= this.enc.length)
                throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(pos) : this.enc[pos]
        }
            ,
            Stream.prototype.hexByte = function (b) {
                return this.hexDigits.charAt(b >> 4 & 15) + this.hexDigits.charAt(15 & b)
            }
            ,
            Stream.prototype.hexDump = function (start, end, raw) {
                for (var s = "", i = start; i < end; ++i)
                    if (s += this.hexByte(this.get(i)),
                    !0 !== raw)
                        switch (15 & i) {
                            case 7:
                                s += "  ";
                                break;
                            case 15:
                                s += "\n";
                                break;
                            default:
                                s += " "
                        }
                return s
            }
            ,
            Stream
    }(), ASN1 = function () {
        function ASN1(stream, header, length, tag, sub) {
            if (!(tag instanceof ASN1Tag))
                throw new Error("Invalid tag value.");
            this.stream = stream,
                this.header = header,
                this.length = length,
                this.tag = tag,
                this.sub = sub
        }

        return ASN1.prototype.posStart = function () {
            return this.stream.pos
        }
            ,
            ASN1.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            ASN1.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            ASN1.decodeLength = function (stream) {
                var buf = stream.get()
                    , len = 127 & buf;
                if (len == buf)
                    return len;
                if (len > 6)
                    throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
                if (0 === len)
                    return null;
                buf = 0;
                for (var i = 0; i < len; ++i)
                    buf = 256 * buf + stream.get();
                return buf
            }
            ,
            ASN1.prototype.getHexStringValue = function () {
                var hexString = this.toHexString()
                    , offset = 2 * this.header
                    , length = 2 * this.length;
                return hexString.substr(offset, length)
            }
            ,
            ASN1.decode = function (str) {
                var stream;
                stream = str instanceof Stream ? str : new Stream(str, 0);
                var streamStart = new Stream(stream)
                    , tag = new ASN1Tag(stream)
                    , len = ASN1.decodeLength(stream)
                    , start = stream.pos
                    , header = start - streamStart.pos
                    , sub = null
                    , getSub = function () {
                    var ret = [];
                    if (null !== len) {
                        for (var end = start + len; stream.pos < end;)
                            ret[ret.length] = ASN1.decode(stream);
                        if (stream.pos != end)
                            throw new Error("Content size is not correct for container starting at offset " + start)
                    } else
                        try {
                            for (; ;) {
                                var s = ASN1.decode(stream);
                                if (s.tag.isEOC())
                                    break;
                                ret[ret.length] = s
                            }
                            len = start - stream.pos
                        } catch (e) {
                            throw new Error("Exception while decoding undefined length content: " + e)
                        }
                    return ret
                };
                if (tag.tagConstructed)
                    sub = getSub();
                else if (tag.isUniversal() && (3 == tag.tagNumber || 4 == tag.tagNumber))
                    try {
                        if (3 == tag.tagNumber && 0 != stream.get())
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        sub = getSub();
                        for (var i = 0; i < sub.length; ++i)
                            if (sub[i].tag.isEOC())
                                throw new Error("EOC is not supposed to be actual content.")
                    } catch (e) {
                        sub = null
                    }
                if (null === sub) {
                    if (null === len)
                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
                    stream.pos = start + Math.abs(len)
                }
                return new ASN1(streamStart, header, len, tag, sub)
            }
            ,
            ASN1
    }(), ASN1Tag = function () {
        function ASN1Tag(stream) {
            var buf = stream.get();
            if (this.tagClass = buf >> 6,
                this.tagConstructed = 0 != (32 & buf),
                this.tagNumber = 31 & buf,
            31 == this.tagNumber) {
                var n = new Int10;
                do {
                    buf = stream.get(),
                        n.mulAdd(128, 127 & buf)
                } while (128 & buf);
                this.tagNumber = n.simplify()
            }
        }

        return ASN1Tag.prototype.isUniversal = function () {
            return 0 === this.tagClass
        }
            ,
            ASN1Tag.prototype.isEOC = function () {
                return 0 === this.tagClass && 0 === this.tagNumber
            }
            ,
            ASN1Tag
    }(), canary = 0xdeadbeefcafe, j_lm = 15715070 == (16777215 & canary), BigInteger = function () {
        function BigInteger(a, b, c) {
            null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
        }

        return BigInteger.prototype.toString = function (b) {
            if (this.s < 0)
                return "-" + this.negate().toString(b);
            var k;
            if (16 == b)
                k = 4;
            else if (8 == b)
                k = 3;
            else if (2 == b)
                k = 1;
            else if (32 == b)
                k = 5;
            else {
                if (4 != b)
                    return this.toRadix(b);
                k = 2
            }
            var d, km = (1 << k) - 1, m = !1, r = "", i = this.t, p = this.DB - i * this.DB % k;
            if (i-- > 0)
                for (p < this.DB && (d = this[i] >> p) > 0 && (m = !0,
                    r = int2char(d)); i >= 0;)
                    p < k ? (d = (this[i] & (1 << p) - 1) << k - p,
                        d |= this[--i] >> (p += this.DB - k)) : (d = this[i] >> (p -= k) & km,
                    p <= 0 && (p += this.DB,
                        --i)),
                    d > 0 && (m = !0),
                    m && (r += int2char(d));
            return m ? r : "0"
        }
            ,
            BigInteger.prototype.negate = function () {
                var r = nbi();
                return BigInteger.ZERO.subTo(this, r),
                    r
            }
            ,
            BigInteger.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this
            }
            ,
            BigInteger.prototype.compareTo = function (a) {
                var r = this.s - a.s;
                if (0 != r)
                    return r;
                var i = this.t;
                if (0 != (r = i - a.t))
                    return this.s < 0 ? -r : r;
                for (; --i >= 0;)
                    if (0 != (r = this[i] - a[i]))
                        return r;
                return 0
            }
            ,
            BigInteger.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            BigInteger.prototype.modPowInt = function (e, m) {
                var z;
                return z = e < 256 || m.isEven() ? new Classic(m) : new Montgomery(m),
                    this.exp(e, z)
            }
            ,
            BigInteger.prototype.copyTo = function (r) {
                for (var i = this.t - 1; i >= 0; --i)
                    r[i] = this[i];
                r.t = this.t,
                    r.s = this.s
            }
            ,
            BigInteger.prototype.fromInt = function (x) {
                this.t = 1,
                    this.s = x < 0 ? -1 : 0,
                    x > 0 ? this[0] = x : x < -1 ? this[0] = x + this.DV : this.t = 0
            }
            ,
            BigInteger.prototype.fromString = function (s, b) {
                var k;
                if (16 == b)
                    k = 4;
                else if (8 == b)
                    k = 3;
                else if (256 == b)
                    k = 8;
                else if (2 == b)
                    k = 1;
                else if (32 == b)
                    k = 5;
                else {
                    if (4 != b)
                        return void this.fromRadix(s, b);
                    k = 2
                }
                this.t = 0,
                    this.s = 0;
                for (var i = s.length, mi = !1, sh = 0; --i >= 0;) {
                    var x = 8 == k ? 255 & +s[i] : intAt(s, i);
                    x < 0 ? "-" == s.charAt(i) && (mi = !0) : (mi = !1,
                        0 == sh ? this[this.t++] = x : sh + k > this.DB ? (this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh,
                            this[this.t++] = x >> this.DB - sh) : this[this.t - 1] |= x << sh,
                    (sh += k) >= this.DB && (sh -= this.DB))
                }
                8 == k && 0 != (128 & +s[0]) && (this.s = -1,
                sh > 0 && (this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh)),
                    this.clamp(),
                mi && BigInteger.ZERO.subTo(this, this)
            }
            ,
            BigInteger.prototype.clamp = function () {
                for (var c = this.s & this.DM; this.t > 0 && this[this.t - 1] == c;)
                    --this.t
            }
            ,
            BigInteger.prototype.dlShiftTo = function (n, r) {
                var i;
                for (i = this.t - 1; i >= 0; --i)
                    r[i + n] = this[i];
                for (i = n - 1; i >= 0; --i)
                    r[i] = 0;
                r.t = this.t + n,
                    r.s = this.s
            }
            ,
            BigInteger.prototype.drShiftTo = function (n, r) {
                for (var i = n; i < this.t; ++i)
                    r[i - n] = this[i];
                r.t = Math.max(this.t - n, 0),
                    r.s = this.s
            }
            ,
            BigInteger.prototype.lShiftTo = function (n, r) {
                for (var bs = n % this.DB, cbs = this.DB - bs, bm = (1 << cbs) - 1, ds = Math.floor(n / this.DB), c = this.s << bs & this.DM, i = this.t - 1; i >= 0; --i)
                    r[i + ds + 1] = this[i] >> cbs | c,
                        c = (this[i] & bm) << bs;
                for (var i = ds - 1; i >= 0; --i)
                    r[i] = 0;
                r[ds] = c,
                    r.t = this.t + ds + 1,
                    r.s = this.s,
                    r.clamp()
            }
            ,
            BigInteger.prototype.rShiftTo = function (n, r) {
                r.s = this.s;
                var ds = Math.floor(n / this.DB);
                if (ds >= this.t)
                    return void (r.t = 0);
                var bs = n % this.DB
                    , cbs = this.DB - bs
                    , bm = (1 << bs) - 1;
                r[0] = this[ds] >> bs;
                for (var i = ds + 1; i < this.t; ++i)
                    r[i - ds - 1] |= (this[i] & bm) << cbs,
                        r[i - ds] = this[i] >> bs;
                bs > 0 && (r[this.t - ds - 1] |= (this.s & bm) << cbs),
                    r.t = this.t - ds,
                    r.clamp()
            }
            ,
            BigInteger.prototype.subTo = function (a, r) {
                for (var i = 0, c = 0, m = Math.min(a.t, this.t); i < m;)
                    c += this[i] - a[i],
                        r[i++] = c & this.DM,
                        c >>= this.DB;
                if (a.t < this.t) {
                    for (c -= a.s; i < this.t;)
                        c += this[i],
                            r[i++] = c & this.DM,
                            c >>= this.DB;
                    c += this.s
                } else {
                    for (c += this.s; i < a.t;)
                        c -= a[i],
                            r[i++] = c & this.DM,
                            c >>= this.DB;
                    c -= a.s
                }
                r.s = c < 0 ? -1 : 0,
                    c < -1 ? r[i++] = this.DV + c : c > 0 && (r[i++] = c),
                    r.t = i,
                    r.clamp()
            }
            ,
            BigInteger.prototype.multiplyTo = function (a, r) {
                var x = this.abs()
                    , y = a.abs()
                    , i = x.t;
                for (r.t = i + y.t; --i >= 0;)
                    r[i] = 0;
                for (i = 0; i < y.t; ++i)
                    r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
                r.s = 0,
                    r.clamp(),
                this.s != a.s && BigInteger.ZERO.subTo(r, r)
            }
            ,
            BigInteger.prototype.squareTo = function (r) {
                for (var x = this.abs(), i = r.t = 2 * x.t; --i >= 0;)
                    r[i] = 0;
                for (i = 0; i < x.t - 1; ++i) {
                    var c = x.am(i, x[i], r, 2 * i, 0, 1);
                    (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV && (r[i + x.t] -= x.DV,
                        r[i + x.t + 1] = 1)
                }
                r.t > 0 && (r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1)),
                    r.s = 0,
                    r.clamp()
            }
            ,
            BigInteger.prototype.divRemTo = function (m, q, r) {
                var pm = m.abs();
                if (!(pm.t <= 0)) {
                    var pt = this.abs();
                    if (pt.t < pm.t)
                        return null != q && q.fromInt(0),
                            void (null != r && this.copyTo(r));
                    null == r && (r = nbi());
                    var y = nbi()
                        , ts = this.s
                        , ms = m.s
                        , nsh = this.DB - nbits(pm[pm.t - 1]);
                    nsh > 0 ? (pm.lShiftTo(nsh, y),
                        pt.lShiftTo(nsh, r)) : (pm.copyTo(y),
                        pt.copyTo(r));
                    var ys = y.t
                        , y0 = y[ys - 1];
                    if (0 != y0) {
                        var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0)
                            , d1 = this.FV / yt
                            , d2 = (1 << this.F1) / yt
                            , e = 1 << this.F2
                            , i = r.t
                            , j = i - ys
                            , t = null == q ? nbi() : q;
                        for (y.dlShiftTo(j, t),
                             r.compareTo(t) >= 0 && (r[r.t++] = 1,
                                 r.subTo(t, r)),
                                 BigInteger.ONE.dlShiftTo(ys, t),
                                 t.subTo(y, y); y.t < ys;)
                            y[y.t++] = 0;
                        for (; --j >= 0;) {
                            var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
                            if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd)
                                for (y.dlShiftTo(j, t),
                                         r.subTo(t, r); r[i] < --qd;)
                                    r.subTo(t, r)
                        }
                        null != q && (r.drShiftTo(ys, q),
                        ts != ms && BigInteger.ZERO.subTo(q, q)),
                            r.t = ys,
                            r.clamp(),
                        nsh > 0 && r.rShiftTo(nsh, r),
                        ts < 0 && BigInteger.ZERO.subTo(r, r)
                    }
                }
            }
            ,
            BigInteger.prototype.invDigit = function () {
                if (this.t < 1)
                    return 0;
                var x = this[0];
                if (0 == (1 & x))
                    return 0;
                var y = 3 & x;
                return y = y * (2 - (15 & x) * y) & 15,
                    y = y * (2 - (255 & x) * y) & 255,
                    y = y * (2 - ((65535 & x) * y & 65535)) & 65535,
                    y = y * (2 - x * y % this.DV) % this.DV,
                    y > 0 ? this.DV - y : -y
            }
            ,
            BigInteger.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            BigInteger.prototype.exp = function (e, z) {
                if (e > 4294967295 || e < 1)
                    return BigInteger.ONE;
                var r = nbi()
                    , r2 = nbi()
                    , g = z.convert(this)
                    , i = nbits(e) - 1;
                for (g.copyTo(r); --i >= 0;)
                    if (z.sqrTo(r, r2),
                    (e & 1 << i) > 0)
                        z.mulTo(r2, g, r);
                    else {
                        var t = r;
                        r = r2,
                            r2 = t
                    }
                return z.revert(r)
            }
            ,
            BigInteger
    }(), Classic = function () {
        function Classic(m) {
            this.m = m
        }

        return Classic.prototype.convert = function (x) {
            return x.s < 0 || x.compareTo(this.m) >= 0 ? x.mod(this.m) : x
        }
            ,
            Classic.prototype.revert = function (x) {
                return x
            }
            ,
            Classic.prototype.reduce = function (x) {
                x.divRemTo(this.m, null, x)
            }
            ,
            Classic.prototype.mulTo = function (x, y, r) {
                x.multiplyTo(y, r),
                    this.reduce(r)
            }
            ,
            Classic.prototype.sqrTo = function (x, r) {
                x.squareTo(r),
                    this.reduce(r)
            }
            ,
            Classic
    }(), Montgomery = function () {
        function Montgomery(m) {
            this.m = m,
                this.mp = m.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << m.DB - 15) - 1,
                this.mt2 = 2 * m.t
        }

        return Montgomery.prototype.convert = function (x) {
            var r = nbi();
            return x.abs().dlShiftTo(this.m.t, r),
                r.divRemTo(this.m, null, r),
            x.s < 0 && r.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(r, r),
                r
        }
            ,
            Montgomery.prototype.revert = function (x) {
                var r = nbi();
                return x.copyTo(r),
                    this.reduce(r),
                    r
            }
            ,
            Montgomery.prototype.reduce = function (x) {
                for (; x.t <= this.mt2;)
                    x[x.t++] = 0;
                for (var i = 0; i < this.m.t; ++i) {
                    var j = 32767 & x[i]
                        , u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM;
                    for (j = i + this.m.t,
                             x[j] += this.m.am(0, u0, x, i, 0, this.m.t); x[j] >= x.DV;)
                        x[j] -= x.DV,
                            x[++j]++
                }
                x.clamp(),
                    x.drShiftTo(this.m.t, x),
                x.compareTo(this.m) >= 0 && x.subTo(this.m, x)
            }
            ,
            Montgomery.prototype.mulTo = function (x, y, r) {
                x.multiplyTo(y, r),
                    this.reduce(r)
            }
            ,
            Montgomery.prototype.sqrTo = function (x, r) {
                x.squareTo(r),
                    this.reduce(r)
            }
            ,
            Montgomery
    }();
j_lm && "Microsoft Internet Explorer" == navigator.appName ? (BigInteger.prototype.am = am2,
    dbits = 30) : j_lm && "Netscape" != navigator.appName ? (BigInteger.prototype.am = am1,
    dbits = 26) : (BigInteger.prototype.am = am3,
    dbits = 28),
    BigInteger.prototype.DB = dbits,
    BigInteger.prototype.DM = (1 << dbits) - 1,
    BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP),
    BigInteger.prototype.F1 = BI_FP - dbits,
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var rr, vv, BI_RC = [];
for (rr = "0".charCodeAt(0),
         vv = 0; vv <= 9; ++vv)
    BI_RC[rr++] = vv;
for (rr = "a".charCodeAt(0),
         vv = 10; vv < 36; ++vv)
    BI_RC[rr++] = vv;
for (rr = "A".charCodeAt(0),
         vv = 10; vv < 36; ++vv)
    BI_RC[rr++] = vv;
BigInteger.ZERO = nbv(0),
    BigInteger.ONE = nbv(1);
var rng_state, rng_pptr, Arcfour = function () {
    function Arcfour() {
        this.i = 0,
            this.j = 0,
            this.S = []
    }

    return Arcfour.prototype.init = function (key) {
        var i, j, t;
        for (i = 0; i < 256; ++i)
            this.S[i] = i;
        for (j = 0,
                 i = 0; i < 256; ++i)
            j = j + this.S[i] + key[i % key.length] & 255,
                t = this.S[i],
                this.S[i] = this.S[j],
                this.S[j] = t;
        this.i = 0,
            this.j = 0
    }
        ,
        Arcfour.prototype.next = function () {
            var t;
            return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
        }
        ,
        Arcfour
}(), rng_psize = 256, rng_pool = null;
if (null == rng_pool) {
    rng_pool = [],
        rng_pptr = 0;
    var t = void 0;
    if (window.crypto && window.crypto.getRandomValues) {
        var z = new Uint32Array(256);
        for (window.crypto.getRandomValues(z),
                 t = 0; t < z.length; ++t)
            rng_pool[rng_pptr++] = 255 & z[t]
    }
    var onMouseMoveListener_1 = function (ev) {
        if (this.count = this.count || 0,
        this.count >= 256 || rng_pptr >= rng_psize)
            return void (window.removeEventListener ? window.removeEventListener("mousemove", onMouseMoveListener_1, !1) : window.detachEvent && window.detachEvent("onmousemove", onMouseMoveListener_1));
        try {
            var mouseCoordinates = ev.x + ev.y;
            rng_pool[rng_pptr++] = 255 & mouseCoordinates,
                this.count += 1
        } catch (e) {
        }
    };
    window.addEventListener ? window.addEventListener("mousemove", onMouseMoveListener_1, !1) : window.attachEvent && window.attachEvent("onmousemove", onMouseMoveListener_1)
}
var SecureRandom = function () {
    function SecureRandom() {
    }

    return SecureRandom.prototype.nextBytes = function (ba) {
        for (var i = 0; i < ba.length; ++i)
            ba[i] = rng_get_byte()
    }
        ,
        SecureRandom
}()
    , RSAKey = function () {
    function RSAKey() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    }

    return RSAKey.prototype.doPublic = function (x) {
        return x.modPowInt(this.e, this.n)
    }
        ,
        RSAKey.prototype.encrypt = function (text) {
            var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);
            if (null == m)
                return null;
            var c = this.doPublic(m);
            if (null == c)
                return null;
            var h = c.toString(16);
            return 0 == (1 & h.length) ? h : "0" + h
        }
        ,
        RSAKey.prototype.generate = function (B, E) {
            var rng = new SecureRandom
                , qs = B >> 1;
            this.e = parseInt(E, 16);
            for (var ee = new BigInteger(E, 16); ;) {
                for (; this.p = new BigInteger(B - qs, 1, rng),
                       0 != this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) || !this.p.isProbablePrime(10);)
                    ;
                for (; this.q = new BigInteger(qs, 1, rng),
                       0 != this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) || !this.q.isProbablePrime(10);)
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var t = this.p;
                    this.p = this.q,
                        this.q = t
                }
                var p1 = this.p.subtract(BigInteger.ONE)
                    , q1 = this.q.subtract(BigInteger.ONE)
                    , phi = p1.multiply(q1);
                if (0 == phi.gcd(ee).compareTo(BigInteger.ONE)) {
                    this.n = this.p.multiply(this.q),
                        this.d = ee.modInverse(phi),
                        this.dmp1 = this.d.mod(p1),
                        this.dmq1 = this.d.mod(q1),
                        this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        ,
        RSAKey.prototype.generateAsync = function (B, E, callback) {
            var rng = new SecureRandom
                , qs = B >> 1;
            this.e = parseInt(E, 16);
            var ee = new BigInteger(E, 16)
                , rsa = this
                , loop1 = function () {
                var loop4 = function () {
                    if (rsa.p.compareTo(rsa.q) <= 0) {
                        var t = rsa.p;
                        rsa.p = rsa.q,
                            rsa.q = t
                    }
                    var p1 = rsa.p.subtract(BigInteger.ONE)
                        , q1 = rsa.q.subtract(BigInteger.ONE)
                        , phi = p1.multiply(q1);
                    0 == phi.gcd(ee).compareTo(BigInteger.ONE) ? (rsa.n = rsa.p.multiply(rsa.q),
                        rsa.d = ee.modInverse(phi),
                        rsa.dmp1 = rsa.d.mod(p1),
                        rsa.dmq1 = rsa.d.mod(q1),
                        rsa.coeff = rsa.q.modInverse(rsa.p),
                        setTimeout(function () {
                            callback()
                        }, 0)) : setTimeout(loop1, 0)
                }
                    , loop3 = function () {
                    rsa.q = nbi(),
                        rsa.q.fromNumberAsync(qs, 1, rng, function () {
                            rsa.q.subtract(BigInteger.ONE).gcda(ee, function (r) {
                                0 == r.compareTo(BigInteger.ONE) && rsa.q.isProbablePrime(10) ? setTimeout(loop4, 0) : setTimeout(loop3, 0)
                            })
                        })
                }
                    , loop2 = function () {
                    rsa.p = nbi(),
                        rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
                            rsa.p.subtract(BigInteger.ONE).gcda(ee, function (r) {
                                0 == r.compareTo(BigInteger.ONE) && rsa.p.isProbablePrime(10) ? setTimeout(loop3, 0) : setTimeout(loop2, 0)
                            })
                        })
                };
                setTimeout(loop2, 0)
            };
            setTimeout(loop1, 0)
        }
        ,
        RSAKey
}()
    , YAHOO = {};
YAHOO.lang = {
    extend: function (subc, superc, overrides) {
        if (!superc || !subc)
            throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
        var F = function () {
        };
        if (F.prototype = superc.prototype,
            subc.prototype = new F,
            subc.prototype.constructor = subc,
            subc.superclass = superc.prototype,
        superc.prototype.constructor == Object.prototype.constructor && (superc.prototype.constructor = superc),
            overrides) {
            var i;
            for (i in overrides)
                subc.prototype[i] = overrides[i];
            var _IEEnumFix = function () {
            }
                , ADD = ["toString", "valueOf"];
            try {
                /MSIE/.test(navigator.userAgent) && (_IEEnumFix = function (r, s) {
                        for (i = 0; i < ADD.length; i += 1) {
                            var fname = ADD[i]
                                , f = s[fname];
                            "function" == typeof f && f != Object.prototype[fname] && (r[fname] = f)
                        }
                    }
                )
            } catch (ex) {
            }
            _IEEnumFix(subc.prototype, overrides)
        }
    }
};
var KJUR = {};
void 0 !== KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}),
    KJUR.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (i) {
            var h = i.toString(16);
            return h.length % 2 == 1 && (h = "0" + h),
                h
        }
            ,
            this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
                var h = bigIntegerValue.toString(16);
                if ("-" != h.substr(0, 1))
                    h.length % 2 == 1 ? h = "0" + h : h.match(/^[0-7]/) || (h = "00" + h);
                else {
                    var hPos = h.substr(1)
                        , xorLen = hPos.length;
                    xorLen % 2 == 1 ? xorLen += 1 : h.match(/^[0-7]/) || (xorLen += 2);
                    for (var hMask = "", i = 0; i < xorLen; i++)
                        hMask += "f";
                    h = new BigInteger(hMask, 16).xor(bigIntegerValue).add(BigInteger.ONE).toString(16).replace(/^-/, "")
                }
                return h
            }
            ,
            this.getPEMStringFromHex = function (dataHex, pemHeader) {
                return hextopem(dataHex, pemHeader)
            }
            ,
            this.newObject = function (param) {
                var _KJUR = KJUR
                    , _KJUR_asn1 = _KJUR.asn1
                    , _DERBoolean = _KJUR_asn1.DERBoolean
                    , _DERInteger = _KJUR_asn1.DERInteger
                    , _DERBitString = _KJUR_asn1.DERBitString
                    , _DEROctetString = _KJUR_asn1.DEROctetString
                    , _DERNull = _KJUR_asn1.DERNull
                    , _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier
                    , _DEREnumerated = _KJUR_asn1.DEREnumerated
                    , _DERUTF8String = _KJUR_asn1.DERUTF8String
                    , _DERNumericString = _KJUR_asn1.DERNumericString
                    , _DERPrintableString = _KJUR_asn1.DERPrintableString
                    , _DERTeletexString = _KJUR_asn1.DERTeletexString
                    , _DERIA5String = _KJUR_asn1.DERIA5String
                    , _DERUTCTime = _KJUR_asn1.DERUTCTime
                    , _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime
                    , _DERSequence = _KJUR_asn1.DERSequence
                    , _DERSet = _KJUR_asn1.DERSet
                    , _DERTaggedObject = _KJUR_asn1.DERTaggedObject
                    , _newObject = _KJUR_asn1.ASN1Util.newObject
                    , keys = Object.keys(param);
                if (1 != keys.length)
                    throw "key of param shall be only one.";
                var key = keys[0];
                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":"))
                    throw "undefined key: " + key;
                if ("bool" == key)
                    return new _DERBoolean(param[key]);
                if ("int" == key)
                    return new _DERInteger(param[key]);
                if ("bitstr" == key)
                    return new _DERBitString(param[key]);
                if ("octstr" == key)
                    return new _DEROctetString(param[key]);
                if ("null" == key)
                    return new _DERNull(param[key]);
                if ("oid" == key)
                    return new _DERObjectIdentifier(param[key]);
                if ("enum" == key)
                    return new _DEREnumerated(param[key]);
                if ("utf8str" == key)
                    return new _DERUTF8String(param[key]);
                if ("numstr" == key)
                    return new _DERNumericString(param[key]);
                if ("prnstr" == key)
                    return new _DERPrintableString(param[key]);
                if ("telstr" == key)
                    return new _DERTeletexString(param[key]);
                if ("ia5str" == key)
                    return new _DERIA5String(param[key]);
                if ("utctime" == key)
                    return new _DERUTCTime(param[key]);
                if ("gentime" == key)
                    return new _DERGeneralizedTime(param[key]);
                if ("seq" == key) {
                    for (var paramList = param[key], a = [], i = 0; i < paramList.length; i++) {
                        var asn1Obj = _newObject(paramList[i]);
                        a.push(asn1Obj)
                    }
                    return new _DERSequence({
                        array: a
                    })
                }
                if ("set" == key) {
                    for (var paramList = param[key], a = [], i = 0; i < paramList.length; i++) {
                        var asn1Obj = _newObject(paramList[i]);
                        a.push(asn1Obj)
                    }
                    return new _DERSet({
                        array: a
                    })
                }
                if ("tag" == key) {
                    var tagParam = param[key];
                    if ("[object Array]" === Object.prototype.toString.call(tagParam) && 3 == tagParam.length) {
                        var obj = _newObject(tagParam[2]);
                        return new _DERTaggedObject({
                            tag: tagParam[0],
                            explicit: tagParam[1],
                            obj: obj
                        })
                    }
                    var newParam = {};
                    if (void 0 !== tagParam.explicit && (newParam.explicit = tagParam.explicit),
                    void 0 !== tagParam.tag && (newParam.tag = tagParam.tag),
                    void 0 === tagParam.obj)
                        throw "obj shall be specified for 'tag'.";
                    return newParam.obj = _newObject(tagParam.obj),
                        new _DERTaggedObject(newParam)
                }
            }
            ,
            this.jsonToASN1HEX = function (param) {
                return this.newObject(param).getEncodedHex()
            }
    }
    ,
    KJUR.asn1.ASN1Util.oidHexToInt = function (hex) {
        for (var s = "", i01 = parseInt(hex.substr(0, 2), 16), i0 = Math.floor(i01 / 40), i1 = i01 % 40, s = i0 + "." + i1, binbuf = "", i = 2; i < hex.length; i += 2) {
            var value = parseInt(hex.substr(i, 2), 16)
                , bin = ("00000000" + value.toString(2)).slice(-8);
            if (binbuf += bin.substr(1, 7),
            "0" == bin.substr(0, 1)) {
                s = s + "." + new BigInteger(binbuf, 2).toString(10),
                    binbuf = ""
            }
        }
        return s
    }
    ,
    KJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {
        var itox = function (i) {
            var h = i.toString(16);
            return 1 == h.length && (h = "0" + h),
                h
        }
            , roidtox = function (roid) {
            var h = ""
                , bi = new BigInteger(roid, 10)
                , b = bi.toString(2)
                , padLen = 7 - b.length % 7;
            7 == padLen && (padLen = 0);
            for (var bPad = "", i = 0; i < padLen; i++)
                bPad += "0";
            b = bPad + b;
            for (var i = 0; i < b.length - 1; i += 7) {
                var b8 = b.substr(i, 7);
                i != b.length - 7 && (b8 = "1" + b8),
                    h += itox(parseInt(b8, 2))
            }
            return h
        };
        if (!oidString.match(/^[0-9.]+$/))
            throw "malformed oid string: " + oidString;
        var h = ""
            , a = oidString.split(".")
            , i0 = 40 * parseInt(a[0]) + parseInt(a[1]);
        h += itox(i0),
            a.splice(0, 2);
        for (var i = 0; i < a.length; i++)
            h += roidtox(a[i]);
        return h
    }
    ,
    KJUR.asn1.ASN1Object = function () {
        this.getLengthHexFromValue = function () {
            if (void 0 === this.hV || null == this.hV)
                throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1)
                throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
            var n = this.hV.length / 2
                , hN = n.toString(16);
            if (hN.length % 2 == 1 && (hN = "0" + hN),
            n < 128)
                return hN;
            var hNlen = hN.length / 2;
            if (hNlen > 15)
                throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
            return (128 + hNlen).toString(16) + hN
        }
            ,
            this.getEncodedHex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(),
                    this.hL = this.getLengthHexFromValue(),
                    this.hTLV = this.hT + this.hL + this.hV,
                    this.isModified = !1),
                    this.hTLV
            }
            ,
            this.getValueHex = function () {
                return this.getEncodedHex(),
                    this.hV
            }
            ,
            this.getFreshValueHex = function () {
                return ""
            }
    }
    ,
    KJUR.asn1.DERAbstractString = function (params) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.getString = function () {
                return this.s
            }
            ,
            this.setString = function (newS) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = newS,
                    this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function (newHexString) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = newHexString
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && ("string" == typeof params ? this.setString(params) : void 0 !== params.str ? this.setString(params.str) : void 0 !== params.hex && this.setStringHex(params.hex))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERAbstractTime = function (params) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this),
            this.localDateToUTC = function (d) {
                return utc = d.getTime() + 6e4 * d.getTimezoneOffset(),
                    new Date(utc)
            }
            ,
            this.formatDate = function (dateObject, type, withMillis) {
                var pad = this.zeroPadding
                    , d = this.localDateToUTC(dateObject)
                    , year = String(d.getFullYear());
                "utc" == type && (year = year.substr(2, 2));
                var month = pad(String(d.getMonth() + 1), 2)
                    , day = pad(String(d.getDate()), 2)
                    , hour = pad(String(d.getHours()), 2)
                    , min = pad(String(d.getMinutes()), 2)
                    , sec = pad(String(d.getSeconds()), 2)
                    , s = year + month + day + hour + min + sec;
                if (!0 === withMillis) {
                    var millis = d.getMilliseconds();
                    if (0 != millis) {
                        var sMillis = pad(String(millis), 3);
                        sMillis = sMillis.replace(/[0]+$/, ""),
                            s = s + "." + sMillis
                    }
                }
                return s + "Z"
            }
            ,
            this.zeroPadding = function (s, len) {
                return s.length >= len ? s : new Array(len - s.length + 1).join("0") + s
            }
            ,
            this.getString = function () {
                return this.s
            }
            ,
            this.setString = function (newS) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = newS,
                    this.hV = stohex(newS)
            }
            ,
            this.setByDateValue = function (year, month, day, hour, min, sec) {
                var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
                this.setByDate(dateObject)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERAbstractStructured = function (params) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this),
            this.setByASN1ObjectArray = function (asn1ObjectArray) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array = asn1ObjectArray
            }
            ,
            this.appendASN1Object = function (asn1Object) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array.push(asn1Object)
            }
            ,
            this.asn1Array = new Array,
        void 0 !== params && void 0 !== params.array && (this.asn1Array = params.array)
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERBoolean = function () {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERInteger = function (params) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function (bigIntegerValue) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue)
            }
            ,
            this.setByInteger = function (intValue) {
                var bi = new BigInteger(String(intValue), 10);
                this.setByBigInteger(bi)
            }
            ,
            this.setValueHex = function (newHexString) {
                this.hV = newHexString
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && (void 0 !== params.bigint ? this.setByBigInteger(params.bigint) : void 0 !== params.int ? this.setByInteger(params.int) : "number" == typeof params ? this.setByInteger(params) : void 0 !== params.hex && this.setValueHex(params.hex))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERBitString = function (params) {
        if (void 0 !== params && void 0 !== params.obj) {
            var o = KJUR.asn1.ASN1Util.newObject(params.obj);
            params.hex = "00" + o.getEncodedHex()
        }
        KJUR.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = newHexStringIncludingUnusedBits
            }
            ,
            this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
                if (unusedBits < 0 || 7 < unusedBits)
                    throw "unused bits shall be from 0 to 7: u = " + unusedBits;
                var hUnusedBits = "0" + unusedBits;
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = hUnusedBits + hValue
            }
            ,
            this.setByBinaryString = function (binaryString) {
                binaryString = binaryString.replace(/0+$/, "");
                var unusedBits = 8 - binaryString.length % 8;
                8 == unusedBits && (unusedBits = 0);
                for (var i = 0; i <= unusedBits; i++)
                    binaryString += "0";
                for (var h = "", i = 0; i < binaryString.length - 1; i += 8) {
                    var b = binaryString.substr(i, 8)
                        , x = parseInt(b, 2).toString(16);
                    1 == x.length && (x = "0" + x),
                        h += x
                }
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = "0" + unusedBits + h
            }
            ,
            this.setByBooleanArray = function (booleanArray) {
                for (var s = "", i = 0; i < booleanArray.length; i++)
                    1 == booleanArray[i] ? s += "1" : s += "0";
                this.setByBinaryString(s)
            }
            ,
            this.newFalseArray = function (nLength) {
                for (var a = new Array(nLength), i = 0; i < nLength; i++)
                    a[i] = !1;
                return a
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && ("string" == typeof params && params.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(params) : void 0 !== params.hex ? this.setHexValueIncludingUnusedBits(params.hex) : void 0 !== params.bin ? this.setByBinaryString(params.bin) : void 0 !== params.array && this.setByBooleanArray(params.array))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object),
    KJUR.asn1.DEROctetString = function (params) {
        if (void 0 !== params && void 0 !== params.obj) {
            var o = KJUR.asn1.ASN1Util.newObject(params.obj);
            params.hex = o.getEncodedHex()
        }
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, params),
            this.hT = "04"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERNull = function () {
        KJUR.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERObjectIdentifier = function (params) {
        var itox = function (i) {
            var h = i.toString(16);
            return 1 == h.length && (h = "0" + h),
                h
        }
            , roidtox = function (roid) {
            var h = ""
                , bi = new BigInteger(roid, 10)
                , b = bi.toString(2)
                , padLen = 7 - b.length % 7;
            7 == padLen && (padLen = 0);
            for (var bPad = "", i = 0; i < padLen; i++)
                bPad += "0";
            b = bPad + b;
            for (var i = 0; i < b.length - 1; i += 7) {
                var b8 = b.substr(i, 7);
                i != b.length - 7 && (b8 = "1" + b8),
                    h += itox(parseInt(b8, 2))
            }
            return h
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function (newHexString) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = newHexString
            }
            ,
            this.setValueOidString = function (oidString) {
                if (!oidString.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + oidString;
                var h = ""
                    , a = oidString.split(".")
                    , i0 = 40 * parseInt(a[0]) + parseInt(a[1]);
                h += itox(i0),
                    a.splice(0, 2);
                for (var i = 0; i < a.length; i++)
                    h += roidtox(a[i]);
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = h
            }
            ,
            this.setValueName = function (oidName) {
                var oid = KJUR.asn1.x509.OID.name2oid(oidName);
                if ("" === oid)
                    throw "DERObjectIdentifier oidName undefined: " + oidName;
                this.setValueOidString(oid)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && ("string" == typeof params ? params.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(params) : this.setValueName(params) : void 0 !== params.oid ? this.setValueOidString(params.oid) : void 0 !== params.hex ? this.setValueHex(params.hex) : void 0 !== params.name && this.setValueName(params.name))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object),
    KJUR.asn1.DEREnumerated = function (params) {
        KJUR.asn1.DEREnumerated.superclass.constructor.call(this),
            this.hT = "0a",
            this.setByBigInteger = function (bigIntegerValue) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue)
            }
            ,
            this.setByInteger = function (intValue) {
                var bi = new BigInteger(String(intValue), 10);
                this.setByBigInteger(bi)
            }
            ,
            this.setValueHex = function (newHexString) {
                this.hV = newHexString
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && (void 0 !== params.int ? this.setByInteger(params.int) : "number" == typeof params ? this.setByInteger(params) : void 0 !== params.hex && this.setValueHex(params.hex))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object),
    KJUR.asn1.DERUTF8String = function (params) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params),
            this.hT = "0c"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERNumericString = function (params) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, params),
            this.hT = "12"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERPrintableString = function (params) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params),
            this.hT = "13"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERTeletexString = function (params) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params),
            this.hT = "14"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERIA5String = function (params) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, params),
            this.hT = "16"
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString),
    KJUR.asn1.DERUTCTime = function (params) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params),
            this.hT = "17",
            this.setByDate = function (dateObject) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.date = dateObject,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function () {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = stohex(this.s)),
                    this.hV
            }
            ,
        void 0 !== params && (void 0 !== params.str ? this.setString(params.str) : "string" == typeof params && params.match(/^[0-9]{12}Z$/) ? this.setString(params) : void 0 !== params.hex ? this.setStringHex(params.hex) : void 0 !== params.date && this.setByDate(params.date))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime),
    KJUR.asn1.DERGeneralizedTime = function (params) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params),
            this.hT = "18",
            this.withMillis = !1,
            this.setByDate = function (dateObject) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.date = dateObject,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function () {
                return void 0 === this.date && void 0 === this.s && (this.date = new Date,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = stohex(this.s)),
                    this.hV
            }
            ,
        void 0 !== params && (void 0 !== params.str ? this.setString(params.str) : "string" == typeof params && params.match(/^[0-9]{14}Z$/) ? this.setString(params) : void 0 !== params.hex ? this.setStringHex(params.hex) : void 0 !== params.date && this.setByDate(params.date),
        !0 === params.millis && (this.withMillis = !0))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime),
    KJUR.asn1.DERSequence = function (params) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, params),
            this.hT = "30",
            this.getFreshValueHex = function () {
                for (var h = "", i = 0; i < this.asn1Array.length; i++) {
                    h += this.asn1Array[i].getEncodedHex()
                }
                return this.hV = h,
                    this.hV
            }
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured),
    KJUR.asn1.DERSet = function (params) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, params),
            this.hT = "31",
            this.sortFlag = !0,
            this.getFreshValueHex = function () {
                for (var a = new Array, i = 0; i < this.asn1Array.length; i++) {
                    var asn1Obj = this.asn1Array[i];
                    a.push(asn1Obj.getEncodedHex())
                }
                return 1 == this.sortFlag && a.sort(),
                    this.hV = a.join(""),
                    this.hV
            }
            ,
        void 0 !== params && void 0 !== params.sortflag && 0 == params.sortflag && (this.sortFlag = !1)
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured),
    KJUR.asn1.DERTaggedObject = function (params) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
                this.hT = tagNoHex,
                    this.isExplicit = isExplicitFlag,
                    this.asn1Object = asn1Object,
                    this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                        this.hTLV = null,
                        this.isModified = !0) : (this.hV = null,
                        this.hTLV = asn1Object.getEncodedHex(),
                        this.hTLV = this.hTLV.replace(/^../, tagNoHex),
                        this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== params && (void 0 !== params.tag && (this.hT = params.tag),
        void 0 !== params.explicit && (this.isExplicit = params.explicit),
        void 0 !== params.obj && (this.asn1Object = params.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    }
    ,
    YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
var JSEncryptRSAKey = function (_super) {
    function JSEncryptRSAKey(key) {
        var _this = _super.call(this) || this;
        return key && ("string" == typeof key ? _this.parseKey(key) : (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) && _this.parsePropertiesFrom(key)),
            _this
    }
    return __extends(JSEncryptRSAKey, _super),
        JSEncryptRSAKey.prototype.parseKey = function (pem) {
            try {
                var modulus = 0
                    , public_exponent = 0
                    , reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                    , der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem)
                    , asn1 = ASN1.decode(der);
                if (3 === asn1.sub.length && (asn1 = asn1.sub[2].sub[0]),
                9 === asn1.sub.length) {
                    modulus = asn1.sub[1].getHexStringValue(),
                        console.log(modulus);
                        this.n = parseBigInt(modulus, 16),
                        public_exponent = asn1.sub[2].getHexStringValue(),
                        this.e = parseInt(public_exponent, 16);
                    var private_exponent = asn1.sub[3].getHexStringValue();
                    this.d = parseBigInt(private_exponent, 16);
                    var prime1 = asn1.sub[4].getHexStringValue();
                    this.p = parseBigInt(prime1, 16);
                    var prime2 = asn1.sub[5].getHexStringValue();
                    this.q = parseBigInt(prime2, 16);
                    var exponent1 = asn1.sub[6].getHexStringValue();
                    this.dmp1 = parseBigInt(exponent1, 16);
                    var exponent2 = asn1.sub[7].getHexStringValue();
                    this.dmq1 = parseBigInt(exponent2, 16);
                    var coefficient = asn1.sub[8].getHexStringValue();
                    this.coeff = parseBigInt(coefficient, 16)
                } else {
                    if (2 !== asn1.sub.length)
                        return !1;
                    var bit_string = asn1.sub[1]
                        , sequence = bit_string.sub[0];
                    modulus = sequence.sub[0].getHexStringValue(),
                        this.n = parseBigInt(modulus, 16),
                        public_exponent = sequence.sub[1].getHexStringValue(),
                        this.e = parseInt(public_exponent, 16)
                }
                return !0
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncryptRSAKey
}(RSAKey)
    , JSEncrypt = function () {
    function JSEncrypt(options) {
        options = options || {},
            this.default_key_size = parseInt(options.default_key_size, 10) || 1024,
            this.default_public_exponent = options.default_public_exponent || "010001",
            this.log = options.log || !1,
            this.key = null
    }

    return JSEncrypt.prototype.setKey = function (key) {
        this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new JSEncryptRSAKey(key)
    }
        ,
        JSEncrypt.prototype.setPublicKey = function (pubkey) {
            this.setKey(pubkey)
        }
        ,
        JSEncrypt.prototype.encrypt = function (str) {
            try {
                return hex2b64(this.getKey().encrypt(str))
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncrypt.prototype.getKey = function (cb) {
            if (!this.key) {
                if (this.key = new JSEncryptRSAKey,
                cb && "[object Function]" === {}.toString.call(cb))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }
        ,
        JSEncrypt.prototype.encryptLong = function (string) {
            var k = this.getKey()
                , maxLength = (k.n.bitLength() + 7 >> 3) - 11;
            try {
                var lt = ""
                    , ct = "";
                if (string.length > maxLength)
                    return lt = string.match(/.{1,50}/g),
                        lt.forEach(function (entry) {
                            var t1 = k.encrypt(entry);
                            ct += t1
                        }),
                        hex2b64(ct);
                return hex2b64(k.encrypt(string))
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncrypt
}();
window.JSEncrypt = JSEncrypt;

function encrypt_trace(trace) {
    var x = 'passport' + JSON.stringify(trace);
    var public_key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCj+WG/EdwJXcaINIlSyrHjeLmZsk7C9NnkqzrOJ2uYG7M2QSaLVygtlftSDQ8ccC3KsYaS9gnVPlWggJf9h49tDW/vCnlnYehcLwVDtmSGHON/wyZfmLgARbjHxcmxEifmLJAKf+Vg3zqwk05jRa9occxTY3HsPjVYdQWL83DTiQIDAQAB';
    window.JSEncrypt.prototype.setPublicKey(public_key);
    return window.JSEncrypt.prototype.encryptLong(x)
}

console.log(encrypt_trace({
    "data": ["11|0", "55|-2", "97|-2", "133|0", "153|1", "160|1", "160|1", "168|1", "177|1", "180|1", "180|2", "183|2", "183|2", "183|2", "183|2", "183|2"],
    "rdata": {"r1": "184|2"}
}));