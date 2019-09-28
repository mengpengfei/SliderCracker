
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

function RandomNum(min, max) {
    return Math.floor(Math.random()*(max-min)) + min + 1
}

function RandomChoice(arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

function getTrace(distance){
    distance = Math.floor(distance);
    var trace = [];
    var sy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0];
    var st = [15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17,
        18, 15, 16, 17, 18, 15, 16, 17, 18, 15, 16, 17, 18, 14, 16, 17, 18, 16, 17, 18, 19, 20, 17];
    //items[Math.floor(Math.random()*items.length)]

    if (distance < 95) {
        var sx = [1, 2, 1, 2, 1, 2, 1, 1, 2, 1];
    }else{
        var sx = [1, 2, 1, 2, 1, 2, 2, 2, 3, 4];
    }
    var zt = new Date().getTime();
    var baseX = 851,
        baseY = 342,
        zx = 0,
        zy = 0;
    var random_x = RandomNum(9, 14);
    trace.push(["" + baseX, "" + baseY, zt]);
    var n = 0, x = 0, y = 0, t = 0;
    while (true){
        n += 1;
        if (n < 5){
            x = 1;
        }else{
            x = RandomChoice(sx)
        }
        if (distance > 125 && random_x === n){
            x = RandomNum(14, 18)
        }
        y = RandomChoice(sy);
        t = RandomChoice(st);
        zx += x;
        zy += y;
        zt += t;
        trace.push(["" + (zx + baseX), "" + (zy + baseY), zt]);
        if (distance - zx < 6){
            break;
        }
    }
    var value = distance - zx;
    for (var i = 0; i < value; i++){
        t = RandomChoice(st);

        if (value === i + 1){
            t = RandomNum(42, 56)
        }
        if (value === i + 2){
            t = RandomNum(32, 38)
        }
        if (value === i + 3){
            t = RandomNum(30, 36)
        }
        x = 1;
        zx += x;
        zt += t;
        trace.push([""+(zx + baseX), ""+ (zy + baseY), zt]);
    }
    t = RandomNum(100, 200);
    zt += t;
    trace.push([""+(zx + baseX), ""+ (zy + baseY), zt]);
	return trace;
}


function getParam(distance) {
    var trace = getTrace(distance);
    console.log(trace);
    return jd.encrypt(trace)
}

console.log(getParam(225));
