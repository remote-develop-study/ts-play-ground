import { drinksSetting, drinks } from './products';

class Vm {
  products: Array<drinksSetting>;
  insertedCoin: number;
  charge: number;
  selectedDrink: drinksSetting;

  constructor(public drinks: Array<drinksSetting>) {
    this.products = drinks;
    this.insertedCoin = 0;
    this.charge = 0;
    this.selectedDrink = { name: '', price: 0 }
  }

  insertCoin (price: number): void {
    this.insertedCoin = price;
    console.log(`${this.insertedCoin}을 입금하였습니다.`);
  }

  selectDrink (drink: string): void {
    // find method change 하기
    const ordered = this.products.filter(item => {
      return item.name === drink;
    });
    this.selectedDrink = ordered[0];
    this.charge = ordered[0].price;
    this.comparePriceMessage();
  }
  
  comparePriceMessage (): void {
    if(this.selectedDrink.price > this.insertedCoin) {
      console.log(`잔액이 부족합니다.`)
    }else {
      this.선택후남은코인();
      console.log(`${this.selectedDrink.name}을(를) 선택하셨습니다. 잔액은 ${this.insertedCoin} 입니다.`);
    }
  }

  선택후남은코인 (): void { // updateCoin
    this.insertedCoin = this.insertedCoin - this.selectedDrink.price;
  }

  거스름돈 (): void { // printChangeMoney
    console.log(`${this.insertedCoin} 가 반환되었습니다.`)
  }
}

