import { IPerson, IArray, IFunction, IClass, Drivable } from './interfaceModules';

// Optional Properties & Readonly properties & Excess Property Checks 사용해서 달기
const employee: IPerson = {
  firstLang: 'JavaScript',
  lastLang: 'TypeScript',
  age: 22,
  sayHi: function(): string {
    return 'Hello';
  },
};

// Indexable Types 사용해서 달기
const arr: IArray = ['양배추', '순무', '무', '당근', '딸기', '바나나', '망고'];

// Function Types
const sum: IFunction = (a, b) => typeof a === 'number' || typeof b === 'number';

// Class Types
class LegacyCar implements IClass {
  engine: string;

  constructor(engine: string) {
    this.engine = engine;
  }

  disp(): void {
    console.log('Engine is  :   ' + this.engine);
  }
}

/**
 * 이번에는 반대로 인터페이스를 보고 구현을 해주세요
 * 요구사항은 interfaceCar.spec.ts 에 있습니다!
 */
interface Drivable {
  // 주행을 시작합니다
  start(): void;
  // 거리를 받아 주행 여부를 반환합니다
  drive(distance: number): boolean;
  // 시작할때 거리가 주어진다
  getPosition(): number;
}
export default class Car implements Drivable {
  
  start():any{
    console.log('부릉부릉');
  }
  drive(distance:number):boolean {
    return typeof(distance) == 'number' ? true : false;
    //return distance > 0
  };
  
  getPosition():number{
    return 0;
  }
}
