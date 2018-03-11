"use strict";
exports.__esModule = true;
var drinks_1 = require("./drinks");
var VendingMachine = /** @class */ (function () {
    function VendingMachine(drinks) {
        this.drinks = drinks;
        this.products = drinks;
        this.insertedCoin = 0;
        this.charge = 0;
        this.orderedDrink = { name: '', price: 0 };
        this.greeting();
    }
    VendingMachine.prototype.greeting = function () {
        console.log('구입하려는 음료수를 입력해주세요. 음료수 종류는 아래와 같습니다.');
        this.products.forEach(function (value) {
            console.log("" + value.name);
            console.log("" + value.price);
        });
    };
    VendingMachine.prototype.getOrder = function (drinkName) {
        var ordered = this.products.filter(function (value) { return value.name === drinkName; });
        console.log(ordered);
        this.orderedDrink.name = ordered[0].name;
        this.orderedDrink.price = ordered[0].price;
    };
    VendingMachine.prototype.insertCoin = function (price) {
        this.insertedCoin = price;
        if (this.insertedCoin <= this.orderedDrink.price) {
            console.log('금액이 부족합니다 다시 넣어 주세요');
        }
        else {
            console.log("\uAC70\uC2A4\uB984\uB3C8\uC740 " + (price - this.orderedDrink.price) + " \uC785\uB2C8\uB2E4.");
        }
    };
    return VendingMachine;
}());
var vm = new VendingMachine(drinks_1.drinks);
vm.getOrder('cola');
vm.insertCoin(2000);
