var Count = /** @class */ (function () {
    function Count() {
        this.num = 0;
    }
    Count.prototype.plus = function () {
        this.num = this.num + 1;
        console.log(this.num);
        document.getElementById("count-number").innerHTML = String(this.num);
    };
    Count.prototype.minus = function () {
        this.num = this.num - 1;
        document.getElementById("count-number").innerHTML = String(this.num);
    };
    return Count;
}());
var oper = new Count();
