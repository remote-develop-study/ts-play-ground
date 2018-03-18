"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AwesomeVendingMachine = /** @class */ (function () {
    function AwesomeVendingMachine(products) {
        this.products = products;
        this.drinks = this.products.drinks;
        this.insertedCoin = 0;
    }
    AwesomeVendingMachine.prototype.giveChange = function () {
        console.log(this.insertedCoin + "\uC774 \uBC18\uD658\uB418\uC5C8\uC2B5\uB2C8\uB2E4");
        return this.insertedCoin;
    };
    AwesomeVendingMachine.prototype.getProductByName = function (productName) {
        return this.drinks.filter(function (value) { return value.name === productName; })[0];
    };
    AwesomeVendingMachine.prototype.giveProduct = function (productName) {
        var selected = this.getProductByName(productName);
        var haveProductsInStock = selected ? selected.quantity > 0 : false;
        if (haveProductsInStock) {
            selected.quantity--;
            if (this.insertedCoin > selected.sellingPrice) {
                this.insertedCoin = this.insertedCoin - selected.sellingPrice;
                return selected;
            }
            else {
                this.notEnoughMoney();
                return;
            }
            // this.reduceProduct(productName);
        }
        else {
            this.notEnoughProductError(productName);
        }
    };
    AwesomeVendingMachine.prototype.insertCoin = function (coin) {
        this.insertedCoin += coin;
    };
    AwesomeVendingMachine.prototype.notEnoughMoney = function () {
        console.log('금액이 부족합니다!');
    };
    // public reduceProduct(drinkName: string): void {
    //   // 이걸 모르게씀
    //   const selected: DrinkOrSnackOrUndefined = this.getProductByName(drinkName)
    // }
    AwesomeVendingMachine.prototype.notEnoughProductError = function (productName) {
        return productName + "\uC774 \uB2E4 \uB5A8\uC5B4\uC84C\uC5B4\uC694 :(";
    };
    return AwesomeVendingMachine;
}());
exports.AwesomeVendingMachine = AwesomeVendingMachine;
