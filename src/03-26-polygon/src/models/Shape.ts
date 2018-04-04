export interface IShape {
  color: string

  calculateArea(): number

  draw(context: CanvasRenderingContext2D, x: number, y: number): void
}

export abstract class Shape implements IShape {

  constructor(protected _color: string = '#000') {
    this.color = _color
  }

  calculateArea(): number {
    return 0
  }

  draw(context: CanvasRenderingContext2D, x: number, y: number): void {

  }

  set color(color: string) {
    this._color = color
  }

}