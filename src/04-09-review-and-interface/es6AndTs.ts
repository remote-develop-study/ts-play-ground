// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요 o
var double = (value:any) => value*2;

// 2. Default Parameters를 사용해주세요 ?
var greet = function(name:any = 'name') {
  if (name === undefined) {
    name = 'Max';
  }
  console.log('Hello, ' + name);
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요 ?
// const minNumbers = (arr: number[]): number => Math.min.apply(Math, arr);
const minNumbers = (arr: number[]) => Math.min(...arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요 o
var originArr = [55, 20];
// const newArray = (newArr: number[]): number => Array.prototype.push.apply(originArr, newArr);
const newArray = (...newArr: number[]) => originArr.push(...newArr);;

// 5. 더 짧게 만들어주세요 (Destructuring Arrays) ?
const testResults = function(arr: number[]) {
  // var result1 = arr[0];
  // var result2 = arr[1];
  // var result3 = arr[2];
  const [result1, result2, result3] =arr
  return result1 + ', ' + result2 + ', ' + result3;
};

// 6. 더 짧게 만들어주세요 (Destructuring Objects) ?

const scientist = function(obj:any): Object {
  let {firstName, experience} = obj;
  // var firstName = obj.firstName;4
  // var experience = obj.experience;
  return { firstName, experience };
};

export { double, greet, minNumbers, newArray, testResults, scientist };
