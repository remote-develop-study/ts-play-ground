// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
type Money = number;
type Deposit = (value: number) => void
type GetBalance = () => Money
type BankAccount = {
  money: Money;
  deposit: Deposit;
  getBalance: GetBalance;
}

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  }
};

type PersonInfo = {
  name: string;
  bankAccount: BankAccount;
  hobbies: [string, string]
}

export const mySelf: PersonInfo = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
