import ArithmeticOperation from './Operator';
import { } from 'jest'

describe('두항의 연산자 테스트', function () {
  it('첫번쨰인자로 숫자, 두번째 인자로 숫자를 더하는 연산함수', function () {
    expect(ArithmeticOperation.plus(1, 2)).toBe(3);
  })

  it('첫번쨰인자로 숫자, 두번째 인자로 숫자를 빼는 연산함수', function () {
    expect(ArithmeticOperation.subtract(1, 2)).toBe(-1);
  })

  it('첫번쨰인자로 숫자, 두번째 인자로 숫자를 곱하는 연산함수', function () {
    expect(ArithmeticOperation.multiply(1, 2)).toBe(2);
  })

  it('첫번쨰인자로 숫자, 두번째 인자로 숫자를 나누는 연산함수', function () {
    expect(ArithmeticOperation.division(1, 2)).toBe(0.5);
  })
});