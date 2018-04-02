interface Cals {
  puls();
  minur();
  cross();
  sub();
}
// 동적으로 받아서 해야할거 같은데
let num: number[] = [1, 2];
console.log(...num);

function Plus(num: number[]) {
  var sum = num.reduce(addFnc, 0);
  function addFnc(a, b) {
    return a + b;
  }
  return num;
}

function Minur(n1: number, n2: number) {
  return n1 - n2;
}
function Cross() {}
function Sub() {}
