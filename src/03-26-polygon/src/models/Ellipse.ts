import {IShape, Shape} from "./Shape";
import {_throw} from "../util/Throw";

export interface IEllipse extends IShape {
  radiusX: number
  radiusY: number
}

export class Ellipse extends Shape implements IEllipse {

  constructor(private _radiusX: number,
              private _radiusY: number) {
    super()
    this.radiusX = _radiusX
    this.radiusY = _radiusY
  }

  set radiusX(radiusX: number) {
    this._radiusX = radiusX > 0 ? radiusX : _throw()
  }

  set radiusY(radiusY: number) {
    this._radiusY = radiusY > 0 ? radiusY : _throw()
  }

  calculateArea(): number {
    return Math.PI * this._radiusX * this._radiusY
  }

  get color(): string {
    return super._color
  }
}