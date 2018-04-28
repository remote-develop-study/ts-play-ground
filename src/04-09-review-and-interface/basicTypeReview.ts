/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
// 고정된 요소의 타입을 지정한다.
export function tuple(arr:[string, number]) {
  return arr;
}
export function tupleFirstValue(arr:[string, number]): string {
  return arr[0];
}

// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
// enum 이란 자바스크립에는 없는 자료형 구조 열거형이라고 불리우며 키로도 값을 얻을수 있고 값으로 키를 얻을수 있다.
export function testEnum(color: Color) {
  const colorName = color.Green;
  return colorName;
}
// 기존의 자바스크립트란 동일한 타입 어떤 타입이라도 들어갈수 있다.

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
// 반환값이 없는 경우
export function isVoid(): void {
  // write sentence no return
  console.log(111);
}
//
export function isNever(message: string): never {
  throw new Error(message);
}
export function controlFlowAlwaysIsWithNever (value: string | number) {
  if(typeof value === 'string') {
    value;  // Type string
  }else if (typeof value === 'number') {
    value;  // Type number
  }else {
    value; // Type never;
  }
}
// never반환 형식이 없는 함수가 반환 되지 않습니다 . 그것은 또한 돌아 오지 않는다 undefined. 함수가 정상적으로 완료되지 않았기 때문에 오류가 발생하거나 전혀 실행되지 않습니다.