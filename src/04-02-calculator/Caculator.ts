
interface ArithmeticOperation {
  plus (x:number, y:number):number,
  subtract (x:number, y:number):number,
  multiply (x:number, y:number):number,
  division (x:number, y:number):number
}

const ArithmeticOperation = {
  plus (x:number, y:number):number {
    return x + y;
  },
  subtract (x:number, y:number):number {
    return x - y;
  },
  multiply (x:number, y:number):number {
    return x * y;
  },
  division (x:number, y:number):number {
    return x / y;
  }
}

export default ArithmeticOperation