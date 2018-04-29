import { getUserId } from "../01-30-interfaces/interfaces";

interface IBasic {
  id: number;
  name: string;
}

interface IPassword {
  readonly password: string;
}

// Exercise 1 - Class
class BasicClass implements IBasic, IPassword {
  // TODO:
  id = 1;
  name ='이름';
  password = '11';
}

var user = new BasicClass();


// Exercise 2 - Property Accessor
class PropertyAccessor {
  private _mySecret: string;
  protected onlyChild: string;

  constructor(mySecret:string,onlyChild:string){
    this._mySecret=mySecret;
    this.onlyChild=onlyChild;
  }
  // Getter & Setter 활용하여 외부에서 mySecret에 접근하기
  get mySecret(){
    return this._mySecret;
  }
  // set
  // TODO:
}

const props:PropertyAccessor = new PropertyAccessor('비밀','ㅇㅇ');
// props.set._mySecret = 'aa';
// props.



interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  // TODO:
  getOnlyChild():string{
    let a = '2';
    return a;
  }
  setOnlyChild(value:string){
    
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