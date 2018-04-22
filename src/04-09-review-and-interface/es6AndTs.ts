// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
let double = (value:number):number => {
  return value * 2;
};

// 2. Default Parameters를 사용해주세요 (기본 매개변수 반환 확인)
let greet = (name:string = 'jung juyoung'):string => {
  if (name === undefined) {
    name = 'Max';
  }
  console.log('Hello, ' + name);
  return name;
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min.apply(Math, arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => Array.prototype.push.apply(originArr, newArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = function(arr: number[] = [0,1,2]):string {
  let [result1, result2, result3] = [...arr]
  return result1 + ', ' + result2 + ', ' + result3;
};

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
  const scientist = function(obj): Object {
  // var firstName = obj.firstName;
  // var experience = obj.experience;
  {firstName, experience} = obj;
  return { firstName, experience };
};

export { double, greet, minNumbers, newArray, testResults, scientist };
