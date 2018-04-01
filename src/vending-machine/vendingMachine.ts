class VendingMachine {
    public drinks:Array<any>;
    public moneyCase:number;
    public profitCase:number;
    public constructor(drinks:Array<object>, moneyCase:number, profitCase:number) {
        this.drinks = drinks;
        this.moneyCase = moneyCase;
        this.profitCase = profitCase; //음료수를 판 금액
    }
    public viewDrink():object {
        return this.drinks;
    }

    public giveMoney(money:number):string {
        this.moneyCase = money;
        return `자판기에 ${money}를 넣어, 총 ${this.moneyCase}를 넣으셨습니다.`
    }

    public getDrink(drink:string):any {
        let index:number = 0;
        while (index <= this.drinks.length) {
            if (this.moneyCase <= this.drinks[index].price) throw '잔액이 부족하거나 없습니다.';
            if (this.drinks[index].name === drink) {
                this.moneyCase -= this.drinks[index].price;
                this.profitCase += this.drinks[index].price;
                this.drinks[index].quantity -= 1;
                return `음료수 ${this.drinks[index].name}가 나왔습니다.
                잔액이 ${this.moneyCase}원 남았습니다.`
            }
            index++
        }
    }

    public getChange():string {
        const changeMoney = this.moneyCase;
        if (!changeMoney) {
            return `반환될 잔액이 없습니다.`;
        }
        this.moneyCase = 0;
        return `잔액 ${changeMoney}원이 반환 되었습니다.`;
    }

    public showSellingMoney():string {
        return `현재 총 판매금액은 ${this.profitCase}원 입니다.`
    }
}
const vItem:Array<object> = [
    {name:'콜라',price:700,quantity:10},
    {name:'사이다',price:600,quantity:20}
];
const v:object = new VendingMachine(vItem,0,0);
// v.viewDrink();