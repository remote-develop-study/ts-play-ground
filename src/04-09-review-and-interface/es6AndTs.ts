// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
const double = (value:number):number => value * 2;

// 2. Default Parameters를 사용해주세요
const greet = (name:string = 'Max'):string  => {
  return name;
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min(...arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
let originArr = [55, 20];
const newArray = (newArr: number[]): number => Array.prototype.push(...originArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = (arr: number[]) => {
  let [result1, result2, result3, ...rest]  = arr;

  return result1 + ', ' + result2 + ', ' + result3;
};

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
interface Interface {
    firstName: string,
    experience: string
}
const scientist = (obj:Interface): Interface => {

let {firstName, experience} = obj;
  // firstName = obj.firstName;
  // experience = obj.experience;

  return { firstName, experience };
};

export { double, greet, minNumbers, newArray, testResults, scientist };
