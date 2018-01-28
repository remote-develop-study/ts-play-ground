export function makeString(insamal: string, year: number) {
  if(typeof insamal !== 'string' || typeof year !== 'number') {
    return '거절한다'
  }
  return `${insamal} ${year}년 반가워`;
}

export function sum(int1: number, int2: number) {
  if(!int1 && !int2) {
    return '두개의 숫자를 넣어주세요';
  }
  return int1 + int2;
}

export function inverseBool(value: boolean) {
  return value = !value;
}

export function sumOfAll(values: Array<number>) {
  let result = 0;
  values.map((item) => {
    result += item;
  });
  return result;
}

export function testTuple(values: [any]) {
  let result = '';
  values.map(item => {
    result += item + ' ';
  });
  return result.trim();
}

export function testEnum(value: Color) {
  return value;
}