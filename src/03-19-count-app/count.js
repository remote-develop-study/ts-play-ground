var Count = /** @class */ (function () {
    function Count() {
        this.num = document.getElementById("num");
    }
    Count.prototype.plus = function () {
        this.num = this.num + 1;
        document.getElementById("num").innerHTML = this.num;
    };
    Count.prototype.minus = function () {
        this.num = this.num - 1;
        document.getElementById("num").innerHTML = this.num;
    };
    return Count;
}());
var oper = new Count;
