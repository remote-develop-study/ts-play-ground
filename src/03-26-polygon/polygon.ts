// interface Polygon {
//   circle();  
// }

// *---간단?
var pi: number = 3.14;

// 원
export function circle(r: number): number {
  return r * r * pi;
}

export function rect(a: number, b: number): number {
  return a * b;
}

export function trapezoid(a: number, b: number, h: number) {
  return (a + b) * 0.5 * h;
}

// function calculateCircle(r: number) {
//   circle(3);
// }

function getArea(type:string, num1:number, num2:number, num3:number) {
  // 2번문제의 타입체크가하기
  
  // 3번문제 공통으로 묶기?
  if(type == "circle"){
    circle(3);
  }
  if(type == "rect"){
    rect(2,4);
  }
  if(type == "trapezoid"){
    trapezoid(2,4,5);
  }
}


