import { BasicClass, PropertyAccessor, StaticProps, ChildClass, Project, ITProject } from './basicClass';

describe('Exercise 1 - Class', () => {
  const id = 1;
  const name = '이름';
  const password = '12345'
  const user = new BasicClass(1, '이름');

  it('알맞은 객체가 생성되었는지 확인', () => {
    expect(user).toEqual({ id, name, password });
  });
});

describe('Exercise 2 - Property Accessor', () => {
  it('getter & setter를 활용한 private 멤버에 접근', () => {
    const props = new PropertyAccessor();
    // props.mySecret = '비밀';
       props.getSecret();
  /**
   * props._mySecret = '넌 왜 안될까?' <= 오류가 뜨는 이유를 알아보세요
   * props.onlyChild = '넌 또 왜 안될까?' <= 오류가 뜨는 이유를 알아보세요
   * 비밀이기때문에(private) get, set을 만들어서 써야 하는데... 자바스크립트 만세!!
  */
  
    // expect(props.mySecret).toBe('비밀');
    expect(props.setSecret('비밀')).toBe('비밀');
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
    // 추상 클래스는 직접적으로 인스턴스화할 수 없습니다. 개체를 만들수 없게 정의해놓음 이유는 나도 알고 싶당.
    // 메서드는 가질수 있고 인스턴스화는 안되면서 왜 추상클래스라고 이름 지었는지 모르겠당.
    // 인터페이스인데 메서드를가진 느낌이랄까.. 그러면서 상속도 되고
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
