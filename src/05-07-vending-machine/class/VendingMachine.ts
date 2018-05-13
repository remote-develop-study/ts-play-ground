import CoinMachine from './CoinMachine';
import * as type from '../types/index';

// TODO: 클래스내에서 하는 일이 너무 많아 리팩토링 필요
export default class VendingMachine extends CoinMachine implements type.VendingMachine {
  drinks: type.Drinks;

  constructor(newDrinks: type.Drinks) {
    super();
    this.drinks = newDrinks;
  }

  showDrinks() {
    return this.drinks;
  }

  insertMoney(money: number) {
    this.inputMoney += money;
  }

  private getItem(drinkName: string) {
    return `${drinkName}의 가격은 ${this.drinks[drinkName].price}원 입니다. 맛있게 드세요`;
  }

  /**
   * TODO:
   * 1. 금액 확인
   * 2. 재고 검사
   * 3. 하는 일이 너무 많은 메서드가 되어버림 역할 분담 필요
   * 4. 조건 불충분시 에러 던지고 메세지남김
   */
  chooseDrinks(drinkName: string) {
    const selectedDrink = this.drinks[drinkName];

    // 금액 차감
    this.inputMoney -= selectedDrink.price;
    // 재고 차감
    selectedDrink.quantity -= 1;

    return this.getItem(drinkName);
  }

  getBalance() {
    return this.inputMoney;
  }
}
