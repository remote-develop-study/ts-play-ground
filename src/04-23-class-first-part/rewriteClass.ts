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
  public acceleration: number = 0;
  constructor(public name: string) {}

  public honk(): string {
    return '빵빵!';
  }

  public accelerate(speed: number): void {
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

class BaseObject {
  protected _width: number = 0;
  protected _length: number = 0;
}

class Rectangle extends BaseObject {
  get width(): number {
    return this._width;
  }

  get length(): number {
    return this._length;
  }

  set width(w: number) {
    this._width = w;
  }

  set length(l: number) {
    this._length = l;
  }

  public calcSize() {
    return this.width * this.length;
  }
}

// Exercise 3 - Getter & Setter
// var Person = {
//   _firstName: '',
// };

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

type strOrUndefined = string | undefined;
class Person {
  // _firstName을 string 또는 undefined 로 설정하라는건지 정확히 모르겠음
  private _firstName: strOrUndefined;

  get firstName() {
    return this._firstName!;
  }

  set firstName(name: string) {
    name.length >= 3 ? (this._firstName = name) : (this._firstName = undefined);
  }
}

export { Car, Rectangle, Person };
