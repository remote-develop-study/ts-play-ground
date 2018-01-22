export function makeString(greeting: string, year: number): string {
  return ((typeof greeting !== 'string' || typeof year !== 'number')
            ? '거절한다'
            : `${greeting} ${year}년 반가워`);
}

export function sum(num1: number, num2: number): string | number {
  return ((!num1 || !num2)
            ? '두개의 숫자를 넣어주세요'
            : num1 + num2);
}

export function inverseBool(flag: boolean): boolean {
  return !flag;
}

export function sumOfAll(arr: Array<number>): number {
  return arr.reduce((prev, curr) => prev + curr);
}

export function testTuple(x: [string, boolean, number]): string {
  return x.join(' ');
}

export function testEnum(color: Color): string {
  const colorName: string = color.Green;

  return colorName;
}