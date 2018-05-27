import * as I from './types';

/**
 * 중복을 삭제하고 유니크한 요소만 반환하는 배열
 * 메서드를 가진 클래스입니다
 * 
 * 인터페이스와 테스트 케이스를 보고 구현해주세요
 */
// TODO: 로직과 제네릭 타입을 추가해주세요
class UniqueFilter implements I.Filter<T> {
  unique<T>(array:Array<T>): Array<T>{
    // console.log('array: ',array,'type: ',array); //type array에 담긴 값
    // console.log('new Set: ',new Set(array),'type: ',typeof new Set(array)); // type object
    // console.log('Array.from: ',Array.from(new Set(array)),'Array.from type: ',typeof Array.from(new Set(array))); //type object
    return Array.from(new Set(array));
  }
}

/**
 * 지정된 인터페이스를 구현한 후
 * 이번에는 claases.spec.ts 에서도 문제를 해결해주세요
 */
class Person<T> implements I.Person<T> {
  constructor(public name:T){

  }
  getName():T{
    return this.name;
  }
}

class Manager<T, N> extends Person<T> implements I.Manager<T,N> { 
  constructor(public name:T, public department:N){
    super(name);
  }
  public getName():T{
    return this.name;
  }
}

class Employee<T, N> extends Manager<T, N> {
  constructor(public name:T, public department: N){
    super(name, department);
  }

}

export {
  UniqueFilter,
  Person,
  Employee,
  Manager
}