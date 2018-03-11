import {IProduct} from "./Product";

export interface IDrink extends IProduct {
}

export class Drink implements IDrink {
  name: string;
  price: number;

}