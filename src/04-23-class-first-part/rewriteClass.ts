/**
 * 3개의 클래스를 100% TS 클래스로 다시 작성해주세요
 */

// Exercise 1 - Class
class Car {
  acceleration: number = 0;

  constructor(public name: string) { }

  honk(): string {
    return "빵빵!";
  };

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

// Exercise 2 - Inheritance
class BaseObject {
  width = 0;
  length = 0;
};

class Rectangle extends BaseObject{
  calcSize(): number {
    return this.width * this.length;
  }
}

// Exercise 3 - Getter & Setter
class Person {
  private _firstName: string = '';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(_firstName: string) {
    this._firstName = _firstName.length >= 3
                      ? _firstName
                      : '';
  }
}

export {
  Car,
  Rectangle,
  Person,
}