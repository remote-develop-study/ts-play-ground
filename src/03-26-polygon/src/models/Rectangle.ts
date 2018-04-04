import {IShape, Shape} from "./Shape";
import {_throw} from "../util/Throw";

export interface IRectangle extends IShape {
  height: number
  width: number
}

export class Rectangle extends Shape implements IRectangle {

  constructor(private _height: number,
              private _width: number) {
    super()
    this.height = _height
    this.width = _width
  }

  get height(): number {
    return this._height
  }

  get width(): number {
    return this._width
  }

  set height(height: number) {
    this._height = height > 0 ? height : _throw()
  }

  set width(width: number) {
    this._width = width > 0 ? width : _throw()
  }

  calculateArea(): number {
    return this._height * this._width
  }

  draw(context: CanvasRenderingContext2D, x: number, y: number): void {
    context.fillStyle = this.color
    context.fillRect(x - this._width / 2, y - this._height / 2, this._width, this._height)
  }
}