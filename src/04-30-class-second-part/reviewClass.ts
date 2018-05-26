/**
 * Exercise 1 - override
 * 1. super 키워드를 사용
 * 2. 오버라이드을 사용하여 Child 클래스에서 Parent 클래스의
 * getProp() 메서드를 오버라이딩해주세요
 */
class Parent {
  private id: number;

  constructor(_id: number) {
    this.id = _id;
    // console.log('@@ inside the Parent Class construcor _id: ',_id);
  }

  getProp(): string {
    // console.log('@@ inside the Parnet Class getProp this.id: ',this.id);
    return `id: ${this.id}`;
  }
}

class Child extends Parent {
  // private name: string;

  // TODO:
  constructor(private _id: number, private _name: string){
    super(_id);
    // console.log('@@ inside the Child Class constructor,  pass "_id" from Child Class to Parent Class constructor: ', _id);
  }
  getProp():string{
    // console.log('@@ inside the Child Class getProp this._id:',this._id,' this._name:',this._name);
    return `id: ${this._id} name: ${this._name}`;
  }
}

/**
 * Exercise 2 - overloading
 * 타입 가드와 오버로딩을 사용하여
 * Foo 인터페이스를 구현해주세요
 */
interface IFoo {
  bar: {
    (str: string): string;
    (num: number): string;
  };
}

class Foo implements IFoo {
  // TODO:
  bar(str:string): string;
  bar(num:number): string;
  bar(arg:any): string{
    return typeof arg === 'string' ? 'string' : 'number';
  }
}

/**
 * Exercise 3 - abstract class
 * 다음의 에제에 대한 중복 코드를 추상 클래스와 상속을
 * 활용하여 리팩토링합니다
 */

// class Employee {
//   public id: number;
//   public name: string;

//   printDetail(): string {
//     return `id: ${this.id} name: ${this.name}`;
//   }
// }

// class Manager {
//   public id: number;
//   public name: string;
//   public Employees: Employee[];

//   printDetail() {
//     return `id: ${this.id} name: ${this.name} count: ${this.Employees.length}`;
//   }
// }

interface IEmployee {
  id: number;
  name: string;
  printDetail(): string;
  getDetail(): string; // <== abstract 메서드
}

abstract class AbstractEmployee implements IEmployee {
  // TODO:
  public id: number;
  public name: string;
  constructor(){
    // console.log('class AbstractEmployee constructor id: ',this.id,', name: ',this.name);
  }
  printDetail():string{
    return `id: ${this.id} name: ${this.name}`;
  }
  abstract getDetail():string;
}

class NewEmployee extends AbstractEmployee {
  // TODO:
  constructor(){
    super();
    // console.log('NewEmployee constructor super(): ',super());//NewEmployee{}
  }
  getDetail():string{
    // console.log('class NewEmployee getDetail super.printDetail: ',super.printDetail())
    return super.printDetail();
  }
}

class NewManager extends NewEmployee {
  // TODO:
  public Employees: NewEmployee[];
  constructor(){
    super();
    // console.log('NewManager constructor super(): ',super());//NewManager{}
  }
  getDetail():string{
    // console.log('class NewManager getDetail super.printDetail: ',super.printDetail())
    return `${super.getDetail()} count: ${this.Employees.length}`;
  }
  
}

export { Child, Foo, NewEmployee, NewManager };
