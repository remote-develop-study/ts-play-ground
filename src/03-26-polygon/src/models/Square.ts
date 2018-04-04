import {IShape} from "./Shape";
import {Rectangle} from "./Rectangle";
import {_throw} from "../util/Throw";

export interface ISquare extends IShape {
  base: number
}

export class Square extends Rectangle implements ISquare {

  constructor(private _base: number) {
    super(_base, _base)
    this.base = _base
  }

  set base(base: number) {
    this._base = base > 0 ? base : _throw()
  }

  draw(context: CanvasRenderingContext2D, x: number, y: number): void {
    super.draw(context, x, y)
  }
}