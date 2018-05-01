// Type Aliase를 사용해서 빠짐없이 타입을 달아주세요
/* type aliase 와 interface의 차이점
1. interface는 새로운 이름을 만들지만, aliase는 새로운 이름을 만들지 않는다.?
2. type aliase는 확장하거나 구현할 수 없다.
*/

type BackAccount = {
  money: number;
  deposit:(val: number) => void;
  getBalance:() => number;
}

type MySelf = {
  name: string;
  bankAccount: BackAccount;
  hobbies: string[];
};

let bankAccount: BackAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  }
};

export const mySelf:MySelf = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};
