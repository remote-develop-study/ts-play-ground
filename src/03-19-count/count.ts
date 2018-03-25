const createDOMById = (id: string) => <HTMLElement>document.getElementById(id),
      _incBtn: HTMLButtonElement = <HTMLButtonElement>createDOMById('increment-btn')!,
      _decBtn: HTMLButtonElement = <HTMLButtonElement>createDOMById('decrement-btn')!,
      _countEle: HTMLSpanElement = <HTMLSpanElement>createDOMById('count-number')!;

let num: number = 0;

const renderCount = function(): void {
  _countEle.innerHTML = num.toString();
}

_countEle.addEventListener('load', function(): void {
  renderCount();
});

_incBtn.addEventListener('click', function(): void {  
  num += 1;
  renderCount();
});

_decBtn.addEventListener('click', function(): void {
  num -= 1;
  renderCount();
});