// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
let bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  }
};

export const mySelf = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
