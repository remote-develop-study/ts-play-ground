interface Vmspec {
  products: {name: string, price: number, quantity: number}[];
  inputBasket: number;
  inputedBasket: number;
}

class Vm implements Vmspec {
  // public 속성
  products: {name: string, price: number, quantity: number}[];
  inputBasket = 0;
  inputedBasket = 0;

  // 음료수 세팅
  constructor(products: {name: string, price: number, quantity: number}[]) {
    this.products  = products;
  }

  insertCoin(money: number): void {
    this.inputBasket = money;
  }

  changeCoin() {
    // 거스름돈 반환
    // inputBasket 초기화
    // inputedBasket = match.price
  }

  getDrink(name: string) {
    // 1. 음료수와 매칭
    // 2. 들어온 돈과 음료수의 가격 비교
    // 3. 들어온돈 - 음료수의 돈
  }

  setDrink(products: [{name: string, price: number, quantity: number}]): void {
    // 자판기 주인이 음료수를 다시 설정할수 있게 만들기 현실의 자판기와는 괴리감이 크다. 사실은 추가 수정으로 접근해야 할듯
    this.products = products;
  }

}

const m1 = new Vm([
  {name: 'coke', price: 1000, quantity: 100},
  {name: 'fanta', price: 500, quantity: 100},
]);