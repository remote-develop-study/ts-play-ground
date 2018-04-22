// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
type Money = number;
type Desposit = (value: number) => void
type GetBalance = () => Money
type BankAccount = {
  money: Money,
  desposit: Desposit,
  getBalance: GetBalance
}

let bankAccount: BankAccount = {
  money: 2000,
  desposit (value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  }
};
type ObjInfo = {
  name: string;
  bankAccount: BankAccount;
  hobbies: [string, string]  
}
export const mySelf:ObjInfo = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
