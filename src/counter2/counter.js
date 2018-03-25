var countUpDown = /** @class */ (function () {
    function countUpDown() {
        this.count = 0;
    }
    countUpDown.prototype.increment = function () {
        this.count++;
        this.print('.result');
    };
    countUpDown.prototype.decrement = function () {
        this.count--;
        this.print('.result');
    };
    countUpDown.prototype.print = function (target) {
        var domObj = document.querySelector(target);
        if (domObj !== null) {
            domObj.innerHTML = String(this.count);
        }
    };
    return countUpDown;
}());
