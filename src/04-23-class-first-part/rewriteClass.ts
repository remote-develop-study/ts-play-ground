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
  acceleration: number = 0;
  constructor(name: string) {}

  honk(){
    return '빵빵!';
  }

  accelerate(speed: number) {
    return this.acceleration = this.acceleration + speed;
  }
}

// Exercise 2 - Inheritance
// var baseObject = {
//     width: 0,
//     length: 0
// };

class baseObject {
  width: number = 0;
  length: number = 0;

}

class Rectangle extends baseObject {
  // constructor() {
  //   super;
  // }
  calcSize():number {
    return this.width * this.length;
  }
}

// var Rectangle = Object.create(baseObject);

// Rectangle.calcSize = function() {
//     return this.width * this.length;
// };

// Exercise 3 - Getter & Setter
// var Person = {
//     _firstName: ""
// };

// 3번째
class Person {
  // constructor(firstname: string) {
  //   this._firstName = firstname;
  // }
  // 언디파인드 하지않으면 오류?
  private _firstName: string ='';


  get firstName():string {
    return this.firstName;
  }
  set firstName(value: string) {
    if (value.length >= 3) {
      this.firstName = value;
    } else {
      this.firstName = '';
    }
  }
}

// Object.defineProperty(Person, 'firstName', {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length >= 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = '';
//     }
//   },
//   enumerable: true,
//   configurable: true,
// });

export { Car, Rectangle, Person };
