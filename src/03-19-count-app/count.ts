class Count {
  initNumber: number = 0;//초기값 0 
  result:HTMLElement;//결과값
  decrement:HTMLElement;//마이너스
  increment:HTMLElement;//플러스
  constructor () { 
    this.result = document.getElementById("count-number");
    this.decrement = document.getElementById("decrement-btn");
    this.increment = document.getElementById("increment-btn");
  }
  init() {
    this.decrement.addEventListener("click", (e:Event) => {
      this.minus();
    });
    this.increment.addEventListener("click", (e:Event) => {
      this.plus()
    });
  }
  plus(){
    console.log(this.initNumber++);
    let str = this.initNumber;
    this.result.innerText = String(str);
  }
  minus(){
    console.log(this.initNumber--);
    let str = this.initNumber;
    this.result.innerText = String(str);
  }
}
window.onload = () => {
  var count = new Count();
  count.init();
};