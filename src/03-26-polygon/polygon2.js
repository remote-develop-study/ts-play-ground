"use strict";
exports.__esModule = true;
var pai = 3.14;
var getArea = function (name, x, y, z) {
    if (name === 'circle') {
        return x * x * pai;
    }
    if (name === 'rect') {
        return x * y;
    }
    if (name === 'trapezoidArea') {
        return (x + y) * z / 2;
    }
};
