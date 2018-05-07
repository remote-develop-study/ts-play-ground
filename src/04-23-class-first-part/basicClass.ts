interface IBasic {
  id: number;
  name: string;
}

interface IPassword {
  readonly password: string; // <== 초기값은 1234로 할당해주세요
}

// Exercise 1 - Class
class BasicClass implements IBasic, IPassword {
  // TODO:
  readonly password:string = '1234';
  constructor(public id:number, public name:string){
    console.log('BasicClass password: ', this.password, ', id: ', this.id, ', name: ',this.name);
  }
}

// Exercise 2 - Property Accessor
class PropertyAccessor {
  private _mySecret: string;
  protected onlyChild: string;
  // Getter & Setter 활용하여 외부에서 mySecret에 접근하기

  // TODO:
  get mySecret(): string{
    return this._mySecret;
  }
  set mySecret(mysecret:string){
    this._mySecret = mysecret;
  }
}

interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  // TODO:
  getOnlyChild(): string{
    return this.onlyChild;
  }
  setOnlyChild(value: string):void{
    this.onlyChild = value;
  }
}

// Exercise 3 - Static
class StaticProps {
  /**
   * 1. static 프로퍼티들을 만들고
   * 2. 해당 프로퍼티를 clac()를 활용하여 호출
   * 3. 객체 생성없이 바로 외부에서 StaticProperty.calc 로 접근하여 확인
  */

  // TODO:
  static PI:number = 3.14;
  static calc(param:number): number{
    return param*StaticProps.PI
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
  getName(): string{
    return this.projectName
  }
  changeName(paramName:string): void{
    this.projectName = paramName;
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