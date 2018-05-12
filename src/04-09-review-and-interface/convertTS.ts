// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요

type Deposit = (value: number) => void;
type GetBalance = () => number;
type BankAcount = {
    money: number,
    deposit: Deposit,
    getBalance: GetBalance
}
let bankAccount: BankAcount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  }
};
type MySelf = {
    name: string,
    bankAccount: BankAcount,
    hobbies: [string, string]
}
export const mySelf: MySelf = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
