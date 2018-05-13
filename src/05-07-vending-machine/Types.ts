export interface VendingMachine {
  drinks: Drinks;
  showDrinks(): Drinks;
  chooseDrinks(drinkName: string): string;
}

export interface Drinks {
  [name: string]: Drink;
}

export interface Drink {
  price: number;
  quantity: number;
}
