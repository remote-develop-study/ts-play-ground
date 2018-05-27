import { UniqueFilter, Person, Employee, Manager } from './classes';

describe('Generic class 1 - 유니크 필터 만들기', () => {
  const uniqueFilter = new UniqueFilter<string>();

  it('중복된 요소가 아닌 유니크 요소만 반환', () => {
    const uniqueAlphabet = uniqueFilter.unique(['a', 'b', 'c', 'a', 'b']);

    expect(uniqueAlphabet).toEqual(['a', 'b', 'c']);
  });
});

describe('Generic class 2 - 컴파일시점에 오류잡기', () => {
  const tuhbm = { name: 'TGK', department: 99 }
  // TODO: 제네릭 타입을 지정해주세요
  let workers: Array<Person> = [];

  it('workers[2] 컴파일 오류 해결하기', () => {
    workers[0] = new Person('CDK');
    workers[1] = new Manager('JUK', 23);
    workers[2] = new Employee('TGK', 99)

    expect(workers[2]).toEqual(tuhbm);
  });
  it('workers[2] getName', () => {
    expect(workers[2].getName()).toBe(tuhbm.name);
  });
});
