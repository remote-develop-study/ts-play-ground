import { IPerson, IArray, IFunction, IClass, Drivable } from './interfaceModules';

// Optional Properties & Readonly properties & Excess Property Checks 사용해서 달기
const employee: IPerson = {
  firstLang: 'JavaScript',
  lastLang: 'TypeScript',
  age: 22,
  sayHi: function (): string {
    return 'Hello'
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
export default class Car implements Drivable {
  start(): void {

  }
  drive(distance: number): boolean {
    return distance > 0
  }
  getPosition(): number {
    return 0
  }
}
