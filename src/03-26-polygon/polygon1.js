"use strict";
exports.__esModule = true;
// type script 함수 인자 체킹할때 양수엔 필수인 조건...
var validateIsExist = function (r) {
    if (r !== 0 && !r) {
        throw new Error(r + "\uC740 \uC874\uC7AC\uD574\uC57C\uB9CC \uD569\uB2C8\uB2E4.");
    }
};
exports.validateIsExist = validateIsExist;
var validateMinusNbumer = function (r) {
    if (r <= 0) {
        throw new Error(r + "\uC740 0\uBCF4\uB2E4 \uCEE4\uC57C\uD569\uB2C8\uB2E4.");
    }
};
exports.validateMinusNbumer = validateMinusNbumer;
var calculateCircle = function (r) {
    validateIsExist(r);
    validateMinusNbumer(r);
    var pai = 3.14;
    return r * r * pai;
};
var caculateRectancle = function (x, y) {
    validateIsExist(x);
    validateMinusNbumer(x);
    validateIsExist(y);
    validateMinusNbumer(y);
    return x * y;
};
var caculateTrapezoid = function (x, y, h) {
    validateIsExist(x);
    validateIsExist(y);
    validateIsExist(h);
    validateMinusNbumer(x);
    validateMinusNbumer(y);
    validateMinusNbumer(h);
    return (x + y) / 2;
};
