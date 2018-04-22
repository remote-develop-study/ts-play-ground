// 테스트 케이스를 직접 만들어주세요!
import { defaultEnum, dayOfweek  } from './basicTypeReview';
import {} from 'jset'

describe('enum 공부.', () => {
    it('1. 열거형 변수 기본값 defaultEnum.zero 값.', () => {
        expect(defaultEnum.zero).toBe(0);
    });
    it('2. 열거형 변수 지정값 dayOfweek.Monday 값', () => {
        expect(dayOfweek.Monday).toBe(12);
    });
    it('3. 열거형 변수 지정값 값으로 키 알아내기.', () => {
        expect(dayOfweek[12]).toBe('Monday');
    });
});

