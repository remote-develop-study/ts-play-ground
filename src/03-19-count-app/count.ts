class Changenum {
  constructor(val: number) {
    val = this.val;
    this.up = this.up.bind(this);
  }
  val: number;
  up() {
    // val++;
    // return val;
    console.log('+');
  }
  down() {
    // val--;
    // return val;
    console.log('-');
  }
}

function plus(val:number):any{
  let num:Changenum = new Changenum(val)
  return num.up();
}

class Tas extends Changenum {

}