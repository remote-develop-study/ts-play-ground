// 자판기 


class vendingMachine{
  constructor(){

  }
  coin:number;
  result: number;
  drink1 = 1000;
  // drink = [];
  // constructor(){
  //   this.coin = 0;
  // }
  // coinResult = 0;

 coinInsert(coin:number){
  let coinResult = coin - this.drink1;
  return coinResult;
 }
}

