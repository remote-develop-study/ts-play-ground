import CoinMachine from './CoinMachine';
import * as type from './Types';

export default class VendingMachine extends CoinMachine implements type.VendingMachine {
  drinks: type.Drink[];

  constructor(drinks: type.Drink[]) {
    super();
    this.drinks = [...drinks];
  }

  showDrinks() {
    let drinkList: string = '';
  
    this.drinks.map((drink, i) => {
      const length = this.drinks.length;
  
      drinkList += (`이름: ${drink.name}, 가격: ${drink.price}`);
      drinkList += (i >= length) ? '\n' : '';
    });
  
    return drinkList;
  }

  insertMoney(money: number) {
    this.inputMoney = money;
  }
  
  getItem() {
    return '';
  }

  // TODO: validation
  chooseDrinks(drink: type.Drink['name']) {
    return this.getItem();
  }

  // TODO: 받은 금액 - 총 구매 음료수 금액
  getBalance() {
    return this.inputMoney;
  }
}