export function makeString(str: string, year: number): string {
  return (typeof str === 'string' && typeof year === 'number') ? `${str} ${year}년 반가워` : '거절한다';
}

export function sum(a: number, b: number): number | string {
  return arguments.length !== 0 ? a + b : '두개의 숫자를 넣어주세요';
}

export function inverseBool(value: boolean): boolean {
  return !value;
}

export function sumOfAll(numArray: number[]): number {
  return numArray.reduce((a, b) => a + b, 0);
}

export function testTuple(tupl: any[]): string {
  return tupl.join(' ');
}

enum Color { Red = 1, Green, Blue }

export function testEnum(c: Color): number {
  return c;
}
