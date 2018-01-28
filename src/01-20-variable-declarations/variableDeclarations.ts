/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(flag: boolean): number | undefined {
  let a = 40, b = 20;

  if (flag) {
    let c = a + b;

    return c;
  }
  
  return flag || undefined;
}

// 스코프 문제
export function makeLoop(): string {
  let result: string = '';
  
  for (let i = 0; i < 5; i++) {
    result += '1';
  }

  return result;
}

interface obj {
  color: string[],
  number: number[],
  goods: string,
  age: number[]
}

export function getColorByIndex({ color }: obj, index: number): string {
  return color.length <= index ? 'index out of range' : color[index];
}

export function getSumOfNumArray({ number }: obj): number {
  return number.reduce((prev, curr) => prev + curr);
}

export function getOldestAge({ age }: obj): number {
  return Math.max(...age);
}

export function getChangedText({ goods }: obj): string | false {
  return goods.includes('Air') && goods.replace('Air', 'Pro');
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray(arr: Array<number>): number {
  const [, second] = arr;

  return second;
}
