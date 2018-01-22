export function makeString(a: string, b: number) {
  let firstIsString :Boolean = typeof a === 'string';
  let secondIsNumber :Boolean = typeof b === 'number';

  if (firstIsString && secondIsNumber) {
    return `${a} ${b}년 반가워`;
  }

  return '거절한다';
}

export function sum(a: number, b: number) {
  if (a && b) {
    return a + b;
  }
  
  return '두개의 숫자를 넣어주세요';
}

export function inverseBool(a: boolean) {
  return a ? false : true;
}

export function sumOfAll(numbers: Array<number>) {
  let result = numbers.reduce((a, b) => a + b, 0);
  return result;
}

export function testTuple(arr: [string, boolean, number]) {
  return arr.join(' ');
}

export function testEnum(color: Color) {
  return color.Green;
}
