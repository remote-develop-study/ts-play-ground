// 1. 화살표 함수로 바꿔주세요
const double = (value: number): number => value * 2;

// 2. Default Parameters를 사용해주세요
const greet = (name: string = 'Max'): string => name;

// 3. (Spread Operator)를 사용하여 minNumbers의 apply를 대체해주세요
const minNumbers = (arr: number[]): number => Math.min(...arr);

// 4. (Rest Operator)를 사용하여 newArr의 apply를 대체해주세요
const originArr = [55, 20];
const newArray = (newArr: number[]): number[] => [...originArr, ...newArr];

// 5. Destructuring Arrays
const testResults = function(arr: number[]) {
  const [res1, res2, res3] = arr;

  return res1 + ', ' + res2 + ', ' + res3;
};

// 6. Destructuring Objects
interface IObj {
  firstName: string;
  experience: number;
}

const scientist = function(obj: IObj): IObj {
  const { firstName, experience } = obj;

  return { firstName, experience };
};

export { double, greet, minNumbers, newArray, testResults, scientist };
