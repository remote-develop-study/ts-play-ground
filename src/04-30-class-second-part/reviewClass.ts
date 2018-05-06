/**
 * Exercise 1 - overloading
 * 1. super 키워드를 사용
 * 2. 함수 오버로딩을 사용하여 Child 클래스에서 Parent 클래스의
 * getProp() 메서드를 오버로딩해주세요
 */
class Parent {
  private id: number;

  constructor(_id: number) {
    this.id = _id;
  }

  getProp(): string {
    return `id: ${this.id}`;
  }
}

class Child extends Parent {
  private name: string;

  // TODO:
  constructor(_id:number, _name:string){
    super(_id);
    this.name = _name;
  }
  getProp(){
    return super.getProp() +` name: ${this.name}`;
  }
}

/**
 * Exercise 2 - override
 * 타입 가드와 오버로딩을 사용하여
 * Foo 인터페이스를 구현해주세요
 */
interface IFoo {
  bar: {
    (str: string): number;
    (num: number): string;
  };
}
/* 
interface Foo {
  bar(s: string): number;
  bar(n: number): string;
}
*/
//How to implement 'bar'..
class Foo implements IFoo {
  // TODO:
  thing:any;
  constructor(something:any){
    this.thing = something;
    if(typeof this.thing === 'number'){
      // bar(this.thing){return 'number';}
    }else if(typeof this.thing === 'string'){
      // bar(this.thing){return 'string';}  
    }
  }

  
}

/**
 * Exercise 3 - abstract class
 * 다음의 에제에 대한 중복 코드를 추상 클래스와 상속을
 * 활용하여 리팩토링합니다
 */

class Employee {
  public id: number;
  public name: string;

  printDetail(): string {
    return `id: ${this.id} name: ${this.name}`;
  }
}

class Manager {
  public id: number;
  public name: string;
  public Employees: Employee[];

  printDetail() {
    return `id: ${this.id} name: ${this.name} count: ${this.Employees.length}`;
  }
}

interface IEmployee {
  id: number;
  name: string;
  printDetail(): string;
  getDetail(): string; // <== abstract 메서드
}

abstract class AbstractEmployee implements IEmployee {
  // TODO:
  id: number;
  name: string;
  Employees?: Employee[];
  
  constructor(_id:number, _name:string){
    this.id = _id;
    this.name = _name;
  }
  abstract printDetail(): string;
  abstract getDetail():string;
}

class NewEmployee extends AbstractEmployee{
  // TODO:
  printDetail(){ 
    return `id: ${this.id} name: ${this.name}`;    
  }
}

class NewManager extends NewEmployee {
  // TODO:
  getDetail(){
    return `id: ${this.id} name: ${this.name} count: ${this.Employees.length}`;    
  }
}

export { Child, Foo, NewEmployee, NewManager };
