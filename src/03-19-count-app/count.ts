class Changenum {
  constructor(val: number) {
    val = this.val;
    // this.up = this.up.bind(this);
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
var number:number;

function plus():any{
  var b = console.log('플러스');
  return b;
}
function minur():any{
  var b = console.log('마이너');
  return b;
}


class Tas extends Changenum {

}