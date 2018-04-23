// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
let double = (value:number):number => {
  return value * 2;
};

// 2. Default Parameters를 사용해주세요 (기본 매개변수 반환 확인)
let greet = (name:string = "Max"):string => {
  console.log('Hello, ' + name);
  return name;
};

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
/**
 * 
 * Math.min 최소값
 * Math.max 최대값 구하기  처음 알게됨 좋은듯.
 *  
 */
const minNumbers = (arr: number[]): number => Math.min(...arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => originArr.push(...newArr);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = (arr: number[]):string => {
  let [result1, result2, result3] = [...arr]
  return result1 + ', ' + result2 + ', ' + result3;
};

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
/**
 * 객체 리터럴 반환 간결한 구문으로 params => {key:value}는 예상대로 작동하지 않음
 * 이는 중괄호 ({}) 안 코드가 일련의 문(즉,firstName는 라벨 취급, 객체 리터럴 내 키가 아니라) 으로 파싱(parse, 구문분석) 되기 때문이다.
 * 객체 리터러를 괄호로 감싸는 것을 기억하세요!!
 */
const scientist = ({firstName, experience} : {firstName: string, experience: number}) => ({firstName, experience})


export { double, greet, minNumbers, newArray, testResults, scientist };
