// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
var double = (value: number) => {
  return value * 2;
}

// 2. Default Parameters를 사용해주세요
var greet = function(name = "android") {
  return 'Hello, ' + name;
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min(...arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => originArr.push(...newArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = function(arr: number[]) {
  const [result1, result2, result3] = [...arr]

  return result1 + ', ' + result2 + ', ' + result3;
};

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
const scientist = function(obj:{firstName: string, experience:number}): Object {
  const {firstName, experience} = obj

  return { firstName, experience };
};

export { double, greet, minNumbers, newArray, testResults, scientist };
