import {makeLoop, blockScope, objDestructuring, objArrayDestructuringLargest, objInArraySum, objChangeText, secondsVal} from './variableDeslarations';

describe('타입스크립트 스터디 1월 10일 스프린트 기본 타입', function () {
  it('블록스코프 문제입니다. a = 20,b = 40입니다. 매개변수로 불린값을 넣어 트루일때 c = a + b입니다. 에러를 수정해서 c를 리턴해주세요'), function () {
    expect(blockScope()).toBe(60)
  }
  it('스코프 문제입니다. 반복문을 통해 1을 5번 리턴해주세요.'), function () {
    expect(makeLoop()).toBe(11111)
  }
  let obj = {
      color: ["red", "blue", "green","pink", "white"],
      number: [1, 3, 5, 7],
      goods: "MacBook Air",
      age: [60,3,5,15,30,6]
  }
  it('object destructuring 문제입니다. 객체 obj color 중 green을 리턴해주세요'), function () {
    expect(objDestructuring()).toBe("green")
  }
  it('object destructuring 문제입니다. 객체 obj number의 총합을 리턴해주세요'), function () {
    expect(objInArraySum()).toBe(16)
  }
  it('object destructuring 문제입니다. 객체 obj age의 가장 큰 수를  리턴해주세요'), function () {
    expect(objArrayDestructuringLargest()).toBe(60)
  }
  it('object destructuring 문제입니다. 객체 obj의 goods를 MacBook Pro로 바꿔주세요'), function () {
    expect(objChangeText()).toBe('MacBook Pro')
  }
  it('array destructuring 문제입니다. 배열 obj number의 3을 리턴해주세요'), function () {
    expect(secondsVal()).toBe(3)
  }

});