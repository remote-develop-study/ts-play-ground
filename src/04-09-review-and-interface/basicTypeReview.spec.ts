import {
  tupleFunc,
  enumFunc,
  noAny,
  voidMsg,
  someUnion,
  voidFunc,
  neverFunc,
} from './basicTypeReview';

describe('TS 스터디 4월 9일 ES6 리뷰', () => {
  const str: string = '문자열';
  const num: number = 999;

  // 한가지 타입으로 이루어진 배열이 아닐 경우 유용하게 사용 가능!
  it('tuple', () => {
    expect(tupleFunc(['튜플', 99])).toBe('튜플,99');
  });

  // 커스텀한 인덱스를 가질 수 있는걸로 보인다..하지만 활용 케이스는 뭘까..
  it('enum', () => {
    expect(enumFunc('open')).toBe('openDoor');
  });

  // any의 사용은 금하는게 좋다는 것....
  it('any', () => {
    expect(noAny(str)).toBe(str);
    expect(noAny(num)).toBe(num);
    expect(noAny(['11', '22'])).toEqual(['11', '22']);
  });

  // 두가지 이상의 타입을 지정해줘야할때 심플하고 유용하게 사용할 수 있다
  // any 친구같다는 느낌이.. 든다..
  it('union', () => {
    expect(someUnion(str)).toBe(str);
    expect(someUnion(num)).toBe(num);
  });

  // 값을 가질 수도 있고 값도 반환할 수 있지만 void 선언을 통해 반환하지 않는 함수 구현 가능
  it('void', () => {
    const assignNoAnyFunc = 'haha';
    voidFunc(assignNoAnyFunc);

    expect(voidMsg).toBe(assignNoAnyFunc);
  });

  // 값도 없고 반환도 없다. 결코 발생하지 않는 값! 주로 사용되는 케이스는 예외처리
  it('never', () => {
    const errMsg = 'error!!!';

    expect(neverFunc(errMsg)).toBe(errMsg);
  });
});