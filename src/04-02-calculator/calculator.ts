interface ICalculator {
    add(operand: number): ICalculator
    sub(operand: number): ICalculator
    div(operand: number): ICalculator
    mul(operand: number): ICalculator
    Result():number
}

class Calculator implements ICalculator {
    private result: number;
    constructor() {
        this.result = 0
    }

    add(operand: number): ICalculator {
        this.result += operand
        console.log('add operand: ',operand,', this.result: ',this.result);
        return this
    }
    sub(operand: number): ICalculator {
        this.result -= operand
        console.log('sub operand: ',operand,', this.result: ',this.result);
        return this
    }
    div(operand: number): ICalculator {
        this.result /= operand
        console.log('div operand: ',operand,', this.result: ',this.result);
        return this
    }
    mul(operand: number): ICalculator {
        this.result *= operand
        console.log('mul operand: ',operand,', this.result: ',this.result);
        return this
    }
    Result(){
        console.log(this.result);
        return this.result
    }

}
  /** 
  *0+108+30/4
  */
  new Calculator().add(108).add(30).div(4).Result()