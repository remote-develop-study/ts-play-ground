/**
 * 3개의 클래스를 100% TS 클래스로 다시 작성해주세요
 */

// Exercise 1 - Class
// function Car() {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function() {
//         return "빵빵!";
//     };

//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
class Car {
  name: string;
  acceleration: number;

  constructor(theName: string) {
    this.name = theName;
    this.acceleration = 0;
  }

  honk() {
    return '빵빵!';
  }
  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
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
class baseObject {
  width: number;
  length: number;

  constructor( theWidth = 10, theLength = 10) {
    this.width = theWidth;
    this.length = theLength;
  }
}
class Rectangle extends baseObject {
  constructor() {
    super();
  }
  calcSize() {
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

class Person {
  private _firstName: string | undefined = 'JYP';

  constructor() {
  }

  get firstName(): string | undefined {
    return this._firstName;
  }
  set firstName(theName: string | undefined) {
    this._firstName = theName && theName.length >= 3 ? theName : undefined
  }
}

export {
  Car,
  Rectangle,
  Person,
}