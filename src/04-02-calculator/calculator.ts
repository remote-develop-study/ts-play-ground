interface Calculator {
  add(a: number): this
  sub(a: number): this
  div(a: number): this
  mul(a: number): this
  done(decimalToDisplay?: number): this
  allClear(): this
  reset(value: number): this
}


class MyCalculator implements Calculator {
  private _initValue: number;
  private _expr: string;

  constructor(public value: number) {
    this._initValue = value
    this._expr = ''
  }

  add(a: number): this {
    this.expr += `+${a.toString()}`
    return this
  }
  sub(a: number): this {
    this.expr += `-${a.toString()}`
    return this
  }
  div(a: number): this {
    this.expr += `/${a.toString()}`
    return this
  }
  mul(a: number): this {
    this.expr += `*${a.toString()}`
    return this
  }

  done(decimalToDisplay: number = 2): this {
    console.log(eval(this._initValue + this.expr).toFixed(decimalToDisplay))
    return this
  }

  get expr (): string {
    return this._expr
  }

  set expr (result: string)  {
    this._expr = result
  }

  reset (value: number): this {
    this._initValue = value
    return this
  }

  allClear(): this {
    this._initValue = 0
    this.expr = ''
    return this
  }

}

/** 
 * 3+5*5/3/3
 * (5*5/3/3)+3 = 5.78
*/
new MyCalculator(3).add(5).mul(5).div(3).div(3).done()

/** 
 * 5+5*5/5 = 10.00
 * 5+5 = 10.0000
*/
new MyCalculator(5).add(5).mul(5).div(5).done().allClear().reset(5).add(5).done(4) 
