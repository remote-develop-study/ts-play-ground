/**
 * 인터페이스를 모두 달아주세요
 */

interface IPerson {
  firstLang: string;
  lastLang?: string;
  readonly age: number;
  sayHi(): string;
  [key: string]: any; // Excess property check가 자동으로 이루어지는데 어떤걸 처리하라는건지 애매함... 우선 Index signature 적용
}
interface IArray {
  [key: number]: string;
}
interface IFunction {
  (a: number, b: number): boolean
}
interface IClass {
  engine: string;
  disp(): void;
}

interface Drivable {
  // 주행을 시작합니다
  start(): void;
  // 거리를 받아 주행 여부를 반환합니다
  drive(distance: number): boolean;
  // 시작할때 거리가 주어진다
  getPosition(): number;
}

export { IPerson, IArray, IFunction, IClass, Drivable };
