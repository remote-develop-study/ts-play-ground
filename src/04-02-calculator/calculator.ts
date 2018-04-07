interface Calculator {
    (num1: number, num2: number):number;
}
let sumFunc: Calculator;
sumFunc = function(num1:number, num2:number):number{
    return num1 + num2;
};

let minusFunc: Calculator;
minusFunc= function(num1:number, num2:number):number{
    return num1 - num2;
};

let multiplicationFunc: Calculator;
multiplicationFunc= function(num1:number, num2:number):number{
    return num1 * num2;
};

let divisionFunc : Calculator;
divisionFunc= function(num1:number, num2:number):number{
    return num1 / num2;
};