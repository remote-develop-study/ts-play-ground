interface IBasic {
  id: number;
  name: string;
}

interface IPassword {
  readonly password: string; // <== 초기값은 1234로 할당해주세요
}

// Exercise 1 - Class
class BasicClass implements IBasic, IPassword {
  id: number;
  name: string;
  readonly password: string = '1234';

  constructor(_id: number, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}

// Exercise 2 - Property Accessor
class PropertyAccessor {
  private _mySecret: string = '';
  protected onlyChild: string = '';
  // Getter & Setter 활용하여 외부에서 mySecret에 접근하기

  get mySecret(): string {
    return this._mySecret;
  }

  set mySecret(_mySecret: string) {
    this._mySecret = _mySecret;
  }
}

interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  getOnlyChild(): string {
    return this.onlyChild;
  }
  
  setOnlyChild(value: string): void {
    this.onlyChild = value;
  }
}

// Exercise 3 - Static
class StaticProps {
  static PI: number = 3.14;

  static calc(num: number): number {
    return this.PI * num;
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
  changeName(name: string): void {
    this.projectName = name;
  }

  getName(): string {
    return this.projectName;
  }
}

export {
  BasicClass,
  PropertyAccessor,
  StaticProps,
  ChildClass,
  Project,
  ITProject,
}