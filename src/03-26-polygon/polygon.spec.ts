import { circle, rect, trapezoid, calculateCircle, getArea } from './polygon';
import { } from 'jest'

describe('다각형 구하기', function () {
  it('반지름의 인자를 받아 원의 넓이를 구한다.', function () {
    expect(circle(10)).toBe(314);
  })
  it('가로,세로 인자를 받아 사각형의 넓이를 구한다.', function() {
    expect(rect(5,4)).toBe(20);
  })

  it('아랫변,윗변,높이 값을 받아 사다리꼴의 넓이를 구한다.',function(){
      expect(trapezoid(8,4,4)).toBe(24);
  })
});

describe('파라미터를 체크하는 다각형의 넓이 함수',function(){
  it('숫자형타입만 계산이 가능합니다.',function(){
    expect(calculateCircle("10")).toBe("숫자형타입만 계산이 가능합니다.");
  })
  it('최소 한가지 값이 필요합니다.',function(){
    expect(calculateCircle()).toBe("최소 한가지 값이 필요합니다.");
  })
  it('반지름은 0보다 커야 합니다.',function(){
    expect(calculateCircle(-1)).toBe("반지름은 0보다 커야 합니다.");
  })
  
});

describe('모든 넓이 값을 얻을 수 있는 getArea 함수',function(){
  it('원의 넓이 값 출력',function(){
    expect(getArea('circle',10)).toBe(314);
  })
  it('사각형의 넓이 값 출력',function(){
    expect(getArea('rect',10,15)).toBe(150);
  })
  it('사다리꼴의 넓이 값 출력',function(){
    expect(getArea('trapezoid',10, 15, 12)).toBe(150);
  })
})