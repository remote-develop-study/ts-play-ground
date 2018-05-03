import { Person, Rectangle, Square, parent, child } from './rewriteClass'; 

describe('Exercise 1 - Class', () => {
  it('새로운 인스턴스 프로퍼티 확인', () => {
    const name = '이름을 넣어주세요';
    const person = new Person(name);

    expect(person.greeting()).toBe(`My name is ${name}`);
  });

  it('비공개 멤버 변수 접근권한 확인', () => {
    expect(person.age).toBe(30);
  });
});

describe('Exercise 2 - Inheritance', () => {
  // 밑의 프로토타입 연결은 TS 전환 후 제거해야합니다.
  Square.prototype = new Rectangle();
  Square.prototype.constructor = Square;

  const rect = new Rectangle(5, 10);
  const square = new Square(6);

  it('get super class Rectangle size', () => {
    expect(rect.getArea()).toBe(50);
  });

  it('get sub class Square size', () => {
    expect(square.getArea()).toBe(36);
  });
});

describe('Exercise 3 - Object Inheritance', () => {
  const rect = new Rectangle(5, 10);
  const square = new Square(6);

  it('parent.sayName()', () => {
    expect(parent.sayName()).toBe('Parent');
  });

  it('child.sayName()', () => {
    expect(child.sayName()).toBe('Child');
  });
});

