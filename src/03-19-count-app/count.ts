class Changenum {
  constructor(val: number) {
    val = this.val;
    this.up = this.up.bind(this);
  }
  val: number;
  up() {
    // val++;
    // return val;
    console.log('up');
  }
  down() {
    // val--;
    // return val;
    console.log('-');
  }
}

function plus():any{
  // let num:Changenum = new Changenum(val)
  var b = console.log('aa');
  // return b;
}

class Tas extends Changenum {

}