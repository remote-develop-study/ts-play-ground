export function makeString(str: string, year: number) {
  return typeof str === 'string' && typeof year === 'number' ? str + ' ' + year+'년 반가워' : '거절한다';
}

export function sum(num1: number, num2: number) {
  return typeof num1 === 'number' && typeof num2 === 'number' ? num1 + num2 : '두개의 숫자를 넣어주세요';
}

export function inverseBool(bool: boolean) {
  return !bool
}

export function sumOfAll(obj: number[]) {
  return obj.reduce((num1, num2) => num1 + num2);
}

export function testTuple(obj: [string, boolean, number]) {
  return obj.join(' ').toString();
}

export function testEnum(str: number) {
  return str;
}
