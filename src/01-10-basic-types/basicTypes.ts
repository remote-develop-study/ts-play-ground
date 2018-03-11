import { log } from "util";

export function makeString(message:string, year:number):string {
  return (typeof message !== 'string' || typeof year !== 'number') ? '거절한다' : `${message} ${year}년 반가워`;
}

export function sum(num1: number, num2:number): number | string{
  return arguments.length  !== 0 ? num1 + num2 : '두개의 숫자를 넣어주세요';
}

export function inverseBool(bool:boolean): boolean {
  return !bool;
}

export function sumOfAll(arr:Array<number>): number {
  return arr.reduce(function(total,num){
    return total+ num;
  })
}

export function testTuple(a:[string,boolean,number]): string {
  return a.join(' ');
}

export function testEnum(color: Color): number {
  return color;
}
