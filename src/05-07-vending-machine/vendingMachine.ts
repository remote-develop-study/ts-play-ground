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
    this.inputMoney += money;
  }
  
  getItem(drinkName: type.Drink['name']) {
    const findDrink = (drink: type.Drink) => drink.name === drinkName;

    return this.drinks.find(findDrink);
  }

  /**
   * TODO:
   * 1. 금액 확인
   * 2. 재고 검사
   * 3. 재고 차감
   * 4. 남은 돈 => 잔돈 통
   * 5. 음료수 반환
   * 
   * 조건 불충분시 에러 던지고 메세지남김
   */
  chooseDrinks(drinkName: type.Drink['name']) {
    return drinkName ? this.getItem(drinkName) : 'throw error';
  }

  // TODO: 받은 금액 - 총 구매 음료수 금액
  getBalance() {
    return this.inputMoney;
  }
}