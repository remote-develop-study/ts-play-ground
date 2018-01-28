/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope() {
  var a = 40, b = 20;
  if (true) {
    var c = a + b;
  }
  return c;
}

// 스코프 문제
export function makeLoop() {
  return;
}

interface obj {
  color: string[],
  number: number[],
  goods: string,
  age: number[]
}

export function getColorByIndex() {
  return;
}

export function getSumOfNumArray() {
  return;
}

export function getOldestAge() {
  return;
}

export function getChangedText() {
  return;
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray() {
  return;
}
