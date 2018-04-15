// 테스트 케이스를 직접 만들어주세요!
import { tuple, tupleFirstValue, testEnum, anyLastValue, union} from './basicType';
import {} from 'jest'

describe('타입스크립트 스터디 4월 9일 복습', function () {
  it('튜플 타입 테스트 배열을 반환하냐 ?', function () {
    expect(tuple(["hello", 10])).toBe(["hello", 10]);
  })
  it('튜플 타입 테스트 의 첫번쨰 값은 hello 인가?', function () {
    expect(tupleFirstValue(["bye", 1])).toBe("bye");
  })
  enum Color { Red = 1, Green, Blue }
  it('enum 타입테스트 숫자를 반환하냐 ?', function () {
    expect(testEnum(Color.Green).toBe(2))
  })
  let list: any[] = [1, true, "free"];
  it('any 타입테스트 마지막 요소는 free인가?', function () {
    expect(anyLastValue(list).toBe("free"))
  })
  it('union 타입테스트 반환값으로 string, boolean, number가 오면 된다', function () {
    expect(union(1).toBe(1))
  }) 
});