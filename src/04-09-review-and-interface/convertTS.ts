// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
let bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
