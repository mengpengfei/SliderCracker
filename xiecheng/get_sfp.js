
function get_sfp($0) {
    var stack = y.J();
    var a = $0;
    var b = 0;
    null !== a && void 0 !== a && 0 !== a && (b = y.q((a.length << 2) + 1),
    ka(a, b));
    $0 = b;
    var ret = Z._mixfp($0);
    ret = G(ret);
    y.I(stack);
    return encodeURIComponent(ret)
}

console.log(get_sfp("63538641"));