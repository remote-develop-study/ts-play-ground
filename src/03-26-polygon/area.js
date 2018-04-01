function circle(radius) {
    var circleArea = Math.pow(radius, 2) * Math.PI;
    return circleArea;
}
function rect(horizontal, vertical) {
    var rectArea = horizontal * vertical;
    return rectArea;
}
function trapezoid(upperSide, lowerSide, height) {
    var trapezoidArea = (upperSide + lowerSide) * height / 2;
    return trapezoidArea;
}
function calculateCircle(value) {
    var msg;
    if (value == null) {
        msg = "최소 한가지 값이 필요합니다. ";
    }
    else if (typeof (value) !== 'number') {
        msg = "숫자형 타입만 계산이 가능합니다.";
    }
    else if (value <= 0) {
        msg = "반지름은 0 보다 커야합니다. ";
    }
    else {
        msg = "숫자형 타입입니다. 값은 " + value;
    }
    return msg;
}
function getArea(figure, val1, val2, val3) {
    if (val2 === void 0) { val2 = 0; }
    if (val3 === void 0) { val3 = 0; }
    var area = 0;
    var msg = '';
    if (figure == null) {
        msg = "넓이를 구할 도형을 첫번째 인자로 적어주세요(circle / rect / trapezoid)";
    }
    else if (typeof (figure) !== 'string') {
        msg = "첫번째 인자는 문자형입니다.";
    }
    else if (val1 == null) {
        msg = "최소 한가지 이상 값이 필요합니다. ";
    }
    else if (typeof (val1) !== 'number') {
        msg = "두번째 인자부터는 숫자형입니다.";
    }
    else if (val1 <= 0) {
        msg = "숫자는 0 보다 커야합니다. ";
    }
    else {
        if (figure === 'circle') {
            msg = 'figure is \' ' + figure + '\', radius is ' + val1 + ', area is ';
            area = Math.pow(val1, 2) * Math.PI;
        }
        else if (figure === 'rect') {
            if (val2 <= 0) {
                msg = "숫자는 2개 이상 양수로 입력해주세요.";
            }
            else {
                msg = 'figure is \' ' + figure + '\', horizontal is ' + val1 + ', vertical is ' + val2 + ', area is ';
                area = val1 * val2;
            }
        }
        else if (figure === 'trapezoid') {
            if (val2 <= 0 || val3 <= 0) {
                msg = "숫자를 3개 이상 양수로 입력해 주세요.";
            }
            else {
                msg = 'figure is \' ' + figure + '\', upperSide is ' + val1 + ', lowerSide is ' + val2 + ', height is ' + val3 + ', area is ';
                area = (val1 + val2) * val3 / 2;
            }
        }
    }
    return area ? msg + area : msg;
}
