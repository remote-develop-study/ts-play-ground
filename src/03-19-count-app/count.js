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
        val = this.val;
        this.up = this.up.bind(this);
    }
    Changenum.prototype.up = function () {
        // val++;
        // return val;
        console.log('up');
    };
    Changenum.prototype.down = function () {
        // val--;
        // return val;
        console.log('-');
    };
    return Changenum;
}());
function plus() {
    // let num:Changenum = new Changenum(val)
    var b = console.log('aa');
    // return b;
}
var Tas = /** @class */ (function (_super) {
    __extends(Tas, _super);
    function Tas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tas;
}(Changenum));
//# sourceMappingURL=count.js.map