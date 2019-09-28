var navigator = {};

var document = {
    documentElement: {
        clientWidth: 800,
        clientHeight: 600
    },
    referrer: "http://e.waimai.meituan.com/?defaultLogonType=1&epassport_addr=https://epassport.meituan.com"
};

var window = {
    innerWidth: 1920,
    innerHeight: 1080,
    location: {
        href: 'http://e.waimai.meituan.com/logon/error/1001'
    }
};

var screen = {
    width: 1920,
    height: 1080
};

function e(t) {
    return I.charAt(t)
}

function i(t, e) {
    return t & e
}

function n(t, e) {
    return t | e
}

function r(t, e) {
    return t ^ e
}

function o(t, e) {
    return t & ~e
}

function s(t) {
    if (0 == t)
        return -1;
    var e = 0;
    return 0 == (65535 & t) && (t >>= 16,
        e += 16),
    0 == (255 & t) && (t >>= 8,
        e += 8),
    0 == (15 & t) && (t >>= 4,
        e += 4),
    0 == (3 & t) && (t >>= 2,
        e += 2),
    0 == (1 & t) && ++e,
        e
}

function a(t) {
    for (var e = 0; 0 != t;)
        t &= t - 1,
            ++e;
    return e
}

function u(t) {
    var e, i, n = "";
    for (e = 0; e + 3 <= t.length; e += 3)
        i = parseInt(t.substring(e, e + 3), 16),
            n += N.charAt(i >> 6) + N.charAt(63 & i);
    for (e + 1 == t.length ? (i = parseInt(t.substring(e, e + 1), 16),
        n += N.charAt(i << 2)) : e + 2 == t.length && (i = parseInt(t.substring(e, e + 2), 16),
        n += N.charAt(i >> 2) + N.charAt((3 & i) << 4)); (3 & n.length) > 0;)
        n += B;
    return n
}

function c(t) {
    var i, n = "", r = 0, o = 0;
    for (i = 0; i < t.length && t.charAt(i) != B; ++i) {
        var s = N.indexOf(t.charAt(i));
        s < 0 || (0 == r ? (n += e(s >> 2),
            o = 3 & s,
            r = 1) : 1 == r ? (n += e(o << 2 | s >> 4),
            o = 15 & s,
            r = 2) : 2 == r ? (n += e(o),
            n += e(s >> 2),
            o = 3 & s,
            r = 3) : (n += e(o << 2 | s >> 4),
            n += e(15 & s),
            r = 0))
    }
    return 1 == r && (n += e(o << 2)),
        n
}

function h(t, e) {
    function i() {
        this.constructor = t
    }

    C(t, e),
        t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype,
            new i)
}

function l(t, e) {
    return t.length > e && (t = t.substring(0, e) + M),
        t
}

function f() {
    return new G(null)
}

function d(t, e) {
    return new G(t, e)
}

function p(t, e, i, n, r, o) {
    for (; --o >= 0;) {
        var s = e * this[t++] + i[n] + r;
        r = Math.floor(s / 67108864),
            i[n++] = 67108863 & s
    }
    return r
}

function g(t, e, i, n, r, o) {
    for (var s = 32767 & e, a = e >> 15; --o >= 0;) {
        var u = 32767 & this[t]
            , c = this[t++] >> 15
            , h = a * u + c * s;
        u = s * u + ((32767 & h) << 15) + i[n] + (1073741823 & r),
            r = (u >>> 30) + (h >>> 15) + a * c + (r >>> 30),
            i[n++] = 1073741823 & u
    }
    return r
}

function m(t, e, i, n, r, o) {
    for (var s = 16383 & e, a = e >> 14; --o >= 0;) {
        var u = 16383 & this[t]
            , c = this[t++] >> 14
            , h = a * u + c * s;
        u = s * u + ((16383 & h) << 14) + i[n] + r,
            r = (u >> 28) + (h >> 14) + a * c,
            i[n++] = 268435455 & u
    }
    return r
}

function v(t, e) {
    var i = it[t.charCodeAt(e)];
    return null == i ? -1 : i
}

function b(t) {
    var e = f();
    return e.fromInt(t),
        e
}

function y(t) {
    var e, i = 1;
    return 0 != (e = t >>> 16) && (t = e,
        i += 16),
    0 != (e = t >> 8) && (t = e,
        i += 8),
    0 != (e = t >> 4) && (t = e,
        i += 4),
    0 != (e = t >> 2) && (t = e,
        i += 2),
    0 != (e = t >> 1) && (t = e,
        i += 1),
        i
}

function w() {
    return new ot
}

function S() {
    if (null == nt) {
        for (nt = w(); rt < st;) {
            var t = Math.floor(65536 * Math.random());
            at[rt++] = 255 & t
        }
        for (nt.init(at),
                 rt = 0; rt < at.length; ++rt)
            at[rt] = 0;
        rt = 0
    }
    return nt.next()
}

function T(t, e) {
    if (e < t.length + 22)
        return console.error("Message too long for RSA"),
            null;
    for (var i = e - t.length - 6, n = "", r = 0; r < i; r += 2)
        n += "ff";
    return d("0001" + n + "00" + t, 16)
}

function E(t, e) {
    if (e < t.length + 11)
        return console.error("Message too long for RSA"),
            null;
    for (var i = [], n = t.length - 1; n >= 0 && e > 0;) {
        var r = t.charCodeAt(n--);
        r < 128 ? i[--e] = r : r > 127 && r < 2048 ? (i[--e] = 63 & r | 128,
            i[--e] = r >> 6 | 192) : (i[--e] = 63 & r | 128,
            i[--e] = r >> 6 & 63 | 128,
            i[--e] = r >> 12 | 224)
    }
    i[--e] = 0;
    for (var o = new lt, s = []; e > 2;) {
        for (s[0] = 0; 0 == s[0];)
            o.nextBytes(s);
        i[--e] = s[0]
    }
    return i[--e] = 2,
        i[--e] = 0,
        new G(i)
}

function x(t, e) {
    for (var i = t.toByteArray(), n = 0; n < i.length && 0 == i[n];)
        ++n;
    if (i.length - n != e - 1 || 2 != i[n])
        return null;
    for (++n; 0 != i[n];)
        if (++n >= i.length)
            return null;
    for (var r = ""; ++n < i.length;) {
        var o = 255 & i[n];
        o < 128 ? r += String.fromCharCode(o) : o > 191 && o < 224 ? (r += String.fromCharCode((31 & o) << 6 | 63 & i[n + 1]),
            ++n) : (r += String.fromCharCode((15 & o) << 12 | (63 & i[n + 1]) << 6 | 63 & i[n + 2]),
            n += 2)
    }
    return r
}

function D(t) {
    return dt[t] || ""
}

function A(t) {
    for (var e in dt)
        if (dt.hasOwnProperty(e)) {
            var i = dt[e]
                , n = i.length;
            if (t.substr(0, n) == i)
                return t.substr(n)
        }
    return t
}

var O, R, k, I = "0123456789abcdefghijklmnopqrstuvwxyz",
    N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", B = "=", C = function (t, e) {
        return (C = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (t, e) {
                    t.__proto__ = e
                }
                || function (t, e) {
                    for (var i in e)
                        e.hasOwnProperty(i) && (t[i] = e[i])
                }
        )(t, e)
    }, j = {
        decode: function (t) {
            var e;
            if (O === undefined) {
                var i = "0123456789ABCDEF"
                    , n = " \f\n\r\t \u2028\u2029";
                for (O = {},
                         e = 0; e < 16; ++e)
                    O[i.charAt(e)] = e;
                for (i = i.toLowerCase(),
                         e = 10; e < 16; ++e)
                    O[i.charAt(e)] = e;
                for (e = 0; e < n.length; ++e)
                    O[n.charAt(e)] = -1
            }
            var r = []
                , o = 0
                , s = 0;
            for (e = 0; e < t.length; ++e) {
                var a = t.charAt(e);
                if ("=" == a)
                    break;
                if (-1 != (a = O[a])) {
                    if (a === undefined)
                        throw new Error("Illegal character at offset " + e);
                    o |= a,
                        ++s >= 2 ? (r[r.length] = o,
                            o = 0,
                            s = 0) : o <<= 4
                }
            }
            if (s)
                throw new Error("Hex encoding incomplete: 4 bits missing");
            return r
        }
    }, $ = {
        decode: function (t) {
            var e;
            if (R === undefined) {
                var i = "= \f\n\r\t \u2028\u2029";
                for (R = Object.create(null),
                         e = 0; e < 64; ++e)
                    R["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                for (e = 0; e < i.length; ++e)
                    R[i.charAt(e)] = -1
            }
            var n = []
                , r = 0
                , o = 0;
            for (e = 0; e < t.length; ++e) {
                var s = t.charAt(e);
                if ("=" == s)
                    break;
                if (-1 != (s = R[s])) {
                    if (s === undefined)
                        throw new Error("Illegal character at offset " + e);
                    r |= s,
                        ++o >= 4 ? (n[n.length] = r >> 16,
                            n[n.length] = r >> 8 & 255,
                            n[n.length] = 255 & r,
                            r = 0,
                            o = 0) : r <<= 6
                }
            }
            switch (o) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    n[n.length] = r >> 10;
                    break;
                case 3:
                    n[n.length] = r >> 16,
                        n[n.length] = r >> 8 & 255
            }
            return n
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function (t) {
            var e = $.re.exec(t);
            if (e)
                if (e[1])
                    t = e[1];
                else {
                    if (!e[2])
                        throw new Error("RegExp out of sync");
                    t = e[2]
                }
            return $.decode(t)
        }
    }, V = 1e13, _ = function () {
        function t(t) {
            this.buf = [+t || 0]
        }

        return t.prototype.mulAdd = function (t, e) {
            var i, n, r = this.buf, o = r.length;
            for (i = 0; i < o; ++i)
                n = r[i] * t + e,
                    n < V ? e = 0 : (e = 0 | n / V,
                        n -= e * V),
                    r[i] = n;
            e > 0 && (r[i] = e)
        }
            ,
            t.prototype.sub = function (t) {
                var e, i, n = this.buf, r = n.length;
                for (e = 0; e < r; ++e)
                    i = n[e] - t,
                        i < 0 ? (i += V,
                            t = 1) : t = 0,
                        n[e] = i;
                for (; 0 === n[n.length - 1];)
                    n.pop()
            }
            ,
            t.prototype.toString = function (t) {
                if (10 != (t || 10))
                    throw new Error("only base 10 is supported");
                for (var e = this.buf, i = e[e.length - 1].toString(), n = e.length - 2; n >= 0; --n)
                    i += (V + e[n]).toString().substring(1);
                return i
            }
            ,
            t.prototype.valueOf = function () {
                for (var t = this.buf, e = 0, i = t.length - 1; i >= 0; --i)
                    e = e * V + t[i];
                return e
            }
            ,
            t.prototype.simplify = function () {
                var t = this.buf;
                return 1 == t.length ? t[0] : this
            }
            ,
            t
    }(), M = "…",
    P = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
    F = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
    L = function () {
        function t(e, i) {
            this.hexDigits = "0123456789ABCDEF",
                e instanceof t ? (this.enc = e.enc,
                    this.pos = e.pos) : (this.enc = e,
                    this.pos = i)
        }

        return t.prototype.get = function (t) {
            if (t === undefined && (t = this.pos++),
            t >= this.enc.length)
                throw new Error("Requesting byte offset " + t + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(t) : this.enc[t]
        }
            ,
            t.prototype.hexByte = function (t) {
                return this.hexDigits.charAt(t >> 4 & 15) + this.hexDigits.charAt(15 & t)
            }
            ,
            t.prototype.hexDump = function (t, e, i) {
                for (var n = "", r = t; r < e; ++r)
                    if (n += this.hexByte(this.get(r)),
                    !0 !== i)
                        switch (15 & r) {
                            case 7:
                                n += "  ";
                                break;
                            case 15:
                                n += "\n";
                                break;
                            default:
                                n += " "
                        }
                return n
            }
            ,
            t.prototype.isASCII = function (t, e) {
                for (var i = t; i < e; ++i) {
                    var n = this.get(i);
                    if (n < 32 || n > 176)
                        return !1
                }
                return !0
            }
            ,
            t.prototype.parseStringISO = function (t, e) {
                for (var i = "", n = t; n < e; ++n)
                    i += String.fromCharCode(this.get(n));
                return i
            }
            ,
            t.prototype.parseStringUTF = function (t, e) {
                for (var i = "", n = t; n < e;) {
                    var r = this.get(n++);
                    i += r < 128 ? String.fromCharCode(r) : r > 191 && r < 224 ? String.fromCharCode((31 & r) << 6 | 63 & this.get(n++)) : String.fromCharCode((15 & r) << 12 | (63 & this.get(n++)) << 6 | 63 & this.get(n++))
                }
                return i
            }
            ,
            t.prototype.parseStringBMP = function (t, e) {
                for (var i, n, r = "", o = t; o < e;)
                    i = this.get(o++),
                        n = this.get(o++),
                        r += String.fromCharCode(i << 8 | n);
                return r
            }
            ,
            t.prototype.parseTime = function (t, e, i) {
                var n = this.parseStringISO(t, e)
                    , r = (i ? P : F).exec(n);
                return r ? (i && (r[1] = +r[1],
                    r[1] += +r[1] < 70 ? 2e3 : 1900),
                    n = r[1] + "-" + r[2] + "-" + r[3] + " " + r[4],
                r[5] && (n += ":" + r[5],
                r[6] && (n += ":" + r[6],
                r[7] && (n += "." + r[7]))),
                r[8] && (n += " UTC",
                "Z" != r[8] && (n += r[8],
                r[9] && (n += ":" + r[9]))),
                    n) : "Unrecognized time: " + n
            }
            ,
            t.prototype.parseInteger = function (t, e) {
                for (var i, n = this.get(t), r = n > 127, o = r ? 255 : 0, s = ""; n == o && ++t < e;)
                    n = this.get(t);
                if (0 === (i = e - t))
                    return r ? -1 : 0;
                if (i > 4) {
                    for (s = n,
                             i <<= 3; 0 == (128 & (+s ^ o));)
                        s = +s << 1,
                            --i;
                    s = "(" + i + " bit)\n"
                }
                r && (n -= 256);
                for (var a = new _(n), u = t + 1; u < e; ++u)
                    a.mulAdd(256, this.get(u));
                return s + a.toString()
            }
            ,
            t.prototype.parseBitString = function (t, e, i) {
                for (var n = this.get(t), r = (e - t - 1 << 3) - n, o = "(" + r + " bit)\n", s = "", a = t + 1; a < e; ++a) {
                    for (var u = this.get(a), c = a == e - 1 ? n : 0, h = 7; h >= c; --h)
                        s += u >> h & 1 ? "1" : "0";
                    if (s.length > i)
                        return o + l(s, i)
                }
                return o + s
            }
            ,
            t.prototype.parseOctetString = function (t, e, i) {
                if (this.isASCII(t, e))
                    return l(this.parseStringISO(t, e), i);
                var n = e - t
                    , r = "(" + n + " byte)\n";
                i /= 2,
                n > i && (e = t + i);
                for (var o = t; o < e; ++o)
                    r += this.hexByte(this.get(o));
                return n > i && (r += M),
                    r
            }
            ,
            t.prototype.parseOID = function (t, e, i) {
                for (var n = "", r = new _, o = 0, s = t; s < e; ++s) {
                    var a = this.get(s);
                    if (r.mulAdd(128, 127 & a),
                        o += 7,
                        !(128 & a)) {
                        if ("" === n)
                            if ((r = r.simplify()) instanceof _)
                                r.sub(80),
                                    n = "2." + r.toString();
                            else {
                                var u = r < 80 ? r < 40 ? 0 : 1 : 2;
                                n = u + "." + (r - 40 * u)
                            }
                        else
                            n += "." + r.toString();
                        if (n.length > i)
                            return l(n, i);
                        r = new _,
                            o = 0
                    }
                }
                return o > 0 && (n += ".incomplete"),
                    n
            }
            ,
            t
    }(), U = function () {
        function t(t, e, i, n, r) {
            if (!(n instanceof q))
                throw new Error("Invalid tag value.");
            this.stream = t,
                this.header = e,
                this.length = i,
                this.tag = n,
                this.sub = r
        }

        return t.prototype.typeName = function () {
            switch (this.tag.tagClass) {
                case 0:
                    switch (this.tag.tagNumber) {
                        case 0:
                            return "EOC";
                        case 1:
                            return "BOOLEAN";
                        case 2:
                            return "INTEGER";
                        case 3:
                            return "BIT_STRING";
                        case 4:
                            return "OCTET_STRING";
                        case 5:
                            return "NULL";
                        case 6:
                            return "OBJECT_IDENTIFIER";
                        case 7:
                            return "ObjectDescriptor";
                        case 8:
                            return "EXTERNAL";
                        case 9:
                            return "REAL";
                        case 10:
                            return "ENUMERATED";
                        case 11:
                            return "EMBEDDED_PDV";
                        case 12:
                            return "UTF8String";
                        case 16:
                            return "SEQUENCE";
                        case 17:
                            return "SET";
                        case 18:
                            return "NumericString";
                        case 19:
                            return "PrintableString";
                        case 20:
                            return "TeletexString";
                        case 21:
                            return "VideotexString";
                        case 22:
                            return "IA5String";
                        case 23:
                            return "UTCTime";
                        case 24:
                            return "GeneralizedTime";
                        case 25:
                            return "GraphicString";
                        case 26:
                            return "VisibleString";
                        case 27:
                            return "GeneralString";
                        case 28:
                            return "UniversalString";
                        case 30:
                            return "BMPString"
                    }
                    return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                    return "Application_" + this.tag.tagNumber.toString();
                case 2:
                    return "[" + this.tag.tagNumber.toString() + "]";
                case 3:
                    return "Private_" + this.tag.tagNumber.toString()
            }
        }
            ,
            t.prototype.content = function (t) {
                if (this.tag === undefined)
                    return null;
                t === undefined && (t = Infinity);
                var e = this.posContent()
                    , i = Math.abs(this.length);
                if (!this.tag.isUniversal())
                    return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(e) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(e, e + i);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(e, e + i, t);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(e, e + i, t);
                    case 6:
                        return this.stream.parseOID(e, e + i, t);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return l(this.stream.parseStringUTF(e, e + i), t);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return l(this.stream.parseStringISO(e, e + i), t);
                    case 30:
                        return l(this.stream.parseStringBMP(e, e + i), t);
                    case 23:
                    case 24:
                        return this.stream.parseTime(e, e + i, 23 == this.tag.tagNumber)
                }
                return null
            }
            ,
            t.prototype.toString = function () {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            }
            ,
            t.prototype.toPrettyString = function (t) {
                t === undefined && (t = "");
                var e = t + this.typeName() + " @" + this.stream.pos;
                if (this.length >= 0 && (e += "+"),
                    e += this.length,
                    this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)"),
                    e += "\n",
                null !== this.sub) {
                    t += "  ";
                    for (var i = 0, n = this.sub.length; i < n; ++i)
                        e += this.sub[i].toPrettyString(t)
                }
                return e
            }
            ,
            t.prototype.posStart = function () {
                return this.stream.pos
            }
            ,
            t.prototype.posContent = function () {
                return this.stream.pos + this.header
            }
            ,
            t.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length)
            }
            ,
            t.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            }
            ,
            t.decodeLength = function (t) {
                var e = t.get()
                    , i = 127 & e;
                if (i == e)
                    return i;
                if (i > 6)
                    throw new Error("Length over 48 bits not supported at position " + (t.pos - 1));
                if (0 === i)
                    return null;
                e = 0;
                for (var n = 0; n < i; ++n)
                    e = 256 * e + t.get();
                return e
            }
            ,
            t.prototype.getHexStringValue = function () {
                var t = this.toHexString()
                    , e = 2 * this.header
                    , i = 2 * this.length;
                return t.substr(e, i)
            }
            ,
            t.decode = function (e) {
                var i;
                i = e instanceof L ? e : new L(e, 0);
                var n = new L(i)
                    , r = new q(i)
                    , o = t.decodeLength(i)
                    , s = i.pos
                    , a = s - n.pos
                    , u = null
                    , c = function () {
                    var e = [];
                    if (null !== o) {
                        for (var n = s + o; i.pos < n;)
                            e[e.length] = t.decode(i);
                        if (i.pos != n)
                            throw new Error("Content size is not correct for container starting at offset " + s)
                    } else
                        try {
                            for (; ;) {
                                var r = t.decode(i);
                                if (r.tag.isEOC())
                                    break;
                                e[e.length] = r
                            }
                            o = s - i.pos
                        } catch (a) {
                            throw new Error("Exception while decoding undefined length content: " + a)
                        }
                    return e
                };
                if (r.tagConstructed)
                    u = c();
                else if (r.isUniversal() && (3 == r.tagNumber || 4 == r.tagNumber))
                    try {
                        if (3 == r.tagNumber && 0 != i.get())
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        u = c();
                        for (var h = 0; h < u.length; ++h)
                            if (u[h].tag.isEOC())
                                throw new Error("EOC is not supposed to be actual content.")
                    } catch (l) {
                        u = null
                    }
                if (null === u) {
                    if (null === o)
                        throw new Error("We can't skip over an invalid tag with undefined length at offset " + s);
                    i.pos = s + Math.abs(o)
                }
                return new t(n, a, o, r, u)
            }
            ,
            t
    }(), q = function () {
        function t(t) {
            var e = t.get();
            if (this.tagClass = e >> 6,
                this.tagConstructed = 0 != (32 & e),
                this.tagNumber = 31 & e,
            31 == this.tagNumber) {
                var i = new _;
                do {
                    e = t.get(),
                        i.mulAdd(128, 127 & e)
                } while (128 & e);
                this.tagNumber = i.simplify()
            }
        }

        return t.prototype.isUniversal = function () {
            return 0 === this.tagClass
        }
            ,
            t.prototype.isEOC = function () {
                return 0 === this.tagClass && 0 === this.tagNumber
            }
            ,
            t
    }(), H = 0xdeadbeefcafe, K = 15715070 == (16777215 & H),
    z = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
    J = (1 << 26) / z[z.length - 1], G = function () {
        function t(t, e, i) {
            null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
        }

        return t.prototype.toString = function (t) {
            if (this.s < 0)
                return "-" + this.negate().toString(t);
            var i;
            if (16 == t)
                i = 4;
            else if (8 == t)
                i = 3;
            else if (2 == t)
                i = 1;
            else if (32 == t)
                i = 5;
            else {
                if (4 != t)
                    return this.toRadix(t);
                i = 2
            }
            var n, r = (1 << i) - 1, o = !1, s = "", a = this.t, u = this.DB - a * this.DB % i;
            if (a-- > 0)
                for (u < this.DB && (n = this[a] >> u) > 0 && (o = !0,
                    s = e(n)); a >= 0;)
                    u < i ? (n = (this[a] & (1 << u) - 1) << i - u,
                        n |= this[--a] >> (u += this.DB - i)) : (n = this[a] >> (u -= i) & r,
                    u <= 0 && (u += this.DB,
                        --a)),
                    n > 0 && (o = !0),
                    o && (s += e(n));
            return o ? s : "0"
        }
            ,
            t.prototype.negate = function () {
                var e = f();
                return t.ZERO.subTo(this, e),
                    e
            }
            ,
            t.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this
            }
            ,
            t.prototype.compareTo = function (t) {
                var e = this.s - t.s;
                if (0 != e)
                    return e;
                var i = this.t;
                if (0 != (e = i - t.t))
                    return this.s < 0 ? -e : e;
                for (; --i >= 0;)
                    if (0 != (e = this[i] - t[i]))
                        return e;
                return 0
            }
            ,
            t.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM)
            }
            ,
            t.prototype.mod = function (e) {
                var i = f();
                return this.abs().divRemTo(e, null, i),
                this.s < 0 && i.compareTo(t.ZERO) > 0 && e.subTo(i, i),
                    i
            }
            ,
            t.prototype.modPowInt = function (t, e) {
                var i;
                return i = t < 256 || e.isEven() ? new W(e) : new Y(e),
                    this.exp(t, i)
            }
            ,
            t.prototype.clone = function () {
                var t = f();
                return this.copyTo(t),
                    t
            }
            ,
            t.prototype.intValue = function () {
                if (this.s < 0) {
                    if (1 == this.t)
                        return this[0] - this.DV;
                    if (0 == this.t)
                        return -1
                } else {
                    if (1 == this.t)
                        return this[0];
                    if (0 == this.t)
                        return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }
            ,
            t.prototype.byteValue = function () {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }
            ,
            t.prototype.shortValue = function () {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }
            ,
            t.prototype.signum = function () {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }
            ,
            t.prototype.toByteArray = function () {
                var t = this.t
                    , e = [];
                e[0] = this.s;
                var i, n = this.DB - t * this.DB % 8, r = 0;
                if (t-- > 0)
                    for (n < this.DB && (i = this[t] >> n) != (this.s & this.DM) >> n && (e[r++] = i | this.s << this.DB - n); t >= 0;)
                        n < 8 ? (i = (this[t] & (1 << n) - 1) << 8 - n,
                            i |= this[--t] >> (n += this.DB - 8)) : (i = this[t] >> (n -= 8) & 255,
                        n <= 0 && (n += this.DB,
                            --t)),
                        0 != (128 & i) && (i |= -256),
                        0 == r && (128 & this.s) != (128 & i) && ++r,
                        (r > 0 || i != this.s) && (e[r++] = i);
                return e
            }
            ,
            t.prototype.equals = function (t) {
                return 0 == this.compareTo(t)
            }
            ,
            t.prototype.min = function (t) {
                return this.compareTo(t) < 0 ? this : t
            }
            ,
            t.prototype.max = function (t) {
                return this.compareTo(t) > 0 ? this : t
            }
            ,
            t.prototype.and = function (t) {
                var e = f();
                return this.bitwiseTo(t, i, e),
                    e
            }
            ,
            t.prototype.or = function (t) {
                var e = f();
                return this.bitwiseTo(t, n, e),
                    e
            }
            ,
            t.prototype.xor = function (t) {
                var e = f();
                return this.bitwiseTo(t, r, e),
                    e
            }
            ,
            t.prototype.andNot = function (t) {
                var e = f();
                return this.bitwiseTo(t, o, e),
                    e
            }
            ,
            t.prototype.not = function () {
                for (var t = f(), e = 0; e < this.t; ++e)
                    t[e] = this.DM & ~this[e];
                return t.t = this.t,
                    t.s = ~this.s,
                    t
            }
            ,
            t.prototype.shiftLeft = function (t) {
                var e = f();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e),
                    e
            }
            ,
            t.prototype.shiftRight = function (t) {
                var e = f();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e),
                    e
            }
            ,
            t.prototype.getLowestSetBit = function () {
                for (var t = 0; t < this.t; ++t)
                    if (0 != this[t])
                        return t * this.DB + s(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }
            ,
            t.prototype.bitCount = function () {
                for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i)
                    t += a(this[i] ^ e);
                return t
            }
            ,
            t.prototype.testBit = function (t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }
            ,
            t.prototype.setBit = function (t) {
                return this.changeBit(t, n)
            }
            ,
            t.prototype.clearBit = function (t) {
                return this.changeBit(t, o)
            }
            ,
            t.prototype.flipBit = function (t) {
                return this.changeBit(t, r)
            }
            ,
            t.prototype.add = function (t) {
                var e = f();
                return this.addTo(t, e),
                    e
            }
            ,
            t.prototype.subtract = function (t) {
                var e = f();
                return this.subTo(t, e),
                    e
            }
            ,
            t.prototype.multiply = function (t) {
                var e = f();
                return this.multiplyTo(t, e),
                    e
            }
            ,
            t.prototype.divide = function (t) {
                var e = f();
                return this.divRemTo(t, e, null),
                    e
            }
            ,
            t.prototype.remainder = function (t) {
                var e = f();
                return this.divRemTo(t, null, e),
                    e
            }
            ,
            t.prototype.divideAndRemainder = function (t) {
                var e = f()
                    , i = f();
                return this.divRemTo(t, e, i),
                    [e, i]
            }
            ,
            t.prototype.modPow = function (t, e) {
                var i, n, r = t.bitLength(), o = b(1);
                if (r <= 0)
                    return o;
                i = r < 18 ? 1 : r < 48 ? 3 : r < 144 ? 4 : r < 768 ? 5 : 6,
                    n = r < 8 ? new W(e) : e.isEven() ? new X(e) : new Y(e);
                var s = []
                    , a = 3
                    , u = i - 1
                    , c = (1 << i) - 1;
                if (s[1] = n.convert(this),
                i > 1) {
                    var h = f();
                    for (n.sqrTo(s[1], h); a <= c;)
                        s[a] = f(),
                            n.mulTo(h, s[a - 2], s[a]),
                            a += 2
                }
                var l, d, p = t.t - 1, g = !0, m = f();
                for (r = y(t[p]) - 1; p >= 0;) {
                    for (r >= u ? l = t[p] >> r - u & c : (l = (t[p] & (1 << r + 1) - 1) << u - r,
                    p > 0 && (l |= t[p - 1] >> this.DB + r - u)),
                             a = i; 0 == (1 & l);)
                        l >>= 1,
                            --a;
                    if ((r -= a) < 0 && (r += this.DB,
                        --p),
                        g)
                        s[l].copyTo(o),
                            g = !1;
                    else {
                        for (; a > 1;)
                            n.sqrTo(o, m),
                                n.sqrTo(m, o),
                                a -= 2;
                        a > 0 ? n.sqrTo(o, m) : (d = o,
                            o = m,
                            m = d),
                            n.mulTo(m, s[l], o)
                    }
                    for (; p >= 0 && 0 == (t[p] & 1 << r);)
                        n.sqrTo(o, m),
                            d = o,
                            o = m,
                            m = d,
                        --r < 0 && (r = this.DB - 1,
                            --p)
                }
                return n.revert(o)
            }
            ,
            t.prototype.modInverse = function (e) {
                var i = e.isEven();
                if (this.isEven() && i || 0 == e.signum())
                    return t.ZERO;
                for (var n = e.clone(), r = this.clone(), o = b(1), s = b(0), a = b(0), u = b(1); 0 != n.signum();) {
                    for (; n.isEven();)
                        n.rShiftTo(1, n),
                            i ? (o.isEven() && s.isEven() || (o.addTo(this, o),
                                s.subTo(e, s)),
                                o.rShiftTo(1, o)) : s.isEven() || s.subTo(e, s),
                            s.rShiftTo(1, s);
                    for (; r.isEven();)
                        r.rShiftTo(1, r),
                            i ? (a.isEven() && u.isEven() || (a.addTo(this, a),
                                u.subTo(e, u)),
                                a.rShiftTo(1, a)) : u.isEven() || u.subTo(e, u),
                            u.rShiftTo(1, u);
                    n.compareTo(r) >= 0 ? (n.subTo(r, n),
                    i && o.subTo(a, o),
                        s.subTo(u, s)) : (r.subTo(n, r),
                    i && a.subTo(o, a),
                        u.subTo(s, u))
                }
                return 0 != r.compareTo(t.ONE) ? t.ZERO : u.compareTo(e) >= 0 ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u),
                    u.signum() < 0 ? u.add(e) : u) : u
            }
            ,
            t.prototype.pow = function (t) {
                return this.exp(t, new Z)
            }
            ,
            t.prototype.gcd = function (t) {
                var e = this.s < 0 ? this.negate() : this.clone()
                    , i = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(i) < 0) {
                    var n = e;
                    e = i,
                        i = n
                }
                var r = e.getLowestSetBit()
                    , o = i.getLowestSetBit();
                if (o < 0)
                    return e;
                for (r < o && (o = r),
                     o > 0 && (e.rShiftTo(o, e),
                         i.rShiftTo(o, i)); e.signum() > 0;)
                    (r = e.getLowestSetBit()) > 0 && e.rShiftTo(r, e),
                    (r = i.getLowestSetBit()) > 0 && i.rShiftTo(r, i),
                        e.compareTo(i) >= 0 ? (e.subTo(i, e),
                            e.rShiftTo(1, e)) : (i.subTo(e, i),
                            i.rShiftTo(1, i));
                return o > 0 && i.lShiftTo(o, i),
                    i
            }
            ,
            t.prototype.isProbablePrime = function (t) {
                var e, i = this.abs();
                if (1 == i.t && i[0] <= z[z.length - 1]) {
                    for (e = 0; e < z.length; ++e)
                        if (i[0] == z[e])
                            return !0;
                    return !1
                }
                if (i.isEven())
                    return !1;
                for (e = 1; e < z.length;) {
                    for (var n = z[e], r = e + 1; r < z.length && n < J;)
                        n *= z[r++];
                    for (n = i.modInt(n); e < r;)
                        if (n % z[e++] == 0)
                            return !1
                }
                return i.millerRabin(t)
            }
            ,
            t.prototype.copyTo = function (t) {
                for (var e = this.t - 1; e >= 0; --e)
                    t[e] = this[e];
                t.t = this.t,
                    t.s = this.s
            }
            ,
            t.prototype.fromInt = function (t) {
                this.t = 1,
                    this.s = t < 0 ? -1 : 0,
                    t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }
            ,
            t.prototype.fromString = function (e, i) {
                var n;
                if (16 == i)
                    n = 4;
                else if (8 == i)
                    n = 3;
                else if (256 == i)
                    n = 8;
                else if (2 == i)
                    n = 1;
                else if (32 == i)
                    n = 5;
                else {
                    if (4 != i)
                        return void this.fromRadix(e, i);
                    n = 2
                }
                this.t = 0,
                    this.s = 0;
                for (var r = e.length, o = !1, s = 0; --r >= 0;) {
                    var a = 8 == n ? 255 & +e[r] : v(e, r);
                    a < 0 ? "-" == e.charAt(r) && (o = !0) : (o = !1,
                        0 == s ? this[this.t++] = a : s + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s,
                            this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s,
                    (s += n) >= this.DB && (s -= this.DB))
                }
                8 == n && 0 != (128 & +e[0]) && (this.s = -1,
                s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)),
                    this.clamp(),
                o && t.ZERO.subTo(this, this)
            }
            ,
            t.prototype.clamp = function () {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
                    --this.t
            }
            ,
            t.prototype.dlShiftTo = function (t, e) {
                var i;
                for (i = this.t - 1; i >= 0; --i)
                    e[i + t] = this[i];
                for (i = t - 1; i >= 0; --i)
                    e[i] = 0;
                e.t = this.t + t,
                    e.s = this.s
            }
            ,
            t.prototype.drShiftTo = function (t, e) {
                for (var i = t; i < this.t; ++i)
                    e[i - t] = this[i];
                e.t = Math.max(this.t - t, 0),
                    e.s = this.s
            }
            ,
            t.prototype.lShiftTo = function (t, e) {
                for (var i = t % this.DB, n = this.DB - i, r = (1 << n) - 1, o = Math.floor(t / this.DB), s = this.s << i & this.DM, a = this.t - 1; a >= 0; --a)
                    e[a + o + 1] = this[a] >> n | s,
                        s = (this[a] & r) << i;
                for (var a = o - 1; a >= 0; --a)
                    e[a] = 0;
                e[o] = s,
                    e.t = this.t + o + 1,
                    e.s = this.s,
                    e.clamp()
            }
            ,
            t.prototype.rShiftTo = function (t, e) {
                e.s = this.s;
                var i = Math.floor(t / this.DB);
                if (i >= this.t)
                    return void (e.t = 0);
                var n = t % this.DB
                    , r = this.DB - n
                    , o = (1 << n) - 1;
                e[0] = this[i] >> n;
                for (var s = i + 1; s < this.t; ++s)
                    e[s - i - 1] |= (this[s] & o) << r,
                        e[s - i] = this[s] >> n;
                n > 0 && (e[this.t - i - 1] |= (this.s & o) << r),
                    e.t = this.t - i,
                    e.clamp()
            }
            ,
            t.prototype.subTo = function (t, e) {
                for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r;)
                    n += this[i] - t[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                if (t.t < this.t) {
                    for (n -= t.s; i < this.t;)
                        n += this[i],
                            e[i++] = n & this.DM,
                            n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; i < t.t;)
                        n -= t[i],
                            e[i++] = n & this.DM,
                            n >>= this.DB;
                    n -= t.s
                }
                e.s = n < 0 ? -1 : 0,
                    n < -1 ? e[i++] = this.DV + n : n > 0 && (e[i++] = n),
                    e.t = i,
                    e.clamp()
            }
            ,
            t.prototype.multiplyTo = function (e, i) {
                var n = this.abs()
                    , r = e.abs()
                    , o = n.t;
                for (i.t = o + r.t; --o >= 0;)
                    i[o] = 0;
                for (o = 0; o < r.t; ++o)
                    i[o + n.t] = n.am(0, r[o], i, o, 0, n.t);
                i.s = 0,
                    i.clamp(),
                this.s != e.s && t.ZERO.subTo(i, i)
            }
            ,
            t.prototype.squareTo = function (t) {
                for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;)
                    t[i] = 0;
                for (i = 0; i < e.t - 1; ++i) {
                    var n = e.am(i, e[i], t, 2 * i, 0, 1);
                    (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, n, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV,
                        t[i + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)),
                    t.s = 0,
                    t.clamp()
            }
            ,
            t.prototype.divRemTo = function (e, i, n) {
                var r = e.abs();
                if (!(r.t <= 0)) {
                    var o = this.abs();
                    if (o.t < r.t)
                        return null != i && i.fromInt(0),
                            void (null != n && this.copyTo(n));
                    null == n && (n = f());
                    var s = f()
                        , a = this.s
                        , u = e.s
                        , c = this.DB - y(r[r.t - 1]);
                    c > 0 ? (r.lShiftTo(c, s),
                        o.lShiftTo(c, n)) : (r.copyTo(s),
                        o.copyTo(n));
                    var h = s.t
                        , l = s[h - 1];
                    if (0 != l) {
                        var d = l * (1 << this.F1) + (h > 1 ? s[h - 2] >> this.F2 : 0)
                            , p = this.FV / d
                            , g = (1 << this.F1) / d
                            , m = 1 << this.F2
                            , v = n.t
                            , b = v - h
                            , w = null == i ? f() : i;
                        for (s.dlShiftTo(b, w),
                             n.compareTo(w) >= 0 && (n[n.t++] = 1,
                                 n.subTo(w, n)),
                                 t.ONE.dlShiftTo(h, w),
                                 w.subTo(s, s); s.t < h;)
                            s[s.t++] = 0;
                        for (; --b >= 0;) {
                            var S = n[--v] == l ? this.DM : Math.floor(n[v] * p + (n[v - 1] + m) * g);
                            if ((n[v] += s.am(0, S, n, b, 0, h)) < S)
                                for (s.dlShiftTo(b, w),
                                         n.subTo(w, n); n[v] < --S;)
                                    n.subTo(w, n)
                        }
                        null != i && (n.drShiftTo(h, i),
                        a != u && t.ZERO.subTo(i, i)),
                            n.t = h,
                            n.clamp(),
                        c > 0 && n.rShiftTo(c, n),
                        a < 0 && t.ZERO.subTo(n, n)
                    }
                }
            }
            ,
            t.prototype.invDigit = function () {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var e = 3 & t;
                return e = e * (2 - (15 & t) * e) & 15,
                    e = e * (2 - (255 & t) * e) & 255,
                    e = e * (2 - ((65535 & t) * e & 65535)) & 65535,
                    e = e * (2 - t * e % this.DV) % this.DV,
                    e > 0 ? this.DV - e : -e
            }
            ,
            t.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }
            ,
            t.prototype.exp = function (e, i) {
                if (e > 4294967295 || e < 1)
                    return t.ONE;
                var n = f()
                    , r = f()
                    , o = i.convert(this)
                    , s = y(e) - 1;
                for (o.copyTo(n); --s >= 0;)
                    if (i.sqrTo(n, r),
                    (e & 1 << s) > 0)
                        i.mulTo(r, o, n);
                    else {
                        var a = n;
                        n = r,
                            r = a
                    }
                return i.revert(n)
            }
            ,
            t.prototype.chunkSize = function (t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }
            ,
            t.prototype.toRadix = function (t) {
                if (null == t && (t = 10),
                0 == this.signum() || t < 2 || t > 36)
                    return "0";
                var e = this.chunkSize(t)
                    , i = Math.pow(t, e)
                    , n = b(i)
                    , r = f()
                    , o = f()
                    , s = "";
                for (this.divRemTo(n, r, o); r.signum() > 0;)
                    s = (i + o.intValue()).toString(t).substr(1) + s,
                        r.divRemTo(n, r, o);
                return o.intValue().toString(t) + s
            }
            ,
            t.prototype.fromRadix = function (e, i) {
                this.fromInt(0),
                null == i && (i = 10);
                for (var n = this.chunkSize(i), r = Math.pow(i, n), o = !1, s = 0, a = 0, u = 0; u < e.length; ++u) {
                    var c = v(e, u);
                    c < 0 ? "-" == e.charAt(u) && 0 == this.signum() && (o = !0) : (a = i * a + c,
                    ++s >= n && (this.dMultiply(r),
                        this.dAddOffset(a, 0),
                        s = 0,
                        a = 0))
                }
                s > 0 && (this.dMultiply(Math.pow(i, s)),
                    this.dAddOffset(a, 0)),
                o && t.ZERO.subTo(this, this)
            }
            ,
            t.prototype.fromNumber = function (e, i, r) {
                if ("number" == typeof i)
                    if (e < 2)
                        this.fromInt(1);
                    else
                        for (this.fromNumber(e, r),
                             this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), n, this),
                             this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(i);)
                            this.dAddOffset(2, 0),
                            this.bitLength() > e && this.subTo(t.ONE.shiftLeft(e - 1), this);
                else {
                    var o = []
                        , s = 7 & e;
                    o.length = 1 + (e >> 3),
                        i.nextBytes(o),
                        s > 0 ? o[0] &= (1 << s) - 1 : o[0] = 0,
                        this.fromString(o, 256)
                }
            }
            ,
            t.prototype.bitwiseTo = function (t, e, i) {
                var n, r, o = Math.min(t.t, this.t);
                for (n = 0; n < o; ++n)
                    i[n] = e(this[n], t[n]);
                if (t.t < this.t) {
                    for (r = t.s & this.DM,
                             n = o; n < this.t; ++n)
                        i[n] = e(this[n], r);
                    i.t = this.t
                } else {
                    for (r = this.s & this.DM,
                             n = o; n < t.t; ++n)
                        i[n] = e(r, t[n]);
                    i.t = t.t
                }
                i.s = e(this.s, t.s),
                    i.clamp()
            }
            ,
            t.prototype.changeBit = function (e, i) {
                var n = t.ONE.shiftLeft(e);
                return this.bitwiseTo(n, i, n),
                    n
            }
            ,
            t.prototype.addTo = function (t, e) {
                for (var i = 0, n = 0, r = Math.min(t.t, this.t); i < r;)
                    n += this[i] + t[i],
                        e[i++] = n & this.DM,
                        n >>= this.DB;
                if (t.t < this.t) {
                    for (n += t.s; i < this.t;)
                        n += this[i],
                            e[i++] = n & this.DM,
                            n >>= this.DB;
                    n += this.s
                } else {
                    for (n += this.s; i < t.t;)
                        n += t[i],
                            e[i++] = n & this.DM,
                            n >>= this.DB;
                    n += t.s
                }
                e.s = n < 0 ? -1 : 0,
                    n > 0 ? e[i++] = n : n < -1 && (e[i++] = this.DV + n),
                    e.t = i,
                    e.clamp()
            }
            ,
            t.prototype.dMultiply = function (t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t),
                    ++this.t,
                    this.clamp()
            }
            ,
            t.prototype.dAddOffset = function (t, e) {
                if (0 != t) {
                    for (; this.t <= e;)
                        this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV;)
                        this[e] -= this.DV,
                        ++e >= this.t && (this[this.t++] = 0),
                            ++this[e]
                }
            }
            ,
            t.prototype.multiplyLowerTo = function (t, e, i) {
                var n = Math.min(this.t + t.t, e);
                for (i.s = 0,
                         i.t = n; n > 0;)
                    i[--n] = 0;
                for (var r = i.t - this.t; n < r; ++n)
                    i[n + this.t] = this.am(0, t[n], i, n, 0, this.t);
                for (var r = Math.min(t.t, e); n < r; ++n)
                    this.am(0, t[n], i, n, 0, e - n);
                i.clamp()
            }
            ,
            t.prototype.multiplyUpperTo = function (t, e, i) {
                --e;
                var n = i.t = this.t + t.t - e;
                for (i.s = 0; --n >= 0;)
                    i[n] = 0;
                for (n = Math.max(e - this.t, 0); n < t.t; ++n)
                    i[this.t + n - e] = this.am(e - n, t[n], i, 0, 0, this.t + n - e);
                i.clamp(),
                    i.drShiftTo(1, i)
            }
            ,
            t.prototype.modInt = function (t) {
                if (t <= 0)
                    return 0;
                var e = this.DV % t
                    , i = this.s < 0 ? t - 1 : 0;
                if (this.t > 0)
                    if (0 == e)
                        i = this[0] % t;
                    else
                        for (var n = this.t - 1; n >= 0; --n)
                            i = (e * i + this[n]) % t;
                return i
            }
            ,
            t.prototype.millerRabin = function (e) {
                var i = this.subtract(t.ONE)
                    , n = i.getLowestSetBit();
                if (n <= 0)
                    return !1;
                var r = i.shiftRight(n);
                (e = e + 1 >> 1) > z.length && (e = z.length);
                for (var o = f(), s = 0; s < e; ++s) {
                    o.fromInt(z[Math.floor(Math.random() * z.length)]);
                    var a = o.modPow(r, this);
                    if (0 != a.compareTo(t.ONE) && 0 != a.compareTo(i)) {
                        for (var u = 1; u++ < n && 0 != a.compareTo(i);)
                            if (a = a.modPowInt(2, this),
                            0 == a.compareTo(t.ONE))
                                return !1;
                        if (0 != a.compareTo(i))
                            return !1
                    }
                }
                return !0
            }
            ,
            t.prototype.square = function () {
                var t = f();
                return this.squareTo(t),
                    t
            }
            ,
            t.prototype.gcda = function (t, e) {
                var i = this.s < 0 ? this.negate() : this.clone()
                    , n = t.s < 0 ? t.negate() : t.clone();
                if (i.compareTo(n) < 0) {
                    var r = i;
                    i = n,
                        n = r
                }
                var o = i.getLowestSetBit()
                    , s = n.getLowestSetBit();
                if (s < 0)
                    return void e(i);
                o < s && (s = o),
                s > 0 && (i.rShiftTo(s, i),
                    n.rShiftTo(s, n));
                var a = function () {
                    (o = i.getLowestSetBit()) > 0 && i.rShiftTo(o, i),
                    (o = n.getLowestSetBit()) > 0 && n.rShiftTo(o, n),
                        i.compareTo(n) >= 0 ? (i.subTo(n, i),
                            i.rShiftTo(1, i)) : (n.subTo(i, n),
                            n.rShiftTo(1, n)),
                        i.signum() > 0 ? setTimeout(a, 0) : (s > 0 && n.lShiftTo(s, n),
                            setTimeout(function () {
                                e(n)
                            }, 0))
                };
                setTimeout(a, 10)
            }
            ,
            t.prototype.fromNumberAsync = function (e, i, r, o) {
                if ("number" == typeof i)
                    if (e < 2)
                        this.fromInt(1);
                    else {
                        this.fromNumber(e, r),
                        this.testBit(e - 1) || this.bitwiseTo(t.ONE.shiftLeft(e - 1), n, this),
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this
                            , a = function () {
                            s.dAddOffset(2, 0),
                            s.bitLength() > e && s.subTo(t.ONE.shiftLeft(e - 1), s),
                                s.isProbablePrime(i) ? setTimeout(function () {
                                    o()
                                }, 0) : setTimeout(a, 0)
                        };
                        setTimeout(a, 0)
                    }
                else {
                    var u = []
                        , c = 7 & e;
                    u.length = 1 + (e >> 3),
                        i.nextBytes(u),
                        c > 0 ? u[0] &= (1 << c) - 1 : u[0] = 0,
                        this.fromString(u, 256)
                }
            }
            ,
            t
    }(), Z = function () {
        function t() {
        }

        return t.prototype.convert = function (t) {
            return t
        }
            ,
            t.prototype.revert = function (t) {
                return t
            }
            ,
            t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i)
            }
            ,
            t.prototype.sqrTo = function (t, e) {
                t.squareTo(e)
            }
            ,
            t
    }(), W = function () {
        function t(t) {
            this.m = t
        }

        return t.prototype.convert = function (t) {
            return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
        }
            ,
            t.prototype.revert = function (t) {
                return t
            }
            ,
            t.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t)
            }
            ,
            t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i),
                    this.reduce(i)
            }
            ,
            t.prototype.sqrTo = function (t, e) {
                t.squareTo(e),
                    this.reduce(e)
            }
            ,
            t
    }(), Y = function () {
        function t(t) {
            this.m = t,
                this.mp = t.invDigit(),
                this.mpl = 32767 & this.mp,
                this.mph = this.mp >> 15,
                this.um = (1 << t.DB - 15) - 1,
                this.mt2 = 2 * t.t
        }

        return t.prototype.convert = function (t) {
            var e = f();
            return t.abs().dlShiftTo(this.m.t, e),
                e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(G.ZERO) > 0 && this.m.subTo(e, e),
                e
        }
            ,
            t.prototype.revert = function (t) {
                var e = f();
                return t.copyTo(e),
                    this.reduce(e),
                    e
            }
            ,
            t.prototype.reduce = function (t) {
                for (; t.t <= this.mt2;)
                    t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var i = 32767 & t[e]
                        , n = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (i = e + this.m.t,
                             t[i] += this.m.am(0, n, t, e, 0, this.m.t); t[i] >= t.DV;)
                        t[i] -= t.DV,
                            t[++i]++
                }
                t.clamp(),
                    t.drShiftTo(this.m.t, t),
                t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i),
                    this.reduce(i)
            }
            ,
            t.prototype.sqrTo = function (t, e) {
                t.squareTo(e),
                    this.reduce(e)
            }
            ,
            t
    }(), X = function () {
        function t(t) {
            this.m = t,
                this.r2 = f(),
                this.q3 = f(),
                G.ONE.dlShiftTo(2 * t.t, this.r2),
                this.mu = this.r2.divide(t)
        }

        return t.prototype.convert = function (t) {
            if (t.s < 0 || t.t > 2 * this.m.t)
                return t.mod(this.m);
            if (t.compareTo(this.m) < 0)
                return t;
            var e = f();
            return t.copyTo(e),
                this.reduce(e),
                e
        }
            ,
            t.prototype.revert = function (t) {
                return t
            }
            ,
            t.prototype.reduce = function (t) {
                for (t.drShiftTo(this.m.t - 1, this.r2),
                     t.t > this.m.t + 1 && (t.t = this.m.t + 1,
                         t.clamp()),
                         this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3),
                         this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;)
                    t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;)
                    t.subTo(this.m, t)
            }
            ,
            t.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i),
                    this.reduce(i)
            }
            ,
            t.prototype.sqrTo = function (t, e) {
                t.squareTo(e),
                    this.reduce(e)
            }
            ,
            t
    }();
K && "Microsoft Internet Explorer" == navigator.appName ? (G.prototype.am = g,
    k = 30) : K && "Netscape" != navigator.appName ? (G.prototype.am = p,
    k = 26) : (G.prototype.am = m,
    k = 28),
    G.prototype.DB = k,
    G.prototype.DM = (1 << k) - 1,
    G.prototype.DV = 1 << k;
var Q = 52;
G.prototype.FV = Math.pow(2, Q),
    G.prototype.F1 = Q - k,
    G.prototype.F2 = 2 * k - Q;
var tt, et, it = [];
for (tt = "0".charCodeAt(0),
         et = 0; et <= 9; ++et)
    it[tt++] = et;
for (tt = "a".charCodeAt(0),
         et = 10; et < 36; ++et)
    it[tt++] = et;
for (tt = "A".charCodeAt(0),
         et = 10; et < 36; ++et)
    it[tt++] = et;
G.ZERO = b(0),
    G.ONE = b(1);
var nt, rt, ot = function () {
    function t() {
        this.i = 0,
            this.j = 0,
            this.S = []
    }

    return t.prototype.init = function (t) {
        var e, i, n;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        for (i = 0,
                 e = 0; e < 256; ++e)
            i = i + this.S[e] + t[e % t.length] & 255,
                n = this.S[e],
                this.S[e] = this.S[i],
                this.S[i] = n;
        this.i = 0,
            this.j = 0
    }
        ,
        t.prototype.next = function () {
            var t;
            return this.i = this.i + 1 & 255,
                this.j = this.j + this.S[this.i] & 255,
                t = this.S[this.i],
                this.S[this.i] = this.S[this.j],
                this.S[this.j] = t,
                this.S[t + this.S[this.i] & 255]
        }
        ,
        t
}(), st = 256, at = null;
if (null == at) {
    at = [],
        rt = 0;
    var ut = void 0;
    if (window.crypto && window.crypto.getRandomValues) {
        var ct = new Uint32Array(256);
        for (window.crypto.getRandomValues(ct),
                 ut = 0; ut < ct.length; ++ut)
            at[rt++] = 255 & ct[ut]
    }
    var ht = function (t) {
        if (this.count = this.count || 0,
        this.count >= 256 || rt >= st)
            return void (window.removeEventListener ? window.removeEventListener("mousemove", ht, !1) : window.detachEvent && window.detachEvent("onmousemove", ht));
        try {
            var e = t.x + t.y;
            at[rt++] = 255 & e,
                this.count += 1
        } catch (i) {
        }
    };
    window.addEventListener ? window.addEventListener("mousemove", ht, !1) : window.attachEvent && window.attachEvent("onmousemove", ht)
}
var lt = function () {
    function t() {
    }

    return t.prototype.nextBytes = function (t) {
        for (var e = 0; e < t.length; ++e)
            t[e] = S()
    }
        ,
        t
}()
    , ft = function () {
    function t() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    }

    return t.prototype.doPublic = function (t) {
        return t.modPowInt(this.e, this.n)
    }
        ,
        t.prototype.doPrivate = function (t) {
            if (null == this.p || null == this.q)
                return t.modPow(this.d, this.n);
            for (var e = t.mod(this.p).modPow(this.dmp1, this.p), i = t.mod(this.q).modPow(this.dmq1, this.q); e.compareTo(i) < 0;)
                e = e.add(this.p);
            return e.subtract(i).multiply(this.coeff).mod(this.p).multiply(this.q).add(i)
        }
        ,
        t.prototype.setPublic = function (t, e) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = d(t, 16),
                this.e = parseInt(e, 16)) : console.error("Invalid RSA public key")
        }
        ,
        t.prototype.encrypt = function (t) {
            var e = E(t, this.n.bitLength() + 7 >> 3);
            if (null == e)
                return null;
            var i = this.doPublic(e);
            if (null == i)
                return null;
            var n = i.toString(16);
            return 0 == (1 & n.length) ? n : "0" + n
        }
        ,
        t.prototype.setPrivate = function (t, e, i) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = d(t, 16),
                this.e = parseInt(e, 16),
                this.d = d(i, 16)) : console.error("Invalid RSA private key")
        }
        ,
        t.prototype.setPrivateEx = function (t, e, i, n, r, o, s, a) {
            null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = d(t, 16),
                this.e = parseInt(e, 16),
                this.d = d(i, 16),
                this.p = d(n, 16),
                this.q = d(r, 16),
                this.dmp1 = d(o, 16),
                this.dmq1 = d(s, 16),
                this.coeff = d(a, 16)) : console.error("Invalid RSA private key")
        }
        ,
        t.prototype.generate = function (t, e) {
            var i = new lt
                , n = t >> 1;
            this.e = parseInt(e, 16);
            for (var r = new G(e, 16); ;) {
                for (; this.p = new G(t - n, 1, i),
                       0 != this.p.subtract(G.ONE).gcd(r).compareTo(G.ONE) || !this.p.isProbablePrime(10);)
                    ;
                for (; this.q = new G(n, 1, i),
                       0 != this.q.subtract(G.ONE).gcd(r).compareTo(G.ONE) || !this.q.isProbablePrime(10);)
                    ;
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q,
                        this.q = o
                }
                var s = this.p.subtract(G.ONE)
                    , a = this.q.subtract(G.ONE)
                    , u = s.multiply(a);
                if (0 == u.gcd(r).compareTo(G.ONE)) {
                    this.n = this.p.multiply(this.q),
                        this.d = r.modInverse(u),
                        this.dmp1 = this.d.mod(s),
                        this.dmq1 = this.d.mod(a),
                        this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        ,
        t.prototype.decrypt = function (t) {
            var e = d(t, 16)
                , i = this.doPrivate(e);
            return null == i ? null : x(i, this.n.bitLength() + 7 >> 3)
        }
        ,
        t.prototype.generateAsync = function (t, e, i) {
            var n = new lt
                , r = t >> 1;
            this.e = parseInt(e, 16);
            var o = new G(e, 16)
                , s = this
                , a = function () {
                var e = function () {
                    if (s.p.compareTo(s.q) <= 0) {
                        var t = s.p;
                        s.p = s.q,
                            s.q = t
                    }
                    var e = s.p.subtract(G.ONE)
                        , n = s.q.subtract(G.ONE)
                        , r = e.multiply(n);
                    0 == r.gcd(o).compareTo(G.ONE) ? (s.n = s.p.multiply(s.q),
                        s.d = o.modInverse(r),
                        s.dmp1 = s.d.mod(e),
                        s.dmq1 = s.d.mod(n),
                        s.coeff = s.q.modInverse(s.p),
                        setTimeout(function () {
                            i()
                        }, 0)) : setTimeout(a, 0)
                }
                    , u = function () {
                    s.q = f(),
                        s.q.fromNumberAsync(r, 1, n, function () {
                            s.q.subtract(G.ONE).gcda(o, function (t) {
                                0 == t.compareTo(G.ONE) && s.q.isProbablePrime(10) ? setTimeout(e, 0) : setTimeout(u, 0)
                            })
                        })
                }
                    , c = function () {
                    s.p = f(),
                        s.p.fromNumberAsync(t - r, 1, n, function () {
                            s.p.subtract(G.ONE).gcda(o, function (t) {
                                0 == t.compareTo(G.ONE) && s.p.isProbablePrime(10) ? setTimeout(u, 0) : setTimeout(c, 0)
                            })
                        })
                };
                setTimeout(c, 0)
            };
            setTimeout(a, 0)
        }
        ,
        t.prototype.sign = function (t, e, i) {
            var n = D(i)
                , r = n + e(t).toString()
                , o = T(r, this.n.bitLength() / 4);
            if (null == o)
                return null;
            var s = this.doPrivate(o);
            if (null == s)
                return null;
            var a = s.toString(16);
            return 0 == (1 & a.length) ? a : "0" + a
        }
        ,
        t.prototype.verify = function (t, e, i) {
            var n = d(e, 16)
                , r = this.doPublic(n);
            return null == r ? null : A(r.toString(16).replace(/^1f+00/, "")) == i(t).toString()
        }
        ,
        t
}()
    , dt = {
    md2: "3020300c06082a864886f70d020205000410",
    md5: "3020300c06082a864886f70d020505000410",
    sha1: "3021300906052b0e03021a05000414",
    sha224: "302d300d06096086480165030402040500041c",
    sha256: "3031300d060960864801650304020105000420",
    sha384: "3041300d060960864801650304020205000430",
    sha512: "3051300d060960864801650304020305000440",
    ripemd160: "3021300906052b2403020105000414"
}
    , pt = {};
pt.lang = {
    extend: function (t, e, i) {
        if (!e || !t)
            throw new Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
        var n = function () {
        };
        if (n.prototype = e.prototype,
            t.prototype = new n,
            t.prototype.constructor = t,
            t.superclass = e.prototype,
        e.prototype.constructor == Object.prototype.constructor && (e.prototype.constructor = e),
            i) {
            var r;
            for (r in i)
                t.prototype[r] = i[r];
            var o = function () {
            }
                , s = ["toString", "valueOf"];
            try {
                /MSIE/.test(navigator.userAgent) && (o = function (t, e) {
                        for (r = 0; r < s.length; r += 1) {
                            var i = s[r]
                                , n = e[i];
                            "function" == typeof n && n != Object.prototype[i] && (t[i] = n)
                        }
                    }
                )
            } catch (a) {
            }
            o(t.prototype, i)
        }
    }
};
var gt = {};
"undefined" != typeof gt.asn1 && gt.asn1 || (gt.asn1 = {}),
    gt.asn1.ASN1Util = new function () {
        this.integerToByteHex = function (t) {
            var e = t.toString(16);
            return e.length % 2 == 1 && (e = "0" + e),
                e
        }
            ,
            this.bigIntToMinTwosComplementsHex = function (t) {
                var e = t.toString(16);
                if ("-" != e.substr(0, 1))
                    e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e);
                else {
                    var i = e.substr(1)
                        , n = i.length;
                    n % 2 == 1 ? n += 1 : e.match(/^[0-7]/) || (n += 2);
                    for (var r = "", o = 0; o < n; o++)
                        r += "f";
                    e = new G(r, 16).xor(t).add(G.ONE).toString(16).replace(/^-/, "")
                }
                return e
            }
            ,
            this.getPEMStringFromHex = function (t, e) {
                return hextopem(t, e)
            }
            ,
            this.newObject = function (t) {
                var e = gt
                    , i = e.asn1
                    , n = i.DERBoolean
                    , r = i.DERInteger
                    , o = i.DERBitString
                    , s = i.DEROctetString
                    , a = i.DERNull
                    , u = i.DERObjectIdentifier
                    , c = i.DEREnumerated
                    , h = i.DERUTF8String
                    , l = i.DERNumericString
                    , f = i.DERPrintableString
                    , d = i.DERTeletexString
                    , p = i.DERIA5String
                    , g = i.DERUTCTime
                    , m = i.DERGeneralizedTime
                    , v = i.DERSequence
                    , b = i.DERSet
                    , y = i.DERTaggedObject
                    , w = i.ASN1Util.newObject
                    , S = Object.keys(t);
                if (1 != S.length)
                    throw "key of param shall be only one.";
                var T = S[0];
                if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + T + ":"))
                    throw "undefined key: " + T;
                if ("bool" == T)
                    return new n(t[T]);
                if ("int" == T)
                    return new r(t[T]);
                if ("bitstr" == T)
                    return new o(t[T]);
                if ("octstr" == T)
                    return new s(t[T]);
                if ("null" == T)
                    return new a(t[T]);
                if ("oid" == T)
                    return new u(t[T]);
                if ("enum" == T)
                    return new c(t[T]);
                if ("utf8str" == T)
                    return new h(t[T]);
                if ("numstr" == T)
                    return new l(t[T]);
                if ("prnstr" == T)
                    return new f(t[T]);
                if ("telstr" == T)
                    return new d(t[T]);
                if ("ia5str" == T)
                    return new p(t[T]);
                if ("utctime" == T)
                    return new g(t[T]);
                if ("gentime" == T)
                    return new m(t[T]);
                if ("seq" == T) {
                    for (var E = t[T], x = [], D = 0; D < E.length; D++) {
                        var A = w(E[D]);
                        x.push(A)
                    }
                    return new v({
                        array: x
                    })
                }
                if ("set" == T) {
                    for (var E = t[T], x = [], D = 0; D < E.length; D++) {
                        var A = w(E[D]);
                        x.push(A)
                    }
                    return new b({
                        array: x
                    })
                }
                if ("tag" == T) {
                    var O = t[T];
                    if ("[object Array]" === Object.prototype.toString.call(O) && 3 == O.length) {
                        var R = w(O[2]);
                        return new y({
                            tag: O[0],
                            explicit: O[1],
                            obj: R
                        })
                    }
                    var k = {};
                    if (O.explicit !== undefined && (k.explicit = O.explicit),
                    O.tag !== undefined && (k.tag = O.tag),
                    O.obj === undefined)
                        throw "obj shall be specified for 'tag'.";
                    return k.obj = w(O.obj),
                        new y(k)
                }
            }
            ,
            this.jsonToASN1HEX = function (t) {
                return this.newObject(t).getEncodedHex()
            }
    }
    ,
    gt.asn1.ASN1Util.oidHexToInt = function (t) {
        for (var e = "", i = parseInt(t.substr(0, 2), 16), n = Math.floor(i / 40), r = i % 40, e = n + "." + r, o = "", s = 2; s < t.length; s += 2) {
            var a = parseInt(t.substr(s, 2), 16)
                , u = ("00000000" + a.toString(2)).slice(-8);
            if (o += u.substr(1, 7),
            "0" == u.substr(0, 1)) {
                e = e + "." + new G(o, 2).toString(10),
                    o = ""
            }
        }
        return e
    }
    ,
    gt.asn1.ASN1Util.oidIntToHex = function (t) {
        var e = function (t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e),
                e
        }
            , i = function (t) {
            var i = ""
                , n = new G(t, 10)
                , r = n.toString(2)
                , o = 7 - r.length % 7;
            7 == o && (o = 0);
            for (var s = "", a = 0; a < o; a++)
                s += "0";
            r = s + r;
            for (var a = 0; a < r.length - 1; a += 7) {
                var u = r.substr(a, 7);
                a != r.length - 7 && (u = "1" + u),
                    i += e(parseInt(u, 2))
            }
            return i
        };
        if (!t.match(/^[0-9.]+$/))
            throw "malformed oid string: " + t;
        var n = ""
            , r = t.split(".")
            , o = 40 * parseInt(r[0]) + parseInt(r[1]);
        n += e(o),
            r.splice(0, 2);
        for (var s = 0; s < r.length; s++)
            n += i(r[s]);
        return n
    }
    ,
    gt.asn1.ASN1Object = function () {
        this.getLengthHexFromValue = function () {
            if ("undefined" == typeof this.hV || null == this.hV)
                throw "this.hV is null or undefined.";
            if (this.hV.length % 2 == 1)
                throw "value hex must be even length: n=" + "".length + ",v=" + this.hV;
            var t = this.hV.length / 2
                , e = t.toString(16);
            if (e.length % 2 == 1 && (e = "0" + e),
            t < 128)
                return e;
            var i = e.length / 2;
            if (i > 15)
                throw "ASN.1 length too long to represent by 8x: n = " + t.toString(16);
            return (128 + i).toString(16) + e
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
    gt.asn1.DERAbstractString = function (t) {
        gt.asn1.DERAbstractString.superclass.constructor.call(this),
            this.getString = function () {
                return this.s
            }
            ,
            this.setString = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = t,
                    this.hV = stohex(this.s)
            }
            ,
            this.setStringHex = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = t
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== t && ("string" == typeof t ? this.setString(t) : "undefined" != typeof t.str ? this.setString(t.str) : "undefined" != typeof t.hex && this.setStringHex(t.hex))
    }
    ,
    pt.lang.extend(gt.asn1.DERAbstractString, gt.asn1.ASN1Object),
    gt.asn1.DERAbstractTime = function (t) {
        gt.asn1.DERAbstractTime.superclass.constructor.call(this),
            this.localDateToUTC = function (t) {
                return utc = t.getTime() + 6e4 * t.getTimezoneOffset(),
                    new Date(utc)
            }
            ,
            this.formatDate = function (t, e, i) {
                var n = this.zeroPadding
                    , r = this.localDateToUTC(t)
                    , o = String(r.getFullYear());
                "utc" == e && (o = o.substr(2, 2));
                var s = n(String(r.getMonth() + 1), 2)
                    , a = n(String(r.getDate()), 2)
                    , u = n(String(r.getHours()), 2)
                    , c = n(String(r.getMinutes()), 2)
                    , h = n(String(r.getSeconds()), 2)
                    , l = o + s + a + u + c + h;
                if (!0 === i) {
                    var f = r.getMilliseconds();
                    if (0 != f) {
                        var d = n(String(f), 3);
                        d = d.replace(/[0]+$/, ""),
                            l = l + "." + d
                    }
                }
                return l + "Z"
            }
            ,
            this.zeroPadding = function (t, e) {
                return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
            }
            ,
            this.getString = function () {
                return this.s
            }
            ,
            this.setString = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = t,
                    this.hV = stohex(t)
            }
            ,
            this.setByDateValue = function (t, e, i, n, r, o) {
                var s = new Date(Date.UTC(t, e - 1, i, n, r, o, 0));
                this.setByDate(s)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
    }
    ,
    pt.lang.extend(gt.asn1.DERAbstractTime, gt.asn1.ASN1Object),
    gt.asn1.DERAbstractStructured = function (t) {
        gt.asn1.DERAbstractString.superclass.constructor.call(this),
            this.setByASN1ObjectArray = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array = t
            }
            ,
            this.appendASN1Object = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.asn1Array.push(t)
            }
            ,
            this.asn1Array = new Array,
        void 0 !== t && "undefined" != typeof t.array && (this.asn1Array = t.array)
    }
    ,
    pt.lang.extend(gt.asn1.DERAbstractStructured, gt.asn1.ASN1Object),
    gt.asn1.DERBoolean = function () {
        gt.asn1.DERBoolean.superclass.constructor.call(this),
            this.hT = "01",
            this.hTLV = "0101ff"
    }
    ,
    pt.lang.extend(gt.asn1.DERBoolean, gt.asn1.ASN1Object),
    gt.asn1.DERInteger = function (t) {
        gt.asn1.DERInteger.superclass.constructor.call(this),
            this.hT = "02",
            this.setByBigInteger = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = gt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function (t) {
                var e = new G(String(t), 10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function (t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== t && ("undefined" != typeof t.bigint ? this.setByBigInteger(t.bigint) : "undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
    }
    ,
    pt.lang.extend(gt.asn1.DERInteger, gt.asn1.ASN1Object),
    gt.asn1.DERBitString = function (t) {
        if (t !== undefined && "undefined" != typeof t.obj) {
            var e = gt.asn1.ASN1Util.newObject(t.obj);
            t.hex = "00" + e.getEncodedHex()
        }
        gt.asn1.DERBitString.superclass.constructor.call(this),
            this.hT = "03",
            this.setHexValueIncludingUnusedBits = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = t
            }
            ,
            this.setUnusedBitsAndHexValue = function (t, e) {
                if (t < 0 || 7 < t)
                    throw "unused bits shall be from 0 to 7: u = " + t;
                var i = "0" + t;
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = i + e
            }
            ,
            this.setByBinaryString = function (t) {
                t = t.replace(/0+$/, "");
                var e = 8 - t.length % 8;
                8 == e && (e = 0);
                for (var i = 0; i <= e; i++)
                    t += "0";
                for (var n = "", i = 0; i < t.length - 1; i += 8) {
                    var r = t.substr(i, 8)
                        , o = parseInt(r, 2).toString(16);
                    1 == o.length && (o = "0" + o),
                        n += o
                }
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = "0" + e + n
            }
            ,
            this.setByBooleanArray = function (t) {
                for (var e = "", i = 0; i < t.length; i++)
                    1 == t[i] ? e += "1" : e += "0";
                this.setByBinaryString(e)
            }
            ,
            this.newFalseArray = function (t) {
                for (var e = new Array(t), i = 0; i < t; i++)
                    e[i] = !1;
                return e
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== t && ("string" == typeof t && t.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(t) : "undefined" != typeof t.hex ? this.setHexValueIncludingUnusedBits(t.hex) : "undefined" != typeof t.bin ? this.setByBinaryString(t.bin) : "undefined" != typeof t.array && this.setByBooleanArray(t.array))
    }
    ,
    pt.lang.extend(gt.asn1.DERBitString, gt.asn1.ASN1Object),
    gt.asn1.DEROctetString = function (t) {
        if (t !== undefined && "undefined" != typeof t.obj) {
            var e = gt.asn1.ASN1Util.newObject(t.obj);
            t.hex = e.getEncodedHex()
        }
        gt.asn1.DEROctetString.superclass.constructor.call(this, t),
            this.hT = "04"
    }
    ,
    pt.lang.extend(gt.asn1.DEROctetString, gt.asn1.DERAbstractString),
    gt.asn1.DERNull = function () {
        gt.asn1.DERNull.superclass.constructor.call(this),
            this.hT = "05",
            this.hTLV = "0500"
    }
    ,
    pt.lang.extend(gt.asn1.DERNull, gt.asn1.ASN1Object),
    gt.asn1.DERObjectIdentifier = function (t) {
        var e = function (t) {
            var e = t.toString(16);
            return 1 == e.length && (e = "0" + e),
                e
        }
            , i = function (t) {
            var i = ""
                , n = new G(t, 10)
                , r = n.toString(2)
                , o = 7 - r.length % 7;
            7 == o && (o = 0);
            for (var s = "", a = 0; a < o; a++)
                s += "0";
            r = s + r;
            for (var a = 0; a < r.length - 1; a += 7) {
                var u = r.substr(a, 7);
                a != r.length - 7 && (u = "1" + u),
                    i += e(parseInt(u, 2))
            }
            return i
        };
        gt.asn1.DERObjectIdentifier.superclass.constructor.call(this),
            this.hT = "06",
            this.setValueHex = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = t
            }
            ,
            this.setValueOidString = function (t) {
                if (!t.match(/^[0-9.]+$/))
                    throw "malformed oid string: " + t;
                var n = ""
                    , r = t.split(".")
                    , o = 40 * parseInt(r[0]) + parseInt(r[1]);
                n += e(o),
                    r.splice(0, 2);
                for (var s = 0; s < r.length; s++)
                    n += i(r[s]);
                this.hTLV = null,
                    this.isModified = !0,
                    this.s = null,
                    this.hV = n
            }
            ,
            this.setValueName = function (t) {
                var e = gt.asn1.x509.OID.name2oid(t);
                if ("" === e)
                    throw "DERObjectIdentifier oidName undefined: " + t;
                this.setValueOidString(e)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        t !== undefined && ("string" == typeof t ? t.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(t) : this.setValueName(t) : t.oid !== undefined ? this.setValueOidString(t.oid) : t.hex !== undefined ? this.setValueHex(t.hex) : t.name !== undefined && this.setValueName(t.name))
    }
    ,
    pt.lang.extend(gt.asn1.DERObjectIdentifier, gt.asn1.ASN1Object),
    gt.asn1.DEREnumerated = function (t) {
        gt.asn1.DEREnumerated.superclass.constructor.call(this),
            this.hT = "0a",
            this.setByBigInteger = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.hV = gt.asn1.ASN1Util.bigIntToMinTwosComplementsHex(t)
            }
            ,
            this.setByInteger = function (t) {
                var e = new G(String(t), 10);
                this.setByBigInteger(e)
            }
            ,
            this.setValueHex = function (t) {
                this.hV = t
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== t && ("undefined" != typeof t["int"] ? this.setByInteger(t["int"]) : "number" == typeof t ? this.setByInteger(t) : "undefined" != typeof t.hex && this.setValueHex(t.hex))
    }
    ,
    pt.lang.extend(gt.asn1.DEREnumerated, gt.asn1.ASN1Object),
    gt.asn1.DERUTF8String = function (t) {
        gt.asn1.DERUTF8String.superclass.constructor.call(this, t),
            this.hT = "0c"
    }
    ,
    pt.lang.extend(gt.asn1.DERUTF8String, gt.asn1.DERAbstractString),
    gt.asn1.DERNumericString = function (t) {
        gt.asn1.DERNumericString.superclass.constructor.call(this, t),
            this.hT = "12"
    }
    ,
    pt.lang.extend(gt.asn1.DERNumericString, gt.asn1.DERAbstractString),
    gt.asn1.DERPrintableString = function (t) {
        gt.asn1.DERPrintableString.superclass.constructor.call(this, t),
            this.hT = "13"
    }
    ,
    pt.lang.extend(gt.asn1.DERPrintableString, gt.asn1.DERAbstractString),
    gt.asn1.DERTeletexString = function (t) {
        gt.asn1.DERTeletexString.superclass.constructor.call(this, t),
            this.hT = "14"
    }
    ,
    pt.lang.extend(gt.asn1.DERTeletexString, gt.asn1.DERAbstractString),
    gt.asn1.DERIA5String = function (t) {
        gt.asn1.DERIA5String.superclass.constructor.call(this, t),
            this.hT = "16"
    }
    ,
    pt.lang.extend(gt.asn1.DERIA5String, gt.asn1.DERAbstractString),
    gt.asn1.DERUTCTime = function (t) {
        gt.asn1.DERUTCTime.superclass.constructor.call(this, t),
            this.hT = "17",
            this.setByDate = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.date = t,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function () {
                return "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date,
                    this.s = this.formatDate(this.date, "utc"),
                    this.hV = stohex(this.s)),
                    this.hV
            }
            ,
        t !== undefined && (t.str !== undefined ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{12}Z$/) ? this.setString(t) : t.hex !== undefined ? this.setStringHex(t.hex) : t.date !== undefined && this.setByDate(t.date))
    }
    ,
    pt.lang.extend(gt.asn1.DERUTCTime, gt.asn1.DERAbstractTime),
    gt.asn1.DERGeneralizedTime = function (t) {
        gt.asn1.DERGeneralizedTime.superclass.constructor.call(this, t),
            this.hT = "18",
            this.withMillis = !1,
            this.setByDate = function (t) {
                this.hTLV = null,
                    this.isModified = !0,
                    this.date = t,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = stohex(this.s)
            }
            ,
            this.getFreshValueHex = function () {
                return this.date === undefined && this.s === undefined && (this.date = new Date,
                    this.s = this.formatDate(this.date, "gen", this.withMillis),
                    this.hV = stohex(this.s)),
                    this.hV
            }
            ,
        t !== undefined && (t.str !== undefined ? this.setString(t.str) : "string" == typeof t && t.match(/^[0-9]{14}Z$/) ? this.setString(t) : t.hex !== undefined ? this.setStringHex(t.hex) : t.date !== undefined && this.setByDate(t.date),
        !0 === t.millis && (this.withMillis = !0))
    }
    ,
    pt.lang.extend(gt.asn1.DERGeneralizedTime, gt.asn1.DERAbstractTime),
    gt.asn1.DERSequence = function (t) {
        gt.asn1.DERSequence.superclass.constructor.call(this, t),
            this.hT = "30",
            this.getFreshValueHex = function () {
                for (var t = "", e = 0; e < this.asn1Array.length; e++) {
                    t += this.asn1Array[e].getEncodedHex()
                }
                return this.hV = t,
                    this.hV
            }
    }
    ,
    pt.lang.extend(gt.asn1.DERSequence, gt.asn1.DERAbstractStructured),
    gt.asn1.DERSet = function (t) {
        gt.asn1.DERSet.superclass.constructor.call(this, t),
            this.hT = "31",
            this.sortFlag = !0,
            this.getFreshValueHex = function () {
                for (var t = new Array, e = 0; e < this.asn1Array.length; e++) {
                    var i = this.asn1Array[e];
                    t.push(i.getEncodedHex())
                }
                return 1 == this.sortFlag && t.sort(),
                    this.hV = t.join(""),
                    this.hV
            }
            ,
        void 0 !== t && "undefined" != typeof t.sortflag && 0 == t.sortflag && (this.sortFlag = !1)
    }
    ,
    pt.lang.extend(gt.asn1.DERSet, gt.asn1.DERAbstractStructured),
    gt.asn1.DERTaggedObject = function (t) {
        gt.asn1.DERTaggedObject.superclass.constructor.call(this),
            this.hT = "a0",
            this.hV = "",
            this.isExplicit = !0,
            this.asn1Object = null,
            this.setASN1Object = function (t, e, i) {
                this.hT = e,
                    this.isExplicit = t,
                    this.asn1Object = i,
                    this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(),
                        this.hTLV = null,
                        this.isModified = !0) : (this.hV = null,
                        this.hTLV = i.getEncodedHex(),
                        this.hTLV = this.hTLV.replace(/^../, e),
                        this.isModified = !1)
            }
            ,
            this.getFreshValueHex = function () {
                return this.hV
            }
            ,
        void 0 !== t && ("undefined" != typeof t.tag && (this.hT = t.tag),
        "undefined" != typeof t.explicit && (this.isExplicit = t.explicit),
        "undefined" != typeof t.obj && (this.asn1Object = t.obj,
            this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
    }
    ,
    pt.lang.extend(gt.asn1.DERTaggedObject, gt.asn1.ASN1Object);
var mt = function (t) {
        function e(i) {
            var n = t.call(this) || this;
            return i && ("string" == typeof i ? n.parseKey(i) : (e.hasPrivateKeyProperty(i) || e.hasPublicKeyProperty(i)) && n.parsePropertiesFrom(i)),
                n
        }

        return h(e, t),
            e.prototype.parseKey = function (t) {
                try {
                    var e = 0
                        , i = 0
                        , n = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/
                        , r = n.test(t) ? j.decode(t) : $.unarmor(t)
                        , o = U.decode(r);
                    if (3 === o.sub.length && (o = o.sub[2].sub[0]),
                    9 === o.sub.length) {
                        e = o.sub[1].getHexStringValue(),
                            this.n = d(e, 16),
                            i = o.sub[2].getHexStringValue(),
                            this.e = parseInt(i, 16);
                        var s = o.sub[3].getHexStringValue();
                        this.d = d(s, 16);
                        var a = o.sub[4].getHexStringValue();
                        this.p = d(a, 16);
                        var u = o.sub[5].getHexStringValue();
                        this.q = d(u, 16);
                        var c = o.sub[6].getHexStringValue();
                        this.dmp1 = d(c, 16);
                        var h = o.sub[7].getHexStringValue();
                        this.dmq1 = d(h, 16);
                        var l = o.sub[8].getHexStringValue();
                        this.coeff = d(l, 16)
                    } else {
                        if (2 !== o.sub.length)
                            return !1;
                        var f = o.sub[1]
                            , p = f.sub[0];
                        e = p.sub[0].getHexStringValue(),
                            this.n = d(e, 16),
                            i = p.sub[1].getHexStringValue(),
                            this.e = parseInt(i, 16)
                    }
                    return !0
                } catch (g) {
                    return !1
                }
            }
            ,
            e.prototype.getPrivateBaseKey = function () {
                var t = {
                    array: [new gt.asn1.DERInteger({
                        "int": 0
                    }), new gt.asn1.DERInteger({
                        bigint: this.n
                    }), new gt.asn1.DERInteger({
                        "int": this.e
                    }), new gt.asn1.DERInteger({
                        bigint: this.d
                    }), new gt.asn1.DERInteger({
                        bigint: this.p
                    }), new gt.asn1.DERInteger({
                        bigint: this.q
                    }), new gt.asn1.DERInteger({
                        bigint: this.dmp1
                    }), new gt.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new gt.asn1.DERInteger({
                        bigint: this.coeff
                    })]
                };
                return new gt.asn1.DERSequence(t).getEncodedHex()
            }
            ,
            e.prototype.getPrivateBaseKeyB64 = function () {
                return u(this.getPrivateBaseKey())
            }
            ,
            e.prototype.getPublicBaseKey = function () {
                var t = new gt.asn1.DERSequence({
                    array: [new gt.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new gt.asn1.DERNull]
                })
                    , e = new gt.asn1.DERSequence({
                    array: [new gt.asn1.DERInteger({
                        bigint: this.n
                    }), new gt.asn1.DERInteger({
                        "int": this.e
                    })]
                })
                    , i = new gt.asn1.DERBitString({
                    hex: "00" + e.getEncodedHex()
                });
                return new gt.asn1.DERSequence({
                    array: [t, i]
                }).getEncodedHex()
            }
            ,
            e.prototype.getPublicBaseKeyB64 = function () {
                return u(this.getPublicBaseKey())
            }
            ,
            e.wordwrap = function (t, e) {
                if (e = e || 64,
                    !t)
                    return t;
                var i = "(.{1," + e + "})( +|$\n?)|(.{1," + e + "})";
                return t.match(RegExp(i, "g")).join("\n")
            }
            ,
            e.prototype.getPrivateKey = function () {
                var t = "-----BEGIN RSA PRIVATE KEY-----\n";
                return t += e.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
                    t += "-----END RSA PRIVATE KEY-----"
            }
            ,
            e.prototype.getPublicKey = function () {
                var t = "-----BEGIN PUBLIC KEY-----\n";
                return t += e.wordwrap(this.getPublicBaseKeyB64()) + "\n",
                    t += "-----END PUBLIC KEY-----"
            }
            ,
            e.hasPublicKeyProperty = function (t) {
                return t = t || {},
                t.hasOwnProperty("n") && t.hasOwnProperty("e")
            }
            ,
            e.hasPrivateKeyProperty = function (t) {
                return t = t || {},
                t.hasOwnProperty("n") && t.hasOwnProperty("e") && t.hasOwnProperty("d") && t.hasOwnProperty("p") && t.hasOwnProperty("q") && t.hasOwnProperty("dmp1") && t.hasOwnProperty("dmq1") && t.hasOwnProperty("coeff")
            }
            ,
            e.prototype.parsePropertiesFrom = function (t) {
                this.n = t.n,
                    this.e = t.e,
                t.hasOwnProperty("d") && (this.d = t.d,
                    this.p = t.p,
                    this.q = t.q,
                    this.dmp1 = t.dmp1,
                    this.dmq1 = t.dmq1,
                    this.coeff = t.coeff)
            }
            ,
            e
    }(ft)
; //vt = function () {
function t(t) {
    t = t || {},
        this.default_key_size = parseInt(t.default_key_size, 10) || 1024,
        this.default_public_exponent = t.default_public_exponent || "010001",
        this.log = t.log || !1,
        this.key = null
}

t.prototype.setKey = function (t) {
    this.log && this.key && console.warn("A key was already set, overriding existing."),
        this.key = new mt(t)
}
    ,
    t.prototype.setPrivateKey = function (t) {
        this.setKey(t)
    }
    ,
    t.prototype.setPublicKey = function (t) {
        this.setKey(t)
    }
    ,
    t.prototype.decrypt = function (t) {
        try {
            return this.getKey().decrypt(c(t))
        } catch (e) {
            return !1
        }
    }
    ,
    t.prototype.encrypt = function (t) {
        try {
            return u(this.getKey().encrypt(t))
        } catch (e) {
            return !1
        }
    }
    ,
    t.prototype.sign = function (t, e, i) {
        try {
            return u(this.getKey().sign(t, e, i))
        } catch (n) {
            return !1
        }
    }
    ,
    t.prototype.verify = function (t, e, i) {
        try {
            return this.getKey().verify(t, c(e), i)
        } catch (n) {
            return !1
        }
    }
    ,
    t.prototype.getKey = function (t) {
        if (!this.key) {
            if (this.key = new mt,
            t && "[object Function]" === {}.toString.call(t))
                return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, t);
            this.key.generate(this.default_key_size, this.default_public_exponent)
        }
        return this.key
    }
    ,
    t.prototype.getPrivateKey = function () {
        return this.getKey().getPrivateKey()
    }
    ,
    t.prototype.getPrivateKeyB64 = function () {
        return this.getKey().getPrivateBaseKeyB64()
    }
    ,
    t.prototype.getPublicKey = function () {
        return this.getKey().getPublicKey()
    }
    ,
    t.prototype.getPublicKeyB64 = function () {
        return this.getKey().getPublicBaseKeyB64()
    }
    ,
    t.version = "3.0.0-rc.1",
    t;

var publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCRD8YahHualjGxPMzeIWnAqVGMIrWrrkr5L7gw+5XT55iIuYXZYLaUFMTOD9iSyfKlL9mvD3ReUX6Lieph3ajJAPPGEuSHwoj5PN1UiQXK3wzAPKcpwrrA2V4Agu1/RZsyIuzboXgcPexyUYxYUTJH48DeYBGJe2GrYtsmzuIu6QIDAQAB";

function encrypt(password) {
    t.prototype.setPublicKey(publicKey);
    return t.prototype.encrypt(password)
}
