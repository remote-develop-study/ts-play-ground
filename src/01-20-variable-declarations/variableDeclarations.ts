/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(flag:boolean) {
  let a = 40, b = 20;
  if (true) {
    var c = a + b;
    return c;
  }
  return undefined;
}

// 스코프 문제
export function makeLoop() {
  let result = '';
  // for문으로 1을 다섯번 리턴 ???
  for( let i = 1; i < 6; i++ ) {
    result += '1'
  }
  return result;
}

interface obj {
  color: string[],
  number: number[],
  goods: string,
  age: number[]
}

export function getColorByIndex( {color}: obj, index: number): string {
  return color[index];
}

export function getSumOfNumArray({number}: obj): number {
  return number.reduce((v1, v2) => v1 + v2, 0);
}

export function getOldestAge({age}: obj): number {
  return age.reduce((v1, v2) => v1 < v2 ? v2: v1);
}

export function getChangedText({goods}: obj, message: string): string {
  return goods = message;
}

//배열의 2번째 값을 리턴하시오. gg
export function getSecondValueOfArray(questionParam: number[]) {
  return questionParam[1];
}
