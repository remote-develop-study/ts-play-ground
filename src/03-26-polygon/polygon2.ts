import {validateIsExist, validateMinusNbumer} from './polygon1'
const pai:number = 3.14;
const getArea = function (name:string, x: number, y: number, z: number):number | void {
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