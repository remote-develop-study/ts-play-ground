/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(logicalValue: boolean): number | undefined {
  let a = 40, b = 20;
  if (logicalValue) {
    let c: number = a + b;
    return c
  }
  return undefined;
}

// 스코프 문제
export function makeLoop() {
  let i: number = 5;
  let result: string = '';
  while (i--) {
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

export function getColorByIndex(obj: object, idx: number): string | boolean {
  let { color } = obj;
  let length: number = color.length;
  if (idx < length) {
    return color[idx];
  } else {
    return 'index out of range';
  }
}

export function getSumOfNumArray(obj: obj): number {
  let { number } = obj;
  return number.reduce((prev: number , cur: number) => prev + cur);
}

export function getOldestAge(obj: obj): number {
  let { age } = obj;
  return age.reduce((prev, cur) => prev > cur ? prev : cur)
}

export function getChangedText(obj: obj): string {
  let { goods } = obj;
  return goods.replace('Air', 'Pro');
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray(numbers: number[]): number {
  let [first, second, ...rest] = numbers
  return second;
}
