interface Counter {
  count: number;
  increment(): void;
  decrement(): void;
  print(target: string): void;
}

class countUpDown implements Counter {
  public count: number = 0;
  constructor () {}
  public increment(): void {
    this.count++;
    this.print('.result')
  }
  public decrement(): void {
    this.count--;
    this.print('.result')
  }
  public print(target: string): void {
    const domObj = document.querySelector(target);
    if(domObj !== null) {
      domObj.innerHTML = String(this.count);
    }
  }
}

