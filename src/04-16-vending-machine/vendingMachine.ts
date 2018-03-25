import { drinks } from './drinks';

export class VendingMachine {
  public drink: Object = {};

  public getDrinkByName(name: string): any {
    this.drink = drinks[name];

    return this.drink.name;
  }

  public getChangeCoin = (coin: number): number => coin - this.drink.price;
}

export function test(v: VendingMachine, chosenDrink: string, inputCoin: number) {
  const drink = v.getDrinkByName(chosenDrink),
        coin = v.getChangeCoin(inputCoin);

  return `${drink}의 잔돈은 ${coin}원입니다`
}
