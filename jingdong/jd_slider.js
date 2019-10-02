
var jd = {
    fp: function(c) {
        var a = [];
        for (var b in c) {
            a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c[b]))
        }
        a.push(("v=" + Math.random()).replace(".", ""));
        return a.join("&")
    },
    st: function(d) {
        var c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-~".split("")
          , b = c.length
          , e = +d
          , a = [];
        do {
            mod = e % b;
            e = (e - mod) / b;
            a.unshift(c[mod])
        } while (e);return a.join("")
    },
    pi: function(a, b) {
        return (Array(b).join(0) + a).slice(-b)
    },
    pm: function(d, c, b) {
        var f = this;
        var e = f.st(Math.abs(d));
        var a = "";
        if (!b) {
            a += (d > 0 ? "1" : "0")
        }
        a += f.pi(e, c);
        return a
    },
    encrypt: function(c) {
        var g = this;
        var b = new Array();
        for (var e = 0; e < c.length; e++) {
            if (e == 0) {
                b.push(g.pm(c[e][0] < 262143 ? c[e][0] : 262143, 3, true));
                b.push(g.pm(c[e][1] < 16777215 ? c[e][1] : 16777215, 4, true));
                b.push(g.pm(c[e][2] < 4398046511103 ? c[e][2] : 4398046511103, 7, true))
            } else {
                var a = c[e][0] - c[e - 1][0];
                var f = c[e][1] - c[e - 1][1];
                var d = c[e][2] - c[e - 1][2];
                b.push(g.pm(a < 4095 ? a : 4095, 2, false));
                b.push(g.pm(f < 4095 ? f : 4095, 2, false));
                b.push(g.pm(d < 16777215 ? d : 16777215, 4, true))
            }
        }
        return b.join("")
    }
};

function encrypt_trace(trace) {
    return jd.encrypt(trace)
}

