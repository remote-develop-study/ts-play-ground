// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
// var double = function(value) {
//   return value * 2;
// };
var double = (value:number) => value*2;

// 2. Default Parameters를 사용해주세요
// var greet = function(name) {
//   if (name === undefined) {
//     name = 'Max';
//   }
//   console.log('Hello, ' + name);
// };

let greet = function(name:string = 'Max') {
  return name;
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
// const minNumbers = (arr: number[]): number => Math.min.apply(Math, arr);
const minNumbers = (arr:number[]):number => Math.min(...arr);
//apply() 메소드는 주어진 this값과 arguments로 함수를 호출합니다.
//arguments에는 배열( 또는 유사배열객체 array-like object)가 올 수 있습니다.

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => Array.prototype.push.apply(originArr, newArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = function(arr: number[]) {
  // var result1 = arr[0];
  // var result2 = arr[1];
  // var result3 = arr[2];
  let [result1, result2, result3] = arr;
  return result1 + ', ' + result2 + ', ' + result3;
};
// const testResults = (arr:number[]):string => arr.join(', ')//진짜 짧당..

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
const scientist = function(obj): Object {
  // var firstName = obj.firstName;
  // var experience = obj.experience;
  let firstName,experience;
  return ({firstName, experience} = { firstName: obj.firstName, experience: obj.experience});
};
//const scientist = (obj:{firstName:string, experience:number}):Object => obj //놀랍습니다..
export { double, greet, minNumbers, newArray, testResults, scientist };
