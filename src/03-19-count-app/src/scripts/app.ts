interface Counter {
  numstring: string;
  plusButton: HTMLButtonElement;
  minusButton: HTMLButtonElement;
}

interface StaticCounter {
  new(): Counter;
  currentNumber?: number;
  countingText: HTMLSpanElement;
  increase(): void;
  decrease(): void;
}

function staticImplements<T>() {
  return (constructor: T) => {}
}

@staticImplements<StaticCounter>()
class MyCounter implements Counter {
  public static currentNumber: number = 0;
  public static countingText: HTMLSpanElement;
  public numstring: string;
  public plusButton: HTMLButtonElement;
  public minusButton: HTMLButtonElement;

  constructor() {
    this.plusButton = document.createElement('button');
    this.plusButton.innerHTML = '+'
    this.minusButton = document.createElement('button');
    this.minusButton.innerHTML = '-'
    MyCounter.countingText = document.createElement('span');
    MyCounter.countingText.innerHTML = String(MyCounter.currentNumber);
  }

  public static increase(): void {
    MyCounter.currentNumber++;
    MyCounter.countingText.innerHTML = String(MyCounter.currentNumber)
  }

  public static decrease(): void {
    MyCounter.currentNumber--;
    MyCounter.countingText.innerHTML = String(MyCounter.currentNumber)
  }
}

export { MyCounter };
