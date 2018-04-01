var VendingMachine = (function () {
    function VendingMachine(drinks, moneyCase, profitCase) {
        this.drinks = [];
        this.moneyCase = moneyCase;
        this.profitCase = profitCase; //음료수를 판 금액
    }
    VendingMachine.prototype.viewDrink = function () {
        return this.drinks;
    };
    VendingMachine.prototype.giveMoney = function (money) {
        this.moneyCase = money;
        return "\uC790\uD310\uAE30\uC5D0 " + money + "\uB97C \uB123\uC5B4, \uCD1D " + this.moneyCase + "\uB97C \uB123\uC73C\uC168\uC2B5\uB2C8\uB2E4.";
    };
    VendingMachine.prototype.getDrink = function (drink) {
        var index = 0;
        while (index <= this.drinks.length) {
            if (this.moneyCase <= this.drinks[index].price)
                throw '잔액이 부족하거나 없습니다.';
            if (this.drinks[index].name === drink) {
                this.moneyCase -= this.drinks[index].price;
                this.profitCase += this.drinks[index].price;
                this.drinks[index].quantity -= 1;
                return "\uC74C\uB8CC\uC218 " + this.drinks[index].name + "\uAC00 \uB098\uC654\uC2B5\uB2C8\uB2E4.\n                \uC794\uC561\uC774 " + this.moneyCase + "\uC6D0 \uB0A8\uC558\uC2B5\uB2C8\uB2E4.";
            }
            index++;
        }
    };
    VendingMachine.prototype.getChange = function () {
        var changeMoney = this.moneyCase;
        if (!changeMoney) {
            return "\uBC18\uD658\uB420 \uC794\uC561\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.";
        }
        this.moneyCase = 0;
        return "\uC794\uC561 " + changeMoney + "\uC6D0\uC774 \uBC18\uD658 \uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
    };
    VendingMachine.prototype.showSellingMoney = function () {
        return "\uD604\uC7AC \uCD1D \uD310\uB9E4\uAE08\uC561\uC740 " + this.profitCase + "\uC6D0 \uC785\uB2C8\uB2E4.";
    };
    return VendingMachine;
}());
var vItem = [
    { name: '콜라', price: 700, quantity: 10 },
    { name: '사이다', price: 600, quantity: 20 }
];
var v = new VendingMachine(vItem, 0, 0);
// v.viewDrink(); 
