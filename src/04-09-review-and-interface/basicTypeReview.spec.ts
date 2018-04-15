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

  it('tuple', () => {
    expect(tupleFunc(['튜플', 99])).toBe('튜플,99');
  });

  it('enum', () => {
    expect(enumFunc('open')).toBe('openDoor');
  });

  it('any', () => {
    expect(noAny(str)).toBe(str);
    expect(noAny(num)).toBe(num);
    expect(noAny(['11', '22'])).toEqual(['11', '22']);
  });

  it('union', () => {
    expect(someUnion(str)).toBe(str);
    expect(someUnion(num)).toBe(num);
  });

  it('void', () => {
    const assignNoAnyFunc = 'haha';
    voidFunc(assignNoAnyFunc);

    expect(voidMsg).toBe(assignNoAnyFunc);
  });

  it('never', () => {
    const errMsg = 'error!!!';

    expect(neverFunc(errMsg)).toBe(errMsg);
  });
});
