function f(h) {
    return (h = ((9301 * h) + 49297) % 233280) / 233280
}
function o(x, h) {
    return Math["ceil"](f(h) * x)
}
function getRandomStr(x) {
    var c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
        "8", "9"];
    var c_ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var a = c["length"];
    for (var _ = "", i = 0; i < x; i++) {
        var h = (new Date)["getTime"]() + Math.ceil((10 * Math["random"]()) * c_["length"]);
        var r = o(a, h) - 1;
        r < 0 && (r = 0);
        r > a && (r = a);
        _ += c[r]
    }
    return _;
}

console.log(getRandomStr(64));
