/**
 * 인터페이스를 모두 달아주세요
 */

interface IPerson {}
interface IArray {}
interface IFunction {}
interface IClass {}

interface Drivable {
  // 주행을 시작합니다
  start(): void;
  // 거리를 받아 주행 여부를 반환합니다
  drive(distance: number): boolean;
  // 시작할때 거리가 주어진다
  getPosition(): number;
}

export { IPerson, IArray, IFunction, IClass, Drivable };
