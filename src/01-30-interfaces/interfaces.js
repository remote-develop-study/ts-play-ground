"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var squarefunc = function (num) {
    return num * num;
};
exports.squarefunc = squarefunc;
// 여기서부터 수정하기
var getUserId = function (id, pw) {
    var user = { id: 'dev', pw: 'abc' };
    return user.pw;
};
exports.getUserId = getUserId;
// ???
var getUserJob = function (job) {
    return job || '백수';
};
exports.getUserJob = getUserJob;
var sortUser = function (user) {
    user.sort(function (a, b) {
        if (a.id.toUpperCase() < b.id.toUpperCase()) {
            return -1;
        }
        return 0;
    });
    return user;
};
exports.sortUser = sortUser;
//완
var Human = /** @class */ (function () {
    function Human(name, borned) {
        this.name = name;
        this.borned = borned;
    }
    Human.prototype.getAge = function () {
        return (new Date().getFullYear()) - this.borned;
    };
    return Human;
}());
var getName = function (human) {
    return human.name;
};
exports.getName = getName;
var getBorned = function (human) {
    return human.borned;
};
exports.getBorned = getBorned;
