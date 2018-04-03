"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
describe('타입스크립트 스터디 1월 30일 스프린트 인터페이스', function () {
    describe('num(number)를 인자로 받는 함수 SquareFunc를 작성합니다', function () {
        it('Squarefunc를 구현하는 squarefunc 함수를 작성합니다', function () {
            expect(interfaces_1.squarefunc(20)).toBe(20 * 20);
        });
    });
    describe('id(문자열)와 pw(문자열) 속성을 가지는 IUser 인터페이스를 작성합니다.', function () {
        it('IUser Interface를 만족하는 객체를 받아서 id를 반환하는 함수를 작성합니다.', function () {
            expect(interfaces_1.getUserId({ id: 'dev', pw: 'abc' })).toBe('dev');
        });
    });
    describe('위에서 작성한 IUser 인터페이스에 job(문자열) 속성을 추가합니다. 이 속성은 없을수도 있는 속성입니다.', function () {
        it('IUser 인터페이스를 만족하는 객체를 받아서 job을 반환하는 함수(job이 없다면 "백수" 반환)', function () {
            expect(interfaces_1.getUserJob({ id: 'dev', pw: 'abc', job: '노예' })).toBe('노예');
            expect(interfaces_1.getUserJob({ id: 'dev', pw: 'abc' })).toBe('백수');
        });
    });
    describe('IUser 배열을 받아 id를 기준으로 오름차순 정렬하여 정렬된 IUser 배열을 반환하는 함수의 인터페이스를 작성합니다.', function () {
        it('위에 작성한 인터페이스를 만족하는 함수를 작성합니다.', function () {
            var users = [
                { id: 'bbb', pw: '***' },
                { id: 'abc', pw: '***' }
            ];
            expect(interfaces_1.sortUser(users)).toEqual([{ id: 'abc', pw: '***' }, { id: 'bbb', pw: '***' }]);
        });
    });
    describe('name(문자열), borned(숫자), getAge() 함수를 갖는 IHuman 인터페이스를 작성합니다.', function () {
        it('아래 테스트를 통과하는 IHuman 인터페이스를 implements하는 클래스를 작성합니다. 모든 함수는 IHuman 객체를 입력받습니다.', function () {
            var human = {
                name: 'sungmin',
                borned: 1992,
                getAge: function () { return new Date().getFullYear() - this.borned; }
            };
            expect(interfaces_1.getName(human)).toBe('sungmin');
            expect(interfaces_1.getBorned(human)).toBe(1992);
            expect(human.getAge()).toBe(26);
        });
    });
});
