/**
 * TODO:
 * 제네릭을 사용하여 런타임시에 결정되는 값의
 * 타입을 반환하는 함수로 재작성해주세요
 */
function simple<T>(data:T):string {
  return typeof data;
}

/**
 * TODO:
 * 제네릭을 사용하여 sumAll 함수를 만들어주세요
 */
function sumAll<T>(data:T[]):T[] {
  return data.reduce((prev:T, curr:T) => prev + curr, 0);
}

/**
 * TODO:
 * 위의 sumAll 함수를 아래에 화살표 함수로 바꿔주세요
 */
const sumAllArrow: sumAll = <T>(data: T[]): T => {
  // TODO:
  return data.reduce((prev:T,curr:T) => prev + curr,0);
}

/**
 * TODO:
 * 유니온 타입과 extends를 사용하여 제네릭을 함께 사용해주세요
 */
function strConcatNum<T extends string | number>(str: T, num: T):T {
  return str + num;
}

export {
  simple,
  sumAll,
  sumAllArrow,
  strConcatNum,
}