"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeString(word, num) {
    return (typeof word === 'string' && typeof num === 'number') ? '${word} ${년 반가워}' : '거절한다';
    //파라미터의 자료형 비교. typescript 에서 비교는 ===, 
}
exports.makeString = makeString;
function sum(num1, num2) {
    if (!num1 && !num2) {
        var sum_1 = num1 + num2;
        return '두개의 숫자를 넣어주세요';
    }
    return sum;
}
exports.sum = sum;
function inverseBool(value) {
    return !value;
}
exports.inverseBool = inverseBool;
function sumOfAll(arr) {
    return arr.reduce(function (num1, num2) { return num1 + num2; });
}
exports.sumOfAll = sumOfAll;
function testTuple(a) {
    return a.join('').toString();
}
exports.testTuple = testTuple;
// enum Color{Red = 1, Green, Bule}
function testEnum(color) {
    return color;
}
exports.testEnum = testEnum;
