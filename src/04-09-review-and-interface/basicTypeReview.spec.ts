// 테스트 케이스를 직접 만들어주세요!
import { pracTuple, pracEnum, pracAny,pracUnion, pracVoid, pracNever } from './basicTypeReview';

describe('TS 스터디 Tuple Test',() => {
    it('Tuple Test', () => {
        expect(pracTuple(['Tupel', 912, false])).toEqual(['Tupel',912,false]);
    });
    it('Enum Test', () => {
        expect(pracEnum(1)).toBe('rabbit');
    });
    it('Any Test', () => {
        expect(pracAny("김예슬입니다.")).toBe('저는 문자열입니다.');
        expect(pracAny(25)).toBe('저는 숫자입니다.');
        expect(pracAny(false)).toBe('저는 불린형입니다.');
    });
    it('Union Test', () =>{
        expect(pracUnion('문자열만 가능')).toBe('문자열만 가능');
        // expect(pracUnion(25)).toBe(25);
        // expect(pracUnion(true)).toBe('문자열만 대입 가능..');
    });
    it('Void Test', () => {
        expect(pracVoid()).toBe();
    });
    it('Never Test', () =>{
        const err = 'what';
        expect(pracNever()).toBe();
        expect(pracNever(err)).toBe();
        //뭐징?
    })
});