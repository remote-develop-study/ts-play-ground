/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(value:number) {
  var a = 40, b = 20;
  if (value) {
    var c = a + b;
    return c;
  }
    // var d = false;
    return undefined;
}

// 스코프 문제
export function makeLoop(num:string) {
  var num = '';
  for (var i=0; i<5; i++) {
    num += '1';
  }
  return num;
}

interface obj {
  color: string[],
  number: number[],
  goods: string,
  age: number[]
}

// 배열의 index값
export function getColorByIndex({color}:obj,index:number) {
  return color[index];
}

// 이렇게 해도되나..
export function getSumOfNumArray({number}:obj) {
  var sum = number.reduce((a,b)=>a+b)
  return sum;
}

// *---여기서부터 풀기
//최대값 찾기
export function getOldestAge({age}:obj) {
  // var maxNum = age.reduce
  var num = age.sort();
  return num[0];
}

// 배열값 바꾸기
export function getChangedText({goods}:obj) {
  var str = goods;
  return str.replace('Air','Pro');
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray({number}:obj) {
  var array = number[1];
  return array;
}
