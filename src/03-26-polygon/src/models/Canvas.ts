import {IShape} from "./Shape";

export interface ICanvas {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  shape: IShape

  draw(x: number, y: number): void
}

export class Canvas implements ICanvas {
  context: CanvasRenderingContext2D
  shape: IShape

  constructor(public canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext && canvas.getContext('2d')
  }

  draw(x: number, y: number): void {
    this.shape.draw(this.context, x, y)
  }
}