
export function makeString(word: string, num: number) {
  return (typeof word === 'string' && typeof num === 'number') ? '${word} ${년 반가워}' : '거절한다';
  //파라미터의 자료형 비교. typescript 에서 비교는 ===, 
}

export function sum(num1: number, num2: number) {
  if (!num1 && !num2) {
    let sum = num1 + num2;
    return '두개의 숫자를 넣어주세요';
  }
  return sum;
}

export function inverseBool(value: boolean) {
  return !value;
}

export function sumOfAll(arr: number[]) {
  return arr.reduce((num1, num2) => num1 + num2);
}

export function testTuple(a: any) {
  return a.join('').toString();
}

// enum Color{Red = 1, Green, Bule}
export function testEnum(color: number) {
  return color;
}

