"use strict";
// interface Polygon {
//   circle();  
// }
exports.__esModule = true;
// *---간단?
var pi = 3.14;
// 원
function circle(r) {
    return r * r * pi;
}
exports.circle = circle;
function rect(a, b) {
    return a * b;
}
exports.rect = rect;
function trapezoid(a, b, h) {
    return (a + b) * 0.5 * h;
}
exports.trapezoid = trapezoid;
// function calculateCircle(r: number) {
//   circle(3);
// }
function getArea(type, num1, num2, num3) {
    // 2번문제의 타입체크가하기
    // 3번문제 공통으로 묶기?
    if (type == "circle") {
        circle(3);
    }
    if (type == "rect") {
        rect(2, 4);
    }
    if (type == "trapezoid") {
        trapezoid(2, 4, 5);
    }
}
