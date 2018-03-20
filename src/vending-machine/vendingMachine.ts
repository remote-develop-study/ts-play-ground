// 자판기 
// const drinks = [
//   {
//     name : 'name1',
//     price : '1000',
//   }
// ]


// coin = 동전
// drinks.name = 음료이름
// resultCoin = 거스름 돈
// drinks.price = 음료가격
class VendingMachine {
  // 여기서 private선언을 하지 않으면 getcoin에서 오류가 난다
  constructor(private coin: number, private drinks: string) {
  }
  getcoin(): number {
    return this.coin;
  }
  getdrinks(): string {
    return this.drinks;
  }
}
function coinInsert() {
  let insert: VendingMachine = new VendingMachine(2000, 'cola')
  // this.drink1 = 1000;
  console.log(insert.getcoin() + ", " + )
  // console.log(insert.)
  // 넣은 코인과 음료 가격비교
  return coin > this.drink1 ? '거스름돈' + coinResult : '잔액이 부족' + coinResult;
}


