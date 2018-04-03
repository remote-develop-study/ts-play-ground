"use strict";
// 자판기 
var vendingMachine = /** @class */ (function () {
    function vendingMachine() {
        this.drink1 = 1000;
    }
    // drink = [];
    // constructor(){
    //   this.coin = 0;
    // }
    // coinResult = 0;
    vendingMachine.prototype.coinInsert = function (coin) {
        var coinResult = coin - this.drink1;
        return coinResult;
    };
    return vendingMachine;
}());
