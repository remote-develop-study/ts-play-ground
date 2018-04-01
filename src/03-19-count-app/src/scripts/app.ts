interface Counter {
  currentNumber: number;
  decrease(): void;
  increase(): void;
  minusButton: HTMLButtonElement;
  numberText: HTMLSpanElement;
  plusButton: HTMLButtonElement;
}

class MyCounter implements Counter {
  public currentNumber: number = 0;
  public numberText: HTMLSpanElement;
  public plusButton: HTMLButtonElement;
  public minusButton: HTMLButtonElement;

  constructor() {
    this.prepareButtons();
  }

  private prepareButtons(): void {
    this.plusButton = this.setButton('PLUS');
    this.minusButton = this.setButton('MINUS');
    this.numberText = this.setText();
  }

  private setButton(role: 'PLUS' | 'MINUS'): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');
    if (role === 'PLUS') {
      button.innerHTML = '+';
      button.className = 'plus';
      button.addEventListener('click', this.increase.bind(this));
    } else {
      button.innerHTML = '-';
      button.className = 'minus';
      button.addEventListener('click', this.decrease.bind(this));
    }
    return button;
  }

  private setText(): HTMLSpanElement {
    const numberText: HTMLSpanElement = document.createElement('span');
    numberText.innerHTML = '0';
    numberText.className = 'text';
    return numberText;
  }

  public increase(): void {
    this.currentNumber++;
    this.numberText.innerHTML = String(this.currentNumber);
  }

  public decrease(): void {
    this.currentNumber--;
    this.numberText.innerHTML = String(this.currentNumber);
  }
}

export { MyCounter };
