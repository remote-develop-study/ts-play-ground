/**
 * 3개의 클래스를 100% TS 클래스로 다시 작성해주세요
 */

class Car{
    accelration: number = 0;
    constructor(public name: string){
        console.log('Car constructor name: ',this.name);
    }
    honk(): string{
        return '빵빵!';
    }
    accelerate(speed: number): void{
        this.accelration = this.accelration + speed;
    }
}
// Exercise 2 - Inheritance
// var baseObject = {
//     width: 0,
//     length: 0
// };

// var Rectangle = Object.create(baseObject);

// Rectangle.calcSize = function() {
//     return this.width * this.length;
// };
class baseObject{
    width:number = 0;
    length:number = 0;
}
class Rectangle extends baseObject{
    calcSize(): number{
        return this.width * this.length;
    }
}
// Exercise 3 - Getter & Setter
// var Person = {
//     _firstName: ""
// };

// Object.defineProperty(Person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length >= 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

type stringOrUndefined = string | undefined;
class Person{
    private _firstName: stringOrUndefined;
    get firstName(): stringOrUndefined{
        return this._firstName
    }
    set firstName(param:stringOrUndefined){
        if(param.length >= 3){
            this._firstName = param;
        }else{
            this._firstName = "";
        }
    }
}

export {
  Car,
  Rectangle,
  Person,
}