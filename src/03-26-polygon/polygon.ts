interface polygon{

}

class Polygon {
  constructor(parameters) {
  }

}
// let getArea:Polygon = new Polygon();


// *---- 원 넓이 구하기
class Circle extends Polygon{
  private pi:number = 3.14;
  private r:number;
  // get width(){
  //   var width=(this.r*this.r)*this.pi;
  //   return width;
  // }
  // set width(width:number){
  //   if(width < -1){
  //     console.log('반지름은 0보다 커야 합니다');
  //   }
  // }
  circleArea(){
    var circleWidth = this.r^2*this.pi;
    console.log(circleWidth);
  }
}
let circle:Circle = new Circle(10);
// circle.circleArea();
// if
// circle



// *---- 사각형 넓이 구하기
class Rect extends Polygon{
  private width:number;
  private height:number;
  rectArea(){

  }
}


// *---- 사다리꼴 넓이 구하기
class Trapezoid extends Polygon{
  private topBr:number;
  private bottomBr:number;
  private height:number;
  trapezoidArea(){

  }
}