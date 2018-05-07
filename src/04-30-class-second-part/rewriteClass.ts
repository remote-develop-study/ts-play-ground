/**
 * Exercise 1 - Class
 * 
 * @param name 
 */
class Person {
  private age: number = 30;

  constructor(public name: string) {}
  
  greeting() {
    return 'My name is ' + this.name;
  };
}

/**
 * Exercise 2 - Inheritance
 * 
 * @param length 
 * @param width 
 */
// 기본 클래스
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
class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }
}

/**
 * Exercise 3 - Object Inheritance
 */
class Parent {
  name: string = 'Parent';
  
  sayName() {
    return this.name;
  }
};

class Child extends Parent {
  name: string = 'Child';
};

export {
  Person,
  Rectangle,
  Square,
  Parent,
  Child
}