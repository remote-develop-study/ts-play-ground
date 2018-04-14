import { tupleFn, EnumFn, anyFn1, anyFn2, unionFn, voidFn } from './basicType';

describe('총정리 1편 기본타입', function () {
    it('tuple 정리 인자의 인덱스와 타입을 넣어 맞는지 확인', function () {
        expect(tupleFn(1, 'string')).toBe(true);
    });
    enum Color { Red = 1, Green, Blue }
    it('enum 테스트', function () {
        expect(EnumFn(Color.Green)).toBe(2);
    });
    it('any 테스트: any 타입 값 출력', function () {
        expect(anyFn1(1)).toBe('string');
    });
    it('any 테스트: number 타입 값 출력', function () {
        expect(anyFn2(2)).toBe(2);
    });
    it('union 테스트: data 타입이 string인지 boolean값 출력', function () {
        expect(unionFn(1)).toBe(false);
    });
    it('void 테스트: num에 더하기 1을 해도 리턴값이 없으므로 undefined 출력', function () {
        expect(voidFn(1)).toBe(undefined);
    });
});