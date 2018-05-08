// export function makeString(greeting: string, year: number) {
//   return ((typeof greeting !== 'string' || typeof year !== 'number')
//             ? '거절한다'
//             : `${greeting} ${year}년 반가워`);
// }

// export function sum(num1: number, num2: number) {
//   return ((!num1 || !num2)
//             ? '두개의 숫자를 넣어주세요'
//             : num1 + num2);
// }

// export function inverseBool(flag: boolean) {
//   return !flag;
// }

// export function sumOfAll(arr: Array<number>) {
//   return arr.reduce((prev, curr) => prev + curr);
// }

// export function testTuple(x: [string, boolean, number]) {
//   return x.join(' ');
// }

// export function testEnum(color: Color) {
//   const colorName: string = color.Green;

//   return colorName;
// }
// 위에는 정답. 아래는 self-solve
export function makeString(str: string, year: number) {
  let sentence: string;
  if(typeof str !== 'string' && typeof year !== 'number'){
    sentence = '거절한다';
  }else{
    sentence = str+ ' '+year+'년 반가워';
  }
  return sentence;
}

export function sum(num1: number, num2: number) {
  if(!num1 || !num2){
    return '두개의 숫자를 넣어주세요';
  }else{
    return num1+num2;
  }
}

export function inverseBool(bool: boolean) {
  return !bool;
}

export function sumOfAll(arr: Array<number>) {
  return arr.reduce((prev, curr) => prev + curr);
}

export function testTuple(x:[string, booolean, number]) {
  return x.join(' ');
}

export function testEnum(color: Color) {

  return color;
}

