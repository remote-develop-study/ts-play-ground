import { Car, Rectangle, Person } from './rewriteClass';

describe('Exercise 1 - Class', () => {
  const car = new Car("BMW");

  it('car.honk() toBe 빵빵! ??', () => {
    expect(car.honk()).toBe('빵빵!');
  });

  it('get car speed', () => {
    const speed: number = 10;
    car.accelerate(speed);

    expect(car.acceleration).toBe(speed);
  });
});

describe('Exercise 2 - Inheritance', () => {
  it('get Rectangle size', () => {
    const rectangle = new Rectangle();

    rectangle.width = 5;
    rectangle.length = 2;

    expect(rectangle.calcSize()).toBe(10);
  });
});

describe('Exercise 3 - Getter & Setter', () => {
  const person = new Person();

  it('빈값 반환', () => {
    expect(person.firstName).toBeFalsy();
  });

  it('빈값 반환', () => {
    person.firstName = "JY";
    expect(person.firstName).toBeFalsy();
  });

  it('JYP 확인', () => {
    person.firstName = "JYP";
    expect(person.firstName).toBe('JYP');
  });
});
