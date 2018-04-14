import Car from './interface';
import {} from 'jasmine';

describe('TS 스터디 4월 9일 인터페이스 자동차 만들기', () => {
  it('자동차를 주행합니다', () => {
    const BMW = new Car();

    // 엔진 시동
    BMW.start();

    // 주행 시작
    expect(BMW.drive(10)).toBe(true);
  });
});
