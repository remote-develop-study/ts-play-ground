import { simple, sumAll, sumAllArrow, strConcatNum } from './introduce';

describe('Generic 1 - simple', () => {
  it('간단한 제네릭 함수 작성', () => {
    expect(simple<number>(503)).toBe('number');
    expect(simple<string>('ABC')).toBe('string');
    expect(simple<boolean>(true)).toBe('boolean');
  });
});

describe('Generic 2 - array', () => {
  it('매개변수 배열의 값을 모두 더하여 반환', () => {
    expect(sumAll<number>([1,2,3,4,5])).toBe(15);
  });

  it('매개변수 배열의 값을 모두 더하여 반환', () => {
    expect(sumAllArrow<number>([1, 2, 3, 4, 5])).toBe(15);
  });
});

describe('Generic 3 - with Union & extends', () => {
  it('string + number', () => {
    expect(strConcatNum<string | number>('abc', 123)).toBe('abc123');
  });
});