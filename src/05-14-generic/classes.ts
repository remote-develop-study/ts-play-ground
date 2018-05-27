import * as I from './types';

/**
 * 중복을 삭제하고 유니크한 요소만 반환하는 배열
 * 메서드를 가진 클래스입니다
 * 
 * 인터페이스와 테스트 케이스를 보고 구현해주세요
 */
// TODO: 로직과 제네릭 타입을 추가해주세요
class UniqueFilter implements I.Filter {
  
  unique(arr:Array<string>):Array<string>{
    let tempArr:Array<string> = [];
    for(let i=0; i<arr.length;i++){
      let flag = true;
      for(let j=0; j<tempArr.length; j++){
        if(tempArr[j] == arr[i]){
          flag = false;
          break;
        }
      }
      if(flag){
        tempArr.push(arr[i]);
      }
    }
    return tempArr;
  }
}

/**
 * 지정된 인터페이스를 구현한 후
 * 이번에는 claases.spec.ts 에서도 문제를 해결해주세요
 */
class Person implements I.Person {
  name:string;
  constructor(getName:string){
    this.name = getName;
  }
  getName():string{
    return this.name;
  }
}

class Manager extends Person implements I.Manager { 
  department: number;
  constructor(getName:string, getDep:number){
    super(getName);
    this.department = getDep;
  }
}

class Employee extends Manager { 
  constructor(getName:string, getDep:number){
    super(getName, getDep);
  }
}

export {
  UniqueFilter,
  Person,
  Employee,
  Manager
}