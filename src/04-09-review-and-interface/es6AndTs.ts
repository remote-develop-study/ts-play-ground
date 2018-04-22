// 100% TS & ES6로 전환 (타입도 빠짐없이 달아주세요)

// 1. 화살표 함수로 바꿔주세요
const double = (v: number): number => v * 2

// 2. Default Parameters를 사용해주세요
const greet = (name: string = 'Max') => console.log(`Hello, ${name}`)

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min(...arr);
// s가 빠져야할듯..?

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
var originArr = [55, 20];
const newArray = (newArr: number[]): number => originArr.push(...newArr);
// Array.prototype.push 는 결과값으로 변경된 객체의 length property를 반환함!
// 따라서 변수의 이름은 newArrayLength
// ref: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
const testResults = (arr: number[]): string => arr.join(', ')

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
// Solution1
const scientist = ({ firstName, experience }: { firstName: string, experience: number }) => ({ firstName, experience })

// Solution2
type IScientist = { firstName: string, experience: number }
const scientist2 = ({ firstName, experience }: IScientist) => ({ firstName, experience })
// object vs. Object vs. {}
// ref : https://blog.mariusschulz.com/2017/02/24/typescript-2-2-the-object-type

export { double, greet, minNumbers, newArray, testResults, scientist };
