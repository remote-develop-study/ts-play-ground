/**
 * https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
 * Type Alias는 구현 (implements) 및 확장(extends)이 불가능하다
*/

type BackAccount = {
  money: number;
  deposit: (val: number) => void;
  getBalance: () => number;
};

type MySelf = {
  name: string;
  bankAccount: BackAccount;
  hobbies: string[];
};

const bankAccount: BackAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
  getBalance: function() {
    return this.money;
  },
};

export const mySelf = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking'],
};
