"use strict";
exports.__esModule = true;
var Vm = /** @class */ (function () {
    function Vm(drinks) {
        this.drinks = drinks;
        this.products = drinks;
        this.insertedCoin = 0;
        this.charge = 0;
        this.selectedDrink = { name: '', price: 0 };
    }
    Vm.prototype.insertCoin = function (price) {
        this.insertedCoin = price;
        console.log(this.insertedCoin + "\uC744 \uC785\uAE08\uD558\uC600\uC2B5\uB2C8\uB2E4.");
    };
    Vm.prototype.selectDrink = function (drink) {
        var ordered = this.products.filter(function (item) {
            return item.name === drink;
        });
        this.selectedDrink = ordered[0];
        console.log(this.selectedDrink, ordered);
        this.charge = ordered[0].price;
        this.comparePriceMessage();
    };
    Vm.prototype.comparePriceMessage = function () {
        if (this.selectedDrink.price > this.insertedCoin) {
            console.log('잔액이 부족합니다.');
        }
        else {
            this.changeCoin();
            console.log(this.selectedDrink.name + "\uC744(\uB97C) \uC120\uD0DD\uD558\uC168\uC2B5\uB2C8\uB2E4. \uC794\uC561\uC740 " + this.insertedCoin + " \uC785\uB2C8\uB2E4.");
        }
    };
    Vm.prototype.changeCoin = function () {
        this.insertedCoin = this.insertedCoin - this.selectedDrink.price;
    };
    Vm.prototype.거스름돈 = function () {
        console.log(this.insertedCoin + " \uAC00 \uBC18\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
    };
    return Vm;
}());
