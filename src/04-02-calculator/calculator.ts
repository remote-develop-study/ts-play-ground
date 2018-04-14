interface Calculator {
    (num1: number, num2: number):number;
}

const sumFunc: Calculator = function(num1:number, num2:number):number{
    return num1 + num2;
};

const minusFunc: Calculator= function(num1:number, num2:number):number{
    return num1 - num2;
};

const multiplicationFunc: Calculator= function(num1:number, num2:number):number{
    return num1 * num2;
};

const divisionFunc: Calculator= function(num1:number, num2:number):number{
    return num1 / num2;
};


