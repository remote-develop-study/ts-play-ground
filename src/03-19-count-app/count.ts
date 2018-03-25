class Changenum {
  val: number;
  constructor(val: number) {
    this.val = val;
  }
  up():void {
    this.val++;
    document.getElementById('count-number').innerHTML = this.val.toString();
    // console.log(`${this.val}`);
  }
  down():void {
    this.val--;
    document.getElementById('count-number').innerHTML = this.val.toString();
    // console.log(`${this.val}`);
  }
}
let changenum:Changenum = new Changenum(0);
























// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var number: number;
number = 0;

function plus(): any {
  number++;
  console.log(number);
  // var a = document.getElementById('count-number').innerText;
  return number;
}
function minur(): any {
  number--;
  console.log(number);
  return number;
}
class Tas extends Changenum {

}