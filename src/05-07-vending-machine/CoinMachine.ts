export default abstract class CoinMachine {
  balance: number = 0;
  inputMoney: number = 0;

  abstract getBalance(): number;
  abstract insertMoney(money: number): void;
}
