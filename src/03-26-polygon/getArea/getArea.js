"use strict";
exports.__esModule = true;
var isExitst_1 = require("./validate/isExitst");
var minusNumber_1 = require("./validate/minusNumber");
var getArea = function (name, x, y, z) {
    var pai = 3.14;
    if (name === 'circle') {
        isExitst_1["default"](x);
        minusNumber_1["default"](x);
        return x * x * pai;
    }
    if (name === 'rect') {
        isExitst_1["default"](x);
        isExitst_1["default"](y);
        minusNumber_1["default"](x);
        minusNumber_1["default"](y);
        return x * y;
    }
    if (name === 'trapezoidArea') {
        isExitst_1["default"](x);
        isExitst_1["default"](y);
        isExitst_1["default"](z);
        minusNumber_1["default"](x);
        minusNumber_1["default"](y);
        minusNumber_1["default"](z);
        return (x + y) * z / 2;
    }
};
