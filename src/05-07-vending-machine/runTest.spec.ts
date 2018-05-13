import drinks from './model/Drink';
import VendingMachine from './VendingMachine';

describe('자판기 만들기', () => {
  const vm = new VendingMachine(drinks);
  const iNeedDrink: string = 'cider';
  const iHaveMoney: number = 3000;

  it('음료수 리스트 확인', () => {
    expect(vm.showDrinks()).toHaveProperty('cola');
    expect(vm.showDrinks()).toHaveProperty('cider');
    expect(vm.showDrinks()).toHaveProperty('coffee');
  });

  it('음료수 반환', () => {
    // 돈 투입
    vm.insertMoney(iHaveMoney);

    expect(vm.chooseDrinks(iNeedDrink)).toMatch(iNeedDrink);
  });

  it('잔액 반환', () => {
    expect(vm.getBalance()).toBe(1500);
  });
});
