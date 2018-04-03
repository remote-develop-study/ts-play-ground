"use strict";
// 동적으로 받아서 해야할거 같은데
var num = [1, 2];
function Plus() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = num.reduce(addFnc, 0);
    function addFnc(a, b) {
        return a + b;
    }
    return num;
}
console.log(Plus(1, 2));
function Minur(n1, n2) {
    return n1 - n2;
}
function Cross(n1, n2) {
    return n1 - n2;
}
function Sub() { }
var t = 3;
function Ab() {
    var n = 1;
    var x;
    while (n < 3) {
        n++; // n: 1 2 3
        x += n; // x: 1 3 6
    }
    return t;
}
