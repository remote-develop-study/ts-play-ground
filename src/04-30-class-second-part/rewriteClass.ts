/**
 * Exercise 1 - Class
 *
 * @param name
 */
// function Person(name) {
//   // 생성자내에서만 사용가능
//   var age = 30;
//   this.name = name;

//   this.greeting = function() {
//     return 'My name is ' + this.name;
//   };
// }

// Person.prototype.greeting = function() {
//   return this.name;
// };

class Person {
  private age: number = 30;
  constructor(public name: string) {}

  public greeting(): string {
    return `My name is ${this.name}`;
  }
}

/**
 * Exercise 2 - Inheritance
 *
 * @param length
 * @param width
 */
// 기본 클래스
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

class Rectangle {
  constructor(public length: number, public width: number) {}
  public getArea(): number {
    return this.length * this.width;
  }
}

// 서브 클래스
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }

class Square extends Rectangle {
  constructor(public size: number) {
    super(size, size);
  }
}

/**
 * Exercise 3 - Object Inheritance
 */
// var parent = {
//   name: 'Parent',
//   sayName: function() {
//     return this.name;
//   },
// };

// var child = Object.create(parent, {
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: 'Child',
//     writable: true,
//   },
// });

class Parent {
  protected name: string = 'Parent';

  public sayName(): string {
    return this.name;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = 'Child';
  }
}

export { Person, Rectangle, Square, parent, child };
