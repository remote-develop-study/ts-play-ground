import { mySelf } from './convertTS';

describe('TS 스터디 4월 9일 TS 전환', () => {
  it('bankAccount 객체의 money 프로퍼티 타입을 확인합니다', () => {
    expect(typeof mySelf.bankAccount.money).toBe('number');
  });
  it('bankAccount 객체의 getBalance 반환 타입을 확인한다. ', ()=> {
    expect(typeof mySelf.bankAccount.getBalance()).toBe('number')
  });
  it('입금 후 잔고를 확인합니다', () => {
    const { bankAccount: myBank } = mySelf;
    myBank.deposit(10000);
    expect(myBank.getBalance()).toBe(12000);
  });
});
