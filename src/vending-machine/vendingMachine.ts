import { Idrink, drinks } from './drinks';

class VendingMachine {
  products: Array<Idrink>;
  insertedCoin: number;
  charge: number;
  orderedDrink: Idrink;

  constructor(public drinks: Array<Idrink>) {
    this.products = drinks;
    this.insertedCoin = 0;
    this.charge = 0;
    this.orderedDrink = { name: '', price: 0 };
    this.greeting();
  }

  greeting(): void{
    console.log(
      '구입하려는 음료수를 입력해주세요. 음료수 종류는 아래와 같습니다.',
    );
    this.products.forEach(value => {
      console.log(`${value.name}`);
      console.log(`${value.price}`);
    });
  }

  getOrder(drinkName: string): void {
    let ordered = this.products.filter(value => value.name === drinkName);
    this.orderedDrink.name = ordered[0].name;
    this.orderedDrink.price = ordered[0].price;
  }

  insertCoin(price: number): void {
    this.insertedCoin = price;
    if (this.insertedCoin <= this.orderedDrink.price) {
      console.log('금액이 부족합니다 다시 넣어 주세요');
    } else {
      console.log(`거스름돈은 ${price - this.orderedDrink.price} 입니다.`);
    }
  }
}

let vm = new VendingMachine(drinks);
vm.getOrder('cola');
vm.insertCoin(2000);