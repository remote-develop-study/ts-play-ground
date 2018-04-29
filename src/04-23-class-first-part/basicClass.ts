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
  // readonly password:string;
  readonly password:string = '111';
  constructor(public id:number,public name:string){}

  }
}

const user = new BasicClass(1,'이름')


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
  set mySecret(Secret :string){
    this._mySecret  =Secret;
  }
  // TODO:
}

// const props:PropertyAccessor = new PropertyAccessor('비밀','ㅇㅇ');
// props.



interface IAccessor {
  getOnlyChild(): string;
  setOnlyChild(value: string): void;
}

// Exercise 2 - Property Accessor (protected)
class ChildClass extends PropertyAccessor implements IAccessor {
  // TODO:
  getOnlyChild():string{
    return this.mySecret;
  }
  setOnlyChild(value:string){
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
  static calc(num:number){
    return StaticProps.PI * num;
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
  getName():string{
    return this.projectName;
  }
  changeName(name:string):void{
    this.projectName = name;
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