interface polygon {

}

class Polygon {
  
}

// *---- 원 넓이 구하기
class Circle extends Polygon {
  private py: number = 3.14;
  private r: number = 2;
  constructor(r: number) {
    super();
    this.r = r;
  }
  
  circleArea(r:number):void {
    console.log('aa');
    
    let circleWidth = this.r ^ 2 * this.py;
    console.log(circleWidth);
  }
}
let circleArea:Circle = new Circle(this.r);

class Rect extends Polygon {
  // *---- 사각형 넓이 구하기
  private width: number;
  private height: number;
  rectArea() {

  }
}


// *---- 사다리꼴 넓이 구하기
class Trapezoid extends Polygon {
  private topBr: number;
  private bottomBr: number;
  private height: number;
  trapezoidArea() {

  }
}

class Greeter {
  pi: number = 3.14;
  num : number;
  constructor(num: number) {
      this.num = num;
  }
  greet() {
    //  this.pi
      return this.num*this.num*this.pi;
  }
}


let greeter: Greeter;
greeter = new Greeter(3);
console.log(greeter.greet());