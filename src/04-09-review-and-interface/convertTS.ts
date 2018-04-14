// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요

let bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function () {
    return this.money;
  }
};
console.log(typeof bankAccount.money);

export const mySelf = {
  name: "Max",
  bankAccount: bankAccount,
  // hobbies: ["Sports", "Cooking"]
};

// 입금
function insert(insertCoin: number) {
  let result = bankAccount.money + insertCoin;
  return result;
}
insert(3000);

