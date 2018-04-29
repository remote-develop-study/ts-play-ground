interface IBasic {
  id: number;
  name: string;
}

interface IPassword {
  readonly password: string; // <== 초기값은 1234로 할당해주세요
}

// Exercise 1 - Class
class BasicClass implements IBasic, IPassword {
  readonly password: string = '1234';
  constructor(public id: number, public name: string) {}
}
// Exercise 2 - Property Accessor
class PropertyAccessor {
  private _mySecret: string = 'secret';
  protected onlyChild: string = '';

  // Getter & Setter 활용하여 외부에서 mySecret에 접근하기
  // FIXME: Jest에서는 아래 코드 작성 없이도 테스트는 통과함

  // Mocha로 테스트 했을때는 아래와 같은 오류 내고 사망
  // TSError: x Unable to compile Typescript
  // Property 'mySecret' does not exist on type 'PropertyAccessor'. Did you mean '_mySecret'?

  get mySecret(): string {
    return this._mySecret;
  }

  set mySecret(newSecret: string) {
    this._mySecret = newSecret;
  }
}

interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  // FIXME: 테스트는 protected 멤버에 접근인데, 실제로는 mySecret에만 접근하는데 뭘까?
  constructor() {
    super();
  }

  public setOnlyChild(value: string) {
    this.mySecret = value;
  }

  public getOnlyChild() {
    return this.mySecret;
  }
}

// Exercise 3 - Static
class StaticProps {
  /**
   * 1. static 프로퍼티들을 만들고
   * 2. 해당 프로퍼티를 calc()를 활용하여 호출
   * 3. 객체 생성없이 바로 외부에서 StaticProperty.calc 로 접근하여 확인
   */
  // TODO:
  public static PI: number = 3.14;

  public static calc(multiplier: number): number {
    return StaticProps.PI * multiplier;
  }
}

// Exercise 4 - Abstract Class
abstract class Project {
  projectName: string = 'Default';
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

interface ITInterface {
  getName(): string;
}

class ITProject extends Project implements ITInterface {
  // TODO:
  constructor() {
    super();
  }

  public changeName(projectName: string): void {
    this.projectName = projectName;
  }

  public getName(): string {
    return this.projectName;
  }
}

export { BasicClass, PropertyAccessor, StaticProps, ChildClass, Project, ITProject };
