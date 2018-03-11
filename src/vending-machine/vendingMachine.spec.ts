import { VendingMachine, test } from './vendingMachine';

let v = new VendingMachine();

describe('Object, name, price', () => {
  it('콜라는 2000원이 맞습니까?', () => {
    expect(test(v, 'coke-cola', 2000)).toBe('coke의 잔돈은 500원입니다');
  })
})
