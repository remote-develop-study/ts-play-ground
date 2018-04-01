var hasNegativeNumber = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.filter(function (value) { return value < 0; }).length > 0;
};
var MyShapeAreaCalculator = /** @class */ (function () {
    function MyShapeAreaCalculator() {
    }
    MyShapeAreaCalculator.prototype.circle = function (radius) {
        return Math.sqrt(radius) * Math.PI;
    };
    MyShapeAreaCalculator.prototype.rect = function (wide, long) {
        return wide * long;
    };
    MyShapeAreaCalculator.prototype.trapezoid = function (height, base1, base2) {
        return ((base1 + base2) / 2) * height;
    };
    MyShapeAreaCalculator.prototype.calculateCircle = function (radius) {
        if (hasNegativeNumber(radius))
            throw new Error("반지름은 0 보다 커야 합니다");
        return this.circle(radius);
    };
    MyShapeAreaCalculator.prototype.calculateRect = function (wide, long) {
        if (hasNegativeNumber(wide, long))
            throw new Error("가로, 세로의 길이는 0 보다 커야 합니다");
        return this.rect(wide, long);
    };
    MyShapeAreaCalculator.prototype.calculateTrapezoid = function (height, base1, base2) {
        if (hasNegativeNumber(height, base1, base2))
            throw new Error("높이나 각 변의 길이는 모두 0 보다 커야 합니다.");
        return this.trapezoid(height, base1, base2);
    };
    MyShapeAreaCalculator.prototype.getArea = function (shapeName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        switch (shapeName) {
            case 'circle':
                var radius = args[0];
                return this.calculateCircle(radius);
            case 'rect':
                var wide = args[0], long = args[1];
                return this.calculateRect(wide, long);
            case 'trapezoid':
                var height = args[0], base1 = args[1], base2 = args[2];
                return this.calculateTrapezoid(height, base1, base2);
            default:
                throw new Error("circle, rect, trapezoid의 문자열에 대해서만 연산 가능 합니다.");
        }
    };
    return MyShapeAreaCalculator;
}());
