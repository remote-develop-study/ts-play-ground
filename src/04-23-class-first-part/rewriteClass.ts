/**
 * 3개의 클래스를 100% TS 클래스로 다시 작성해주세요
 */

// Exercise 1 - Class
class Car {
  acceleration: number = 0
  constructor(public name: string) {}

  honk(): string {
    return '빵빵!'
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed
  }
}

// Exercise 2 - Inheritance
class baseObject {
  width: number = 0
  length: number = 0
}

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length
  }
}

// Exercise 3 - Getter & Setter
class Person {
  private _firstName: string | undefined
  get firstName(): string | undefined {
    return this._firstName
  }
  set firstName(str: string | undefined) {
    this._firstName = str && str.length >= 3 ? str : undefined
  }
}

// Object.defineProperty(Person, 'firstName', {
//   get: function() {
//     return this._firstName
//   },
//   set: function(value) {
//     if (value.length >= 3) {
//       this._firstName = value
//     } else {
//       this._firstName = ''
//     }
//   },
//   enumerable: true,
//   configurable: true,
// })

export { Car, Rectangle, Person }
