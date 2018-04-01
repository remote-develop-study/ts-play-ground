import { circle, rect, trapezoid } from './polygon';
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