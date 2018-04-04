import './assets/scss/main.scss'
import {Circle} from "./models/Circle";
import {Square} from "./models/Square";
import {Canvas} from "./models/Canvas";
import {Rectangle} from "./models/Rectangle";

const canvas: Canvas = new Canvas(document.querySelector('#canvas'))


const circle = new Circle(20)
circle.color = 'rgb(0,0,0)'
// const square = new Square(4)

canvas.shape = circle
canvas.canvas.width = window.innerWidth
canvas.canvas.height = 500


canvas.canvas.addEventListener('mousedown', e => {
  canvas.draw(e.offsetX, e.offsetY)
  console.log(e.offsetX, e.offsetY)
})

