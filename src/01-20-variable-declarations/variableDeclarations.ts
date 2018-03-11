/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(flag: boolean): number | undefined {
  let a = 40, b = 20;
  if (flag) {
    let c = a + b;
    return c
  }
  return undefined;
}

// 스코프 문제
export function makeLoop(): string {
  let result:string ='';
  for(let i = 0; i < 5; i++){
    result+='1';
  }
  return result;
}

let obj: obj = {
  color: ["red", "blue", "green", "pink", "white"],
  number: [1, 3, 5, 7],
  goods: "MacBook Air",
  age: [60, 3, 5, 15, 30, 6]
}

export function getColorByIndex({ color }: obj, index: number): string {
  return (index >= 0 && index < color.length) ? color[index] : "index out of range"
}
export function getSumOfNumArray({number}: obj): number {
  // let result:number;
  return number.reduce((prev, curt) => prev + curt);
}

export function getOldestAge({age}: obj): number {
  return Math.max(...age);
}

export function getChangedText({goods}: obj): string {
  return goods.replace('Air','Pro');
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray([, second] = {number} ): number {
  return second
}