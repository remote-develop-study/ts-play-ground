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
greet();
greet("Anna");

// 3. 더 짧게 만들어주세요 (Spread Operator)
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

// 4. 더 짧게 만들어주세요 (Rest Operator)
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);

console.log(newArray);

// 5. 더 짧게 만들어주세요 (Destructuring Arrays)
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];

console.log(result1, result2, result3);

// 6. 더 짧게 만들어주세요 (Destructuring Objects)
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName;
var experience = scientist.experience;

console.log(firstName, experience);
