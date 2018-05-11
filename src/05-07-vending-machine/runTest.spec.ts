import drinks from './model/Drink';
import VendingMachine from './VendingMachine';

describe('자판기 만들기', () => {
  const vm = new VendingMachine(drinks);

  it('음료수 리스트 확인', () => {
    expect(vm.showDrinks()).toBe('dsdad');
  });

  it('돈을 제공한다', () => {
    expect(vm.insertMoney(2000)).toBe(vm.inputMoney);
  });
  
  it('음료수를 고른다', () => {
    expect(vm.chooseDrinks('cider')).toBe(0);
  });

  it('음료수를 받는다', () => {

  });

  it('잔액을 받는다', () => {
    expect(vm.getBalance()).toBe(0);
  });

  it('음료수 반환', () => {

  });

  it('잔액 반환', () => {

  });
});
