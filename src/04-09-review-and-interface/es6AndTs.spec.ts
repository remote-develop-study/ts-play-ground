import { double, greet, minNumbers, newArray, testResults, scientist } from './es6AndTs';

describe('TS 스터디 4월 9일 ES6 리뷰', () => {
  it('화살표 함수 반환 확인', () => {
    expect(double(3)).toBe(6);
  });

  it('기본 매개변수 반환 확인', () => {
    const name: string = '이름을 넣어주세요';

    expect(greet(name)).toBe(name);
  })
  // greet 함수는 아무것도 반환을 안함..!

  it('기본 매개변수 확인', () => {
    expect(greet()).toBe('Max');
  });

  it('전개 연산자 확인', () => {
    expect(minNumbers([-3, 33, 38, 5])).toBe(-3);
  });

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
