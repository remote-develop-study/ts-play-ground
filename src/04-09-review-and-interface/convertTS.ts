
type IbankAccount = { money: number, deposit(value: number): void, getBalance(): number }

// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
let bankAccount: IbankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  },
  getBalance: function (): number {
    return this.money;
  }
};

export const mySelf: { name: string, bankAccount: IbankAccount, hobbies: string[] } = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
