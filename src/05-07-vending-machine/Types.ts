export interface VendingMachine {
  showDrinks(): string;
  chooseDrinks(drink: Drink['name']): string;
}

export interface Drink {
  name: string;
  price: number;
  stock: number;
}