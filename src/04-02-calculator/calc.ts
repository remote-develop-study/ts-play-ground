
// 클래스로 해보려다 안됫던거
// interface Calculator {
//   sum(num: number);
//   minur(num: number);
//   div(num: number);
//   multi(num: number);
//   res: number;
// }

// // 1. 함수에서 반환값 에러
// // 2. 함수들 단독적이 아닌 묶어서 return
// // 의문점1 : 초기값을 0으로 잡았는데 for문을 1부터 해야 값이 정확히 나오는지

// class Calc implements Calculator {
//   res: number;
//   // private res: number = 0; //초기값
//   // a: number[];

//   // constructor(public value: number, ...a: number[]) {
//   //   this.value = a;
//   // }
//   sum(num: number, ...a: number[]): Calculator {
//     for (let i = 1; i < arguments.length; i++) {
//       num += arguments[i];
//     }
//     console.log("aa");
//     return this;
//   }

//   minur(res: number, ...a: number[]) {
//     // let res = 0;
//     for (let i = 1; i < arguments.length; i++) {
//       res -= arguments[i];
//     }
//     return res;
//   }

//   div(res: number, ...a: number[]) {
//     for (let i = 1; i < arguments.length; i++) {
//       res *= arguments[i];
//     }
//     return res;
//   }

//   multi(res: number, ...a: number[]) {
//     for (let i = 1; i < arguments.length; i++) {
//       res /= arguments[i];
//     }
//     return res;
//   }
// }
// console.log(Calc.prototype.sum(2, 5), Calc.prototype.minur(4));
// console.log(Calc.prototype.minur(2));

interface Tuper {
  res:number;
  sum(a: number[]): number;
  minur(a: number[]): number;
  multi(a: number[]): number;
  div(a: number[]): number;
}

// 스프레드 연산자를 사용한 배열을 사용하는데 인터페이스에서 선언하는 방법????
let sum:Tuper;
sum = function (...a: number[]): number {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  // console.log('더하기 '+res);
  return res;
}

function minur(...a: number[]): Tuper {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res -= arguments[i];
  }
  console.log('빼기 '+res);
  return this;
}

function multi(...a: number[]): Tuper {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res *= arguments[i];
  }
  console.log('곱하기 '+res);
  return this;
}

function div(...a: number[]): Tuper {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res /= arguments[i];
  }
  console.log('나누기 '+res);
  return this;
}

// function reset(...a:number[]):Tuper{
//   return this.a;
// }
// new Tuper().sum(1).minur(2)
// console.log(sum(1,2,3));  //6
console.log(minur(1)); //6-1 = 5
console.log(multi(2));  //5*2 = 10
console.log(div(2)); //10/2 = 5