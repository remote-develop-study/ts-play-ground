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
  age:number = 30;
  name:string;
  constructor(name: string) {
    this.name = name;
  }
  static age(){
    this.age;
  }

  greeting(): string {
    return 'My name is ' + this.name;
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
  length: number;
  width: number;

  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}
// 서브 클래스
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }
class Square extends Rectangle {
  constructor(size: number){
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
//   }
// };

// var child = Object.create(parent, {
//   name: {
//     configurable: true,
//     enumerable: true,
//     value: 'Child',
//     writable: true
//   }
// });
class Parent {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayName() {
    return this.name;
  }
}

class Child extends Parent {
  constructor(name: string){
    super(name);
  }
}

export {
  Person,
  Rectangle,
  Square,
  Parent,
  Child
}