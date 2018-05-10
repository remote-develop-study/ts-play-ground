export default abstract class CoinMachine {
  balance: number = 1000000;
  inputMoney: number = 0;

  abstract getItem(): string;
  abstract getBalance(): number;
  abstract insertMoney(money: number): void;
}