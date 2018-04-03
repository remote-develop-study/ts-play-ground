"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basicTypes_1 = require("./basicTypes");
describe('타입스크립트 스터디 1월 10일 스프린트 기본 타입', function () {
    it('첫번째로 인자로 문자열 안녕 두번째로 인자로 숫자형 2018을 넣어 테스트를 돌립니다', function () {
        expect(basicTypes_1.makeString('안녕', 2018)).toBe('안녕 2018년 반가워');
    });
    it('맞지 않는 타입의 파라미터를 넣었을 때 경고를 `거절한다`라는 반환값을 돌려줍니다', function () {
        expect(basicTypes_1.makeString(1, '2018')).toBe('거절한다');
    });
    it('1 + 1의 값을 받아 순수 함수로 더 하여 2를 반환한다', function () {
        expect(basicTypes_1.sum(1, 1)).toBe(2);
    });
    it('매개변수가 없을 때는 `두개의 숫자를 넣어주세요`를 반환한다', function () {
        expect(basicTypes_1.sum()).toBe('두개의 숫자를 넣어주세요');
    });
    it('true를 넣으면 false를 false를 넣으면 true를 반환한다', function () {
        expect(basicTypes_1.inverseBool(true)).toBe(false);
    });
    it('숫자로된 배열의 요소를 모두 더하여 반환한다', function () {
        expect(basicTypes_1.sumOfAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
    });
    it('튜플 타입을 활용하여 입력한대로를 그대로 반환합니다', function () {
        expect(basicTypes_1.testTuple(['가', false, 123])).toBe('가 false 123');
    });
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    it('Red는 1이므로 Green은 2가 나와야한다', function () {
        expect(basicTypes_1.testEnum(Color.Green)).toBe(2);
    });
});
