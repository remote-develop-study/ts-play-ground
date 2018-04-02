interface Calculator {
  add(a: number): Calculator
  sub(a: number): Calculator
  div(a: number): Calculator
  mul(a: number): Calculator
  display(decimalToDisplay?: number): Calculator
  allClear(): Calculator
  reset(value: number): Calculator
}


class MyCalculator implements Calculator {
  private _current: number;

  constructor(public value: number) {
    this._current = value
  }

  add(a: number): Calculator {
    this.current += a
    return this
  }
  sub(a: number): Calculator {
    this.current -= a
    return this
  }
  div(a: number): Calculator {
    this.current /= a
    return this
  }
  mul(a: number): Calculator {
    this.current *= a
    return this
  }

  get current (): number {
    return this._current
  }

  set current (result: number)  {
    this._current = result
  }

  reset (value: number): Calculator {
    this.current = value
    return this
  }
  
  display(decimalToDisplay: number = 2): Calculator {
    console.log(this.current.toFixed(decimalToDisplay))
    return this
  }

  allClear(): Calculator {
    this.current = 0
    return this
  }

}

/** 
 * (((3+5)*5)/3)/3 = 4.44
*/
new MyCalculator(3).add(5).mul(5).div(3).div(3).display()

/** 
 * ((5+5)*5)/5 = 10.00
 * 5+5 = 10.000
*/
new MyCalculator(5).add(5).mul(5).div(5).display().allClear().reset(5).add(5).display(4) 
