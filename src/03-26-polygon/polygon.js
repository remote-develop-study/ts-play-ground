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
    function Circle(num) {
        var _this = _super.call(this) || this;
        _this.pi = 3.14;
        _this.num = num;
        return _this;
    }
    Circle.prototype.getArea = function () {
        //  this.pi
        return this.num * this.num * this.pi;
    };
    return Circle;
}(Polygon));
var circle = new Circle(3);
console.log('원의 넓이 ' + circle.getArea());
// 공식이 여러가지가 있던데...
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(line1, line2, line3, line4) {
        var _this = _super.call(this) || this;
        // this.diagonal1 = diagonal1;
        _this.line1 = line1;
        _this.line2 = line2;
        _this.line3 = line3;
        _this.line4 = line4;
        return _this;
    }
    //가로지르는 대각선의 길이를 알 경우
    // getArea() {
    // }
    // 4개의 각 변의 길이를 알 경우
    Rect.prototype.getArea = function () {
        return (this.line1 * this.line2) / 2 + (this.line3 * this.line4) / 2;
    };
    return Rect;
}(Polygon));
var rect = new Rect(2, 2, 2, 2);
console.log('사각형의 넓이 ' + rect.getArea());
// *---- 사다리꼴 넓이 구하기
var Trapezoid = /** @class */ (function (_super) {
    __extends(Trapezoid, _super);
    function Trapezoid(topBr, bottomBr, height) {
        var _this = _super.call(this) || this;
        _this.topBr = topBr;
        _this.bottomBr = bottomBr;
        _this.height = height;
        return _this;
    }
    Trapezoid.prototype.trapezoidArea = function () {
        return;
    };
    return Trapezoid;
}(Polygon));
var trapezoid = new Trapezoid(4, 4, 5);
console.log('사다리꼴 넓이 ' + trapezoid.trapezoidArea());
//# sourceMappingURL=polygon.js.map