// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
/**
 * Type Aliase 다시 공부한 후 수정 예정
 * 인터페이스와 유사함, primitive, Union, tuple, 직적 작성한 타입에 이름을 붙일 수있다.
 * Generic을 사용할수 있다. 
 */

type Money = number;
type Deposit = (value: number) =>  void;
type GetGalance = ()=> Money;
type bankAccountType ={
  money: Money;
  deposit: Deposit;
  getBalance: GetGalance;

}
let bankAccount:bankAccountType = {
  money: 2000,
  deposit(value:number) {
    this.money += value;
  },
  getBalance: function():number {
    return this.money;
  }
};

type mySelfType = {
  name: string,
  bankAccount: bankAccountType,
  hobbies: [string, string]
}
export const mySelf:mySelfType = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
