interface Calculator {
  add(a: number): void
  sub(a: number): void
  div(a: number): void
  mul(a: number): void
  display(): void
}


class MyCalculator implements Calculator {
  
  private _current: number;

  constructor(public initNumber: number) {
    this._current = 0
  }

  add(a: number): MyCalculator {
    this.current += a
    return this
  }
  sub(a: number): MyCalculator {
    this.current -= a
    return this
  }
  div(a: number): MyCalculator {
    this.current /= a
    return this
  }
  mul(a: number): MyCalculator {
    this.current *= a
    return this
  }

  get current (): number {
    return this._current
  }

  set current (result: number)  {
    this._current = result
  }
  
  display(decimal: number = 2): void {
    console.log(this.current.toFixed(decimal))
  }

  allClear(): void {
    this.current = 0
  }

}

// Test
new MyCalculator(3).add(5).mul(5).div(3).div(3).display() //2.777