import { BasicClass, PropertyAccessor, StaticProps, ChildClass, Project, ITProject } from './basicClass';

describe('Exercise 1 - Class', () => {
  const expectUser = {
    id: 1,
    name: '이름',
    password: '1234'
  }

  const user = new BasicClass(1, '이름');

  it('알맞은 객체가 생성되었는지 확인', () => {
    expect(user).toEqual(expectUser);
  });
});

describe('Exercise 2 - Property Accessor', () => {
  it('getter & setter를 활용한 private 멤버에 접근', () => {
    const props = new PropertyAccessor();
    props.mySecret = '비밀';
  /**
   * props._mySecret = '넌 왜 안될까?' <= 오류가 뜨는 이유를 알아보세요
   * props.onlyChild = '넌 또 왜 안될까?' <= 오류가 뜨는 이유를 알아보세요
  */
  
    expect(props.mySecret).toBe('비밀');
  });
  
  it('서브 클래스에서 기본 클래스의 protected 멤버 접근', () => {
    const child = new ChildClass();
    const mySecret = '비밀';
    
    child.setOnlyChild(mySecret);
    expect(child.getOnlyChild()).toBe(mySecret);
  })
});

describe('Exercise 3 - Static', () => {
  it('static 프로퍼티 객체 생성없이 바로 접근', () => {
    expect(StaticProps.PI).toBe(3.14);
  });
  
  it('static 메서드 객체 생성없이 바로 접근', () => {
    expect(StaticProps.calc(3)).toBe(9.42);
  });
});

describe('Exercise 4 - Abstract Class', () => {
  const itProject = new ITProject();

  it('use method from Project to ITProject', () => {
    // const project = new Project(); <= 오류가 뜨는 이유를 알아보세요
    expect(itProject.calcBudget()).toBe(2000);
  });
  
  it('get projectName from Project to ITProject', () => {
    expect(itProject.getName()).toBe('Default');
  });

  it('change project name', () => {
    const newProjectName = 'IT Project';

    itProject.changeName(newProjectName);

    expect(itProject.getName()).toBe(newProjectName);
  });
});
