"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
function blockScope(value) {
    var a = 40, b = 20;
    if (value) {
        var c = a + b;
        return c;
    }
    // var d = false;
    return undefined;
}
exports.blockScope = blockScope;
// 스코프 문제
function makeLoop(num) {
    var num = '';
    for (var i = 0; i < 5; i++) {
        num += '1';
    }
    return num;
}
exports.makeLoop = makeLoop;
// 배열의 index값
function getColorByIndex(_a, index) {
    var color = _a.color;
    return color[index];
}
exports.getColorByIndex = getColorByIndex;
// 이렇게 해도되나..
function getSumOfNumArray(_a) {
    var number = _a.number;
    var sum = number.reduce(function (a, b) { return a + b; });
    return sum;
}
exports.getSumOfNumArray = getSumOfNumArray;
// *---여기서부터 풀기
//최대값 찾기
function getOldestAge(_a) {
    var age = _a.age;
    // var maxNum = age.reduce
    var num = age.sort();
    return num[0];
}
exports.getOldestAge = getOldestAge;
// 배열값 바꾸기
function getChangedText(_a) {
    var goods = _a.goods;
    var str = goods;
    return str.replace('Air', 'Pro');
}
exports.getChangedText = getChangedText;
//배열의 2번째 값을 리턴하시오.
function getSecondValueOfArray(_a) {
    var number = _a.number;
    var array = number[1];
    return array;
}
exports.getSecondValueOfArray = getSecondValueOfArray;
