"use strict";
// 클래스로 해보려다 안됫던거
// interface Calculator {
//   sum(num: number);
//   minur(num: number);
//   div(num: number);
//   multi(num: number);
//   res: number;
// }
// 스프레드 연산자를 사용한 배열을 사용하는데 인터페이스에서 선언하는 방법????
var sum;
sum = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    // console.log('더하기 '+res);
    return res;
};
function minur() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res -= arguments[i];
    }
    console.log('빼기 ' + res);
    return this;
}
function multi() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res *= arguments[i];
    }
    console.log('곱하기 ' + res);
    return this;
}
function div() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        res /= arguments[i];
    }
    console.log('나누기 ' + res);
    return this;
}
// function reset(...a:number[]):Tuper{
//   return this.a;
// }
// new Tuper().sum(1).minur(2)
// console.log(sum(1,2,3));  //6
console.log(minur(1)); //6-1 = 5
console.log(multi(2)); //5*2 = 10
console.log(div(2)); //10/2 = 5
