/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function tuple(arr:[string, number]) {
  return arr;
}
export function tupleFirstValue(arr:[string, number]): string {
  return arr[0];
}

// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function testEnum(color: Color) {
  const colorName = color.Green;
  return colorName;
}
// any에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function anyLastValue(arr: any) {
  return arr[arr.length - 1];
}
// union에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function union(param: string | boolean | number) {
  return param;
}
/*
 유니온이란 특정 복수개의 타입을 지정할수 있는데 모카로 테스트 코드의 작성여부는 ?
*/
// never와 void에 대해 직접 공부한 후 비교 설명과 예제 코드를 만들어주세요
export function isVoid(): void {
  // write sentence no return
  console.log(111);
}
export function isNever(message: string): never {
  throw new Error(message);
}
