// import { Child } from "./reviewClass";

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

class Person {
  age: number = 30
  constructor(public name: string) {}
  greeting() {
    return 'My name is ' + this.name
  }
}

// Person.prototype.greeting = function() {
//   return this.name;
// };

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
class Rectangle {
  constructor(public length: number, public width: number) { }
  getArea() {
    return this.length * this.width
  }
}

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

// 서브 클래스
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }

class Square extends Rectangle {
  constructor(size: number) {
    super(size, size)
  }

}

/**
 * Exercise 3 - Object Inheritance
 */
// var parent = {
//   name: 'Parent',
//   sayName: function () {
//     return this.name;
//   }
// };


class Parent {
  name: string;
  // 생성자에서 초기화 해주지 않으면 인수가 필요하다고 104번에서 에러뜸
  constructor(name: string = 'Parent') {
    this.name = name;
  }
  sayName() {
    return this.name;
  }
}



// var child = Object.create(parent, {
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: 'Child',
//     writable: true
//   }
// });
class Child extends Parent {
  constructor() {
    super("child");
  }
}


let parent = new Parent();
let child = new Child();

export {
  Person,
  Rectangle,
  Square,
  parent,
  child
}