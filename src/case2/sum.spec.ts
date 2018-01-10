import sum from './sum';

describe('1 + 1', function() {
  it('1 더하기 1을 했을 때의 결과값은 2입니다', function() {
    expect(sum(1, 1)).toBe(2);
  })
});