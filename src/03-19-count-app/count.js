var Count = /** @class */ (function () {
    function Count() {
        this.initNumber = 0; //초기값 0 
        this.result = document.getElementById("count-number");
        this.decrement = document.getElementById("decrement-btn");
        this.increment = document.getElementById("increment-btn");
    }
    Count.prototype.init = function () {
        var _this = this;
        this.decrement.addEventListener("click", function (e) {
            _this.minus();
        });
        this.increment.addEventListener("click", function (e) {
            _this.plus();
        });
    };
    Count.prototype.plus = function () {
        console.log(this.initNumber++);
        var str = this.initNumber;
        this.result.innerText = String(str);
    };
    Count.prototype.minus = function () {
        console.log(this.initNumber--);
        var str = this.initNumber;
        this.result.innerText = String(str);
    };
    return Count;
}());
window.onload = function () {
    var count = new Count();
    count.init();
};
//# sourceMappingURL=count.js.map