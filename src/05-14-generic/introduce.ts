/**
 * TODO:
 * 제네릭을 사용하여 런타임시에 결정되는 값의
 * 타입을 반환하는 함수로 재작성해주세요
 */
function simple(data: any) {
  return typeof data;
}

/**
 * TODO:
 * 제네릭을 사용하여 sumAll 함수를 만들어주세요
 */
function sumAll(data: any) {
  return data.reduce((prev, curr) => prev + curr, 0);
}

/**
 * TODO:
 * 위의 sumAll 함수를 아래에 화살표 함수로 바꿔주세요
 */
function sumAllArrow(data: any) {
  // TODO:
}

/**
 * TODO:
 * 유니온 타입과 extends를 사용하여 제네릭을 함께 사용해주세요
 */
function strConcatNum(str: any, num: any) {
  return str + num;
}

export {
  simple,
  sumAll,
  sumAllArrow,
  strConcatNum,
}