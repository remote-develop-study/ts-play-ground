interface polygon {

}

class Polygon {
  // fun:number;
  // i:number;
  // py:number = 3.14;
  // }
  // getArea(fun:number,i){

  // }
//   pi:number = 3.14;
//   r:number;
//   constructor(r:number){
//     this.r = r;
//   }
//   getArea():void{
//     console.log(`${this.pi}`);
//   }
// }
// var pi = 3.14;
// let getArea:Polygon = new Polygon(pi);
}

// *---- 원 넓이 구하기
class Circle extends Polygon {
  private py: number = 3.14;
  private r: number;
  constructor(r: number) {
    super();
    this.r = r;
  }
  // get width(){
  //   var width=(this.r*this.r)*this.pi;
  //   return width;
  // }
  // set width(width:number){
  //   if(width < -1){
  //     console.log('반지름은 0보다 커야 합니다');
  //   }
  // }
  circleArea(r:number):void {
    let circleWidth = this.r ^ 2 * this.py;
    console.log(circleWidth);
    console.log('aa');
  }
}
var n=2;
let circleArea:Circle = new Circle(n);
// circle.circleArea();
// if
// circle



// *---- 사각형 넓이 구하기
class Rect extends Polygon {
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


