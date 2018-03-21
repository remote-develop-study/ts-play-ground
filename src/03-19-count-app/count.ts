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
class Tas extends Changenum{

}