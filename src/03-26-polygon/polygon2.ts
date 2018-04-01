import {validateIsExist, validateMinusNbumer} from './polygon'
const pai:number = 3.14
const getArea = function (name:string, x: number, y: number, z: number) {
  if(name === 'circle') {
    return x * x * pai;
  }
  if(name === 'rect') {
    return x * y;
  }
  if(name === 'trapezoidArea') {
    return (x + y) * z / 2
  }
}