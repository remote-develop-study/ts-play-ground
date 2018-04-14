// tuple
// 고정된 요소수 만큼의 자료형을 미리 선언후 배열을 표현
var x;
x = ['hello', 10]; // OK
// enum
// 열거형. 숫자값 집합에 이름을 지정한 것
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
;
var c1 = Color1.Green;
console.log(c1); // 1
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Green;
console.log(c2); // 2
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
;
var c3 = Color3.Blue;
console.log(c3); // 4
// any
// 타입 체크가 필요없는 변수는 any 타입으로 선언 = 아무거나 가능
var notSure = 4;
notSure = 'maybe a string instead';
// union
// 둘중하나의 타입이 될 수 있다.
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
// never
// 결코 발생하지 않는 값
var foo; // Okay
var bar = (function () { throw new Error('Throw my hands in the air like I just dont care'); })();
// void
// 반환값이 없을 경우
function Void() {
    console.log("hi");
}
