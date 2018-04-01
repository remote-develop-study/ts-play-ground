import { circle, rect, trapezoid } from './polygon';
import calculateCircle from './calculateCircle';
import getArea from './getArea';

describe('타입스크립트 스터디 polygon!', () => {
  it('원의 넓이 구하기', () => {
    expect(circle(10)).toEqual(314);
  });

  it('사각형의 넓이 구하기', () => {
    expect(rect(10, 15)).toEqual(150);
  });

  it('사다리꼴 넓이 구하기', () => {
    expect(trapezoid(10, 15, 12)).toEqual(150);
  });

  describe('파라미터를 체크하는 다각형의 넓이 함수', () => {
    it('정상적인 결과', () => {
      expect(calculateCircle(10)).toEqual('정상적인 결과를 출력.');
    });
    it('숫자형 타입', () => {
      expect(calculateCircle("10")).toEqual('숫자형타입만 계산이 가능합니다.');
    });
    it('최소 한가지 값.', () => {
      expect(calculateCircle()).toEqual('최소 한가지 값이 필요합니다.');
    });
    it('반지름은 0 초과', () => {
      expect(calculateCircle(-1)).toEqual('반지름은 0보다 커야 합니다.');
    });
  });

  describe('모든 넓이 값을 얻을 수 있는 getArea 함수', () => {
    it('원의 넓이 값 출력.', () => {
      expect(getArea('circle', 10)).toEqual(314);
    });
    it('사각형의 넓이 값 출력.', () => {
      expect(getArea('rect', 10, 15)).toEqual(150);
    });
    it('사다리꼴의 넓이 값 출력.', () => {
      expect(getArea('trapezoid', 10, 15, 12)).toEqual(150);
    });
  });
});