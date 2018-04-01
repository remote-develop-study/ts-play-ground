interface Calculator {
  add(a: number): void
  sub(a: number): void
  div(a: number): void
  mul(a: number): void
  display(decimalToDisplay: number): void
  allClear(): void
}


class MyCalculator implements Calculator {
  
  private _current: number;

  constructor(public initNumber: number) {
    this._current = initNumber
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
  
  display(decimalToDisplay: number = 2): MyCalculator {
    console.log(this.current.toFixed(decimalToDisplay))
    return this
  }

  allClear(): MyCalculator {
    this.current = 0
    return this
  }

}

// Test
new MyCalculator(3).add(5).mul(5).div(3).div(3).display() // 4.44
new MyCalculator(5).add(5).mul(5).div(5).display().allClear().add(5).display() // 10.00, 5.00 출력