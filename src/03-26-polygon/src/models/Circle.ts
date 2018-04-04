import {IShape} from "./Shape";
import {Ellipse} from "./Ellipse";
import {_throw} from "../util/Throw";

export interface ICircle extends IShape {
  radius: number
}

export class Circle extends Ellipse implements ICircle {

  constructor(private _radius: number) {
    super(_radius, _radius)
    this.radius = _radius
  }

  get color(): string {
    return super._color
  }

  set color(color: string) {
    this._color = color
  }

  set radius(radius: number) {
    this._radius = radius > 0 ? radius : _throw()
  }

  draw(context: CanvasRenderingContext2D, x: number, y: number): void {
    context.fillStyle = this._color
    context.beginPath()
    context.arc(x, y, this._radius, 0, Math.PI * 2, true)
    context.fill()
  }

}