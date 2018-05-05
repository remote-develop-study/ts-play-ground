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
class Person{
  public age:number = 30;
  name:string;
  constructor(newName:string){
    this.name = newName;
  }
  greeting(){return `My name is ${this.name}`}
}
/**
 * Exercise 2 - Inheritance
 * 
 * @param length 
 * @param width 
 */
class Rectangle{
  length:number;
  width:number;
  constructor(leng:number,wid:number){
    this.length = leng;
    this.width = wid;
  }
  getArea(){return this.length*this.width;}
}
class Square extends Rectangle{
  constructor(size:number){
    super(size,size);
  }
}
// 기본 클래스
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// }

// 서브 클래스
// function Square(size) {
//   this.length = size;
//   this.width = size;
// }

/**
 * Exercise 3 - Object Inheritance
 */
class Parent {
  // name: 'Parent',
  // sayName: function() {
  //   return this.name;
  // }
  name:string;
  constructor(newName:string = "Parent"){
    this.name = newName;
  }
  sayName = () => this.name;
};

class Child extends Parent{
// var child = Object.create(parent, {
  // name: {
  //   configurable: true,
  //   enumerable: true,
  //   value: 'Child',
  //   writable: true
  // }
// });
  constructor(){
    super("Child");
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