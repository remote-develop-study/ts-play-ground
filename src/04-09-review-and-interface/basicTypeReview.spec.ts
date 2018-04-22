// 테스트 케이스를 직접 만들어주세요!
import { tuple, defaultEnum, dayOfweek, anyVariable, errorFunc, myArray  } from './basicTypeReview';
import {} from 'jset'
describe('tuple에 대해 알아보자.', () => {
    it('1. tuple의 0번 인덱스의 값 number', () => {
        expect(typeof tuple[0]).toBe('number');
    });
    it('2. tuple의 1번 인덱스의 값 string', () => {
        expect(typeof tuple[1]).toBe('string');
    });
    it('3. tuple의 2번 인덱스의 값이 hi인가?', () => {
        expect(tuple[2]).toBe('hi');
    });
});
describe('enum에 대해 알아보자.', () => {
    it('1. 열거형 변수 기본값 defaultEnum.zero 값.', () => {
        expect(defaultEnum.zero).toBe(0);
    });
    it('2. 열거형 변수 지정값 dayOfweek.Monday 값', () => {
        expect(dayOfweek.Monday).toBe(12);
    });
    it('3. 열거형 변수 지정값 값으로 키 알아내기.', () => {
        expect(defaultEnum["one"]).toBe(1);
    });
});

describe('any 타입에 대해 알아보자.', () => {
    it('1. any type변수의 type 값을 확인하자.', () => {
        expect(typeof anyVariable).toBe('string');
    });
    it('2. any type변수의 값을 확인하자.', () => {
        expect(anyVariable).toBe('문자열이 와도 괜찮다.');
    });
});

describe('never타입에 대해 알아보자.', () => {
    it('1. never타입.', ()=> {
        // expect(errorFunc('에러 함수 콜')).toBe('');
    });
});

describe('unio타입에 대해 알아보자.', ()=> {
    it('1.myArray[2] 값의 type은 string', ()=> {
        expect(typeof myArray[2]).toBe('string')
    });
});



