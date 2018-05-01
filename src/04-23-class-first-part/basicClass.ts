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
  public id:number;
  public name:string;
  public password:string = '1234';
  constructor(a:number,b:string){
    this.id = a;
    this.name = b;
  }
}

// Exercise 2 - Property Accessor
class PropertyAccessor {
  private _mySecret: string;
  protected onlyChild: string;
  constructor(child:string){ this.onlyChild = child }
  // Getter & Setter 활용하여 외부에서 mySecret에 접근하기
  get mySecret():string{
    return this._mySecret;
  }

  set mySecret(password:string){
    if(password){
      this._mySecret = password;
    }else{
      this._mySecret = '오류:password가 없다';
    }
  }
  // TODO:
}

interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  // TODO:
  constructor(str:string){
    super(str);
  }
  setOnlyChild(value:string){
    this.onlyChild = value;
  }
  getOnlyChild():string{
    return this.onlyChild;
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
}

export {
  BasicClass,
  PropertyAccessor,
  StaticProps,
  ChildClass,
  Project,
  ITProject,
}