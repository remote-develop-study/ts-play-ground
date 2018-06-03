/**
 * TODO:
 * 제네릭을 사용하여 런타임시에 결정되는 값의
 * 타입을 반환하는 함수로 재작성해주세요
 */
// function simple(data: any) {
//   return typeof data;
// }

function simple<T>(data:T):string{
  return typeof data;
}


/**
 * TODO:
 * 제네릭을 사용하여 sumAll 함수를 만 들어주세요
 */
// function sumAll(data: any) {
//   return data.reduce((prev, curr) => prev + curr, 0);
// }
function sumAll<T extends number>(data:T[]):number{
 return data.reduce((prev, curr) => prev + curr, 0);
}

/**
 * TODO:
 * 위의 sumAll 함수를 아래에 화살표 함수로 바꿔주세요
 */
// function sumAllArrow(data: any) {
// }
  // TODO:
  type sumAll = <T>(data: T[])=>T[];
  const sumAllArrow = <T>(data:T):T=>{
    return data;
  }
/**
 * TODO:
 * 유니온 타입과 extends를 사용하여 제네릭을 함께 사용해주세요
 */
// function strConcatNum(str: any, num: any) {
//   return str + num;
// }
function strConcatNum<T extends string | number>(str:T, num:T):number{
  return str as number+ num;
}
// 타입어셜션


export {
  simple,
  sumAll,
  sumAllArrow,
  strConcatNum,
}