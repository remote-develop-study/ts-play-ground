var drinks = [
    {
        name: "Coca-cola",
        price: 1500,
        quantity: 3,
        size: 250
    },
    {
        name: "Dr. Pepper",
        price: 1500,
        quantity: 5,
        size: 355
    },
    {
        name: "Fanta Orange",
        price: 1300,
        quantity: 10,
        size: 355
    },
    {
        name: "Coca-cola Zero",
        price: 1600,
        quantity: 3,
        size: 250
    },
    {
        name: "Pepsi",
        price: 1200,
        quantity: 20,
        size: 355
    }
];
var VendingMachine = /** @class */ (function () {
    function VendingMachine(drinks, balance, insertedMoney) {
        if (balance === void 0) { balance = 0; }
        if (insertedMoney === void 0) { insertedMoney = 0; }
        this.drinks = drinks;
        this.balance = balance;
        this.insertedMoney = insertedMoney;
    }
    VendingMachine.prototype.showDrinkList = function () {
        this.drinks.map(function (drink) { return console.log(drink.name); });
    };
    VendingMachine.prototype.selectDrink = function (drinkName) {
        var found = this.drinks.find(function (drink) { return drink.name === drinkName; });
        if (!found)
            this.printSelectWrongDrinkName();
        else {
            if (found.quantity) {
                found.quantity -= 1;
                this.printSelectedDrink(found.name);
                this.deductMoney(found.price);
            }
            else {
                console.log("선택하신 음료가 매진되었습니다.");
            }
        }
    };
    VendingMachine.prototype.deductMoney = function (drinkPrice) {
        if (this.insertedMoney < drinkPrice) {
            this.printNotEnoughMoeny(drinkPrice - this.insertedMoney);
            return;
        }
        this.insertedMoney -= drinkPrice;
        this.printInsertedMoney();
    };
    VendingMachine.prototype.insertMoney = function (money) {
        this.insertedMoney += money;
        this.printWhenInsertMoney(money);
    };
    VendingMachine.prototype.returnMoney = function () {
        console.log();
    };
    VendingMachine.prototype.printWhenInsertMoney = function (money) {
        console.log(money + "\uC6D0 \uC785\uAE08\uD558\uC168\uC2B5\uB2C8\uB2E4. \uD604\uC7AC \uC794\uC561: " + this.insertedMoney);
    };
    VendingMachine.prototype.printSelectWrongDrinkName = function () {
        console.log('잘못된 음료명 입니다! 다시 입력해 주세요');
    };
    VendingMachine.prototype.printInsertedMoney = function () {
        console.log("\uB0A8\uC740 \uC794\uC561: " + this.insertedMoney);
    };
    VendingMachine.prototype.printNotEnoughMoeny = function (shortage) {
        console.log(shortage + " \uC6D0 \uBD80\uC871\uD569\uB2C8\uB2E4. \uAE08\uC561\uC744 \uB354 \uB123\uC73C\uC138\uC694!");
    };
    VendingMachine.prototype.printSelectedDrink = function (drinkname) {
        console.log("\uC120\uD0DD\uB41C \uC74C\uB8CC: " + drinkname);
    };
    return VendingMachine;
}());
var vm = new VendingMachine(drinks);
vm.insertMoney(2000);
vm.selectDrink('Coca-cola');
vm.selectDrink('Dr. Pepper');
vm.returnMoney();
