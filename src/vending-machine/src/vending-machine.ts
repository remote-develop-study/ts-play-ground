import { Drinks } from './drinks';
import { Snack } from './snack';

type DrinkOrSnack = Drinks | Snack


interface Inventory {
  drinks: Array<Drinks>;
  snack?: Array<Snack>;
}

interface VendingMachine {
  products: Inventory;
  insertedCoin: number;
  giveChange(): void;
  giveProduct(productName: string): DrinkOrSnack | void;
  getProductByName(productName: string): DrinkOrSnack;
  insertCoin(coin: number): void;
  reduceProduct?(productName: string): void;
  notEnoughProductError(productName: string): string;
  notEnoughMoney(): void;
}

class AwesomeVendingMachine implements VendingMachine {
  public products: Inventory;
  public insertedCoin: number;
  public drinks: Array<Drinks>;

  constructor(products: Inventory) {
    this.products = products;
    this.drinks = this.products.drinks;
    this.insertedCoin = 0;
  }

  public giveChange(): void {
    console.log(`${this.insertedCoin}이 반환되었습니다`)
    this.insertedCoin = 0
  }

  public getProductByName(productName: string): Drinks {
    return <Drinks>this.drinks.filter(value =>  value.name === productName)[0]
  }

  public giveProduct(productName: string): Drinks | void {
    const selected: Drinks = this.getProductByName(productName);
    const haveProductsInStock: boolean = selected ? selected.quantity > 0 : false;

    if (haveProductsInStock) {
      selected.quantity--
      if (this.insertedCoin > selected.sellingPrice) {
        this.insertedCoin = this.insertedCoin - selected.sellingPrice
        return selected
      } else {
        this.notEnoughMoney()
        return;
      }
      // this.reduceProduct(productName);
      
    } else {
      this.notEnoughProductError(productName);
    }
  }

  public insertCoin(coin: number): void {
    this.insertedCoin += coin;
  }

  public notEnoughMoney(): void {
    console.log('금액이 부족합니다!')
  }

  // public reduceProduct(drinkName: string): void {
  //   // 이걸 모르게씀
  //   const selected: DrinkOrSnackOrUndefined = this.getProductByName(drinkName)

  // }

  public notEnoughProductError(productName: string): string {
    return `${productName}이 다 떨어졌어요 :(`;
  }
}

export { AwesomeVendingMachine };
