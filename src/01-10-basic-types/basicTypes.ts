
export function makeString(word:string,num:number) {
  return(typeof word === 'string' && typeof num === 'number') ? '${word} ${년 반가워}' : '거절한다';
  //파라미터의 자료형 비교. typescript 에서 비교는 ===, 

export function sum(num1:number , num2:number) {
  // return(() ? a + b : '두개의 숫자를 넣어주세요';
  
}

export function inverseBool(value : boolean) {
  return(!value);
}

export function sumOfAll(arr: number[]) {
  return arr.reduce((num1, num2) => num1 + num2 );
}

export function testTuple(a:any) {
  return a.join('').toString();
}

export function testEnum(a:number) {
  return a;
}
