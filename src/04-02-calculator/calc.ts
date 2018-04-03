interface Cals {
  puls();
  minur();
  cross();
  sub();
}
// 동적으로 받아서 해야할거 같은데
let num: number[] = [1, 2];

function Plus(...num: number[]) {
  var sum = num.reduce(addFnc, 0);
  function addFnc(a, b) {
    return a + b;
  }
  return num;
}
console.log(Plus(1,2));

function Minur(n1: number, n2: number) {
  
  return n1 - n2;
}
function Cross(n1:number,n2:number) {
  return n1- n2;
}
function Sub() {}

let t:number = 3;
function Ab(){
  let n:number = 1;
  let x:number;
  while (n < 3) { // n: 0 1 2
    n++;          // n: 1 2 3
    x += n;       // x: 1 3 6
  }
  return t;
}