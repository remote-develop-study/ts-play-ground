interface polygon {
}
class Polygon {
}

// *---- 원 넓이 구하기
class Circle extends Polygon{
  pi: number = 3.14;
  num : number;
  constructor(num: number) {
    super();
      this.num = num;
  }
  getArea() {
    //  this.pi
      return this.num*this.num*this.pi;
  }
}
let circle: Circle = new Circle(3);
console.log('원의 넓이 '+circle.getArea());

// 공식이 여러가지가 있던데...
class Rect extends Polygon {
  diagonal1: number;
  diagonal2: number;
  line1:number;
  line2:number;
  line3:number;
  line4:number;
  constructor(line1:number,line2:number,line3:number,line4:number){
    super();
    // this.diagonal1 = diagonal1;
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line4 = line4
  }
  //가로지르는 대각선의 길이를 알 경우
  // getArea() {

  // }
  // 4개의 각 변의 길이를 알 경우
  getArea():number{
    return (this.line1*this.line2)/2 + (this.line3*this.line4)/2
  }
}
let rect: Rect = new Rect(2,2,2,2);
console.log('사각형의 넓이 '+rect.getArea());


// *---- 사다리꼴 넓이 구하기
class Trapezoid extends Polygon {
  private topBr: number;
  private bottomBr: number;
  private height: number;
  constructor(topBr:number, bottomBr:number, height:number){
    super();
    this.topBr = topBr;
    this.bottomBr = bottomBr;
    this.height = height;
  }

  trapezoidArea():number {
    return 
  }
}
let trapezoid: Trapezoid = new Trapezoid(4,4,5);
console.log('사다리꼴 넓이 '+trapezoid.trapezoidArea());



