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
    Circle.prototype.circleArea = function (r) {
        console.log('aa');
        var circleWidth = this.r ^ 2 * this.py;
        console.log(circleWidth);
    };
    return Circle;
}(Polygon));
var circleArea = new Circle(this.r);
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
var Greeter = /** @class */ (function () {
    function Greeter(num) {
        this.pi = 3.14;
        this.num = num;
    }
    Greeter.prototype.greet = function () {
        //  this.pi
        return this.num * this.num * this.pi;
    };
    return Greeter;
}());
var greeter;
greeter = new Greeter(3);
console.log(greeter.greet());
//# sourceMappingURL=polygon.js.map