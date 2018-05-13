interface IDrink {
    name: string;
    price: number;
    quantity: number;
    size: number;
}

const drinks: IDrink[] = [
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
]

interface IVendingMachine {
    drinks: IDrink[];
    balance: number;
    insertedMoney: number;
    showDrinkList(): void;
    deductMoney(drinkPrice: number): void;
    insertMoney(money: number): void;
    returnMoney(): void;
}

class VendingMachine implements IVendingMachine {
    constructor(public drinks: IDrink[], public balance = 0, public insertedMoney = 0) { }

    public showDrinkList(): void {
        this.drinks.map(drink => console.log(drink.name))
    }

    public selectDrink(drinkName: string) {
        let found: IDrink | undefined = this.drinks.find(drink => drink.name === drinkName)
        if (!found) this.printSelectWrongDrinkName()
        else {
            if (found.quantity) {
                found.quantity -= 1
                this.printSelectedDrink(found.name)
                this.deductMoney(found.price)
            } else {
                console.log("선택하신 음료가 매진되었습니다.")
            }
        }
    }

    public deductMoney(drinkPrice: number): void {
        if (this.insertedMoney < drinkPrice) {
            this.printNotEnoughMoeny(drinkPrice - this.insertedMoney)
            return;
        }
        this.insertedMoney -= drinkPrice
        this.printInsertedMoney()
    }

    public insertMoney(money: number): void {
        this.insertedMoney += money
        this.printWhenInsertMoney(money)
    }

    public returnMoney(): void {
        console.log()
    }

    private printWhenInsertMoney(money: number): void {
        console.log(`${money}원 입금하셨습니다. 현재 잔액: ${this.insertedMoney}`)

    }

    private printSelectWrongDrinkName(): void {
        console.log('잘못된 음료명 입니다! 다시 입력해 주세요')
    }

    private printInsertedMoney(): void {
        console.log(`남은 잔액: ${this.insertedMoney}`)
    }

    private printNotEnoughMoeny(shortage: number): void {
        console.log(`${shortage}원 부족합니다. 금액을 더 넣으세요!`)
    }

    private printSelectedDrink(drinkname: string): void {
        console.log(`선택된 음료: ${drinkname}`)
    }
}

const vm = new VendingMachine(drinks)
vm.insertMoney(2000)
vm.selectDrink('Coca-cola')
vm.selectDrink('Dr. Pepper')
vm.insertMoney(1000)
vm.selectDrink('Dr. Pepper')
vm.returnMoney()