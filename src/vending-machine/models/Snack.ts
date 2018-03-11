import {IProduct} from "./Product";

export interface ISnack extends IProduct {
}

export class Snack implements ISnack {
  name: string;
  price: number;

}