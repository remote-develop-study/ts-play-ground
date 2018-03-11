// 자판기 
const drinks = [
  {
    name : 'name1',
    price : '1000',

  }
]
// coin = 동전
class VendingMachine {
  coin : number;
  // drinks:[];
  drink1:number;
  // 1. 여기에서 선언을 하려면 생성자에서 선언을 해야되는 것인지
  constructor(coin:number, drink1:number, drinks:number) {
    this.coin = coin;
    this.drink1 = drink1;
    // 객체로 했을시
    // this.drinks = drinks;
  }
  // 2. VendingMachine 내부에서 함수를 하는 것과 -
// 동전을 넣었을시. 음료 가격 비교?
  coinInsert(coin: number) {
    this.drink1 = 1000;
    // 넣은 코인과 음료 가격비교
    let coinResult = coin - this.drink1;
    return coin > this.drink1 ? '거스름돈'+coinResult :  '잔액이 부족'+coinResult;
  }
}

// 2. - 외부에서 하는 것
class coinInsert extends VendingMachine{
  
  
}

