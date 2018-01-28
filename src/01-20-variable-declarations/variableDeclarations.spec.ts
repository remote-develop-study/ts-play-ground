import { makeLoop, blockScope, getColorByIndex, getSumOfNumArray, getOldestAge, getChangedText, getSecondValueOfArray } from './variableDeclarations';

describe('타입스크립트 스터디 1월 20일 스프린트 기본 타입', function () {
  it('매개변수로 boolean 값을 넣어 true일때 c를 반환하고 false일때 undefined를 반환합니다. 에러를 수정해주세요', function () {
    expect(blockScope(true)).toBe(60);
    expect(blockScope(false)).toBe(undefined);
  })
  it('for문으로 문자열 1을 5번 리턴하여 문자열 11111 이 나오도록 해주세요', function () {
    expect(makeLoop()).toBe('11111');
  })
  interface obj {
    color: string[],
    number: number[],
    goods: string,
    age: number[]
  }
  let obj: obj = {
    color: ["red", "blue", "green", "pink", "white"],
    number: [1, 3, 5, 7],
    goods: "MacBook Air",
    age: [60, 3, 5, 15, 30, 6]
  }
  it('객체와 index를 받아 destructuring 하여 해당 index의 값을 반환하는 함수를 만드세요', function () {
    expect(getColorByIndex(obj, 0)).toBe("red");
    expect(getColorByIndex(obj, 1)).toBe("blue");
    expect(getColorByIndex(obj, 2)).toBe("green");
    expect(getColorByIndex(obj, 3)).toBe("pink");
    expect(getColorByIndex(obj, 4)).toBe("white");
    expect(getColorByIndex(obj, 5)).toBe("index out of range");
  })
  it('객체를 받아 number를 destructuring 하여 number의 총합을 리턴해주세요', function () {
    expect(getSumOfNumArray(obj)).toBe(16);
  })
  it('객체를 받아 age를 destructuring 하여 age의 가장 큰 수를 리턴해주세요', function () {
    expect(getOldestAge(obj)).toBe(60);
  })
  it('객체를 받아 goods를 destructuring 하여 goods의 값을 MacBook Pro로 바꿔주세요', function () {
    expect(getChangedText(obj, 'MacBook Pro')).toBe('MacBook Pro');
  })
  it('배열을 받아 destructuring 하여 배열의 3을 리턴해주세요', function () {
    expect(getSecondValueOfArray(obj.number)).toBe(3);
  })
});