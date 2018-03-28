var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Polygon = /** @class */ (function () {
    function Polygon() {
    }
    return Polygon;
}());
// *---- 원 넓이 구하기
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.py = 3.14;
        _this.r = 2;
        _this.r = r;
        return _this;
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
    Circle.prototype.circleArea = function (r) {
        console.log('aa');
        var circleWidth = this.r ^ 2 * this.py;
        console.log(circleWidth);
    };
    return Circle;
}(Polygon));
// var n=2;
var circleArea = new Circle(this.r);
// circle.circleArea();
// if
// circle
// *---- 사각형 넓이 구하기
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rect.prototype.rectArea = function () {
    };
    return Rect;
}(Polygon));
// *---- 사다리꼴 넓이 구하기
var Trapezoid = /** @class */ (function (_super) {
    __extends(Trapezoid, _super);
    function Trapezoid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Trapezoid.prototype.trapezoidArea = function () {
    };
    return Trapezoid;
}(Polygon));
// 3. 
//# sourceMappingURL=polygon.js.map