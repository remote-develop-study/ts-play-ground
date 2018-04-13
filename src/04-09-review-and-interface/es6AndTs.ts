// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
var double = function(value) {
  return value * 2;
};

// 2. Default Parameters를 사용해주세요
var greet = function(name) {
  if (name === undefined) {
    name = "Max";
  }
  console.log("Hello, " + name);
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min.apply(Math, arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => Array.prototype.push.apply(originArr, newArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = function(arr: number[]): number {
  return arr[0], arr[1], arr[2];
}

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
const scientist = function(obj): Object {
  var firstName = obj.firstName;
  var experience = obj.experience;

  return { firstName, experience };
}

export {
  double,
  greet,
  minNumbers,
  newArray,
  testResults,
  scientist,
}