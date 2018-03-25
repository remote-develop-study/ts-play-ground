var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Changenum = /** @class */ (function () {
    function Changenum(val) {
        this.val = val;
    }
    Changenum.prototype.up = function () {
        this.val++;
        document.getElementById('count-number').innerHTML = this.val.toString();
        // console.log(`${this.val}`);
    };
    Changenum.prototype.down = function () {
        this.val--;
        document.getElementById('count-number').innerHTML = this.val.toString();
        // console.log(`${this.val}`);
    };
    return Changenum;
}());
var changenum = new Changenum(0);
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
var number;
number = 0;
function plus() {
    number++;
    console.log(number);
    // var a = document.getElementById('count-number').innerText;
    return number;
}
function minur() {
    number--;
    console.log(number);
    return number;
}
var Tas = /** @class */ (function (_super) {
    __extends(Tas, _super);
    function Tas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tas;
}(Changenum));
//# sourceMappingURL=count.js.map