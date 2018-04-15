import { double, greet, minNumbers, newArray, testResults, scientist } from './es6AndTS';

describe('TS 스터디 4월 9일 ES6 리뷰', () => {
  // 1.
  it('화살표 함수 반환 확인', () => {
    expect(double(3)).toBe(6);
  });

  // 2
  it('기본 매개변수 반환 확인', () => {
    const name: string = '이름을 넣어주세요';

    expect(greet(name)).toBe(name);
  });

  // 3
  it('기본 매개변수 확인', () => {
    expect(greet()).toBe('Max');
  });

  // 4
  it('전개 연산자 확인', () => {
    expect(minNumbers([-3, 33, 38, 5])).toBe(-3);
  });

  // 5
  it('배열 분해 확인', () => {
    expect(testResults([3.89, 2.99, 1.38])).toBe('3.89, 2.99, 1.38');
  });

  it('객체 분해 확인', () => {
    expect(scientist({ firstName: 'Will', experience: 12 })).toEqual({
      firstName: 'Will',
      experience: 12,
    });
  });
});
