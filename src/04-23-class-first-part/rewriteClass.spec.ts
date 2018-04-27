import { Car, Rectangle, Person } from './rewriteClass'

describe('Exercise 1 - Class', () => {
  const car = new Car('BMW')

  it('car.honk() toBe 빵빵! ??', () => {
    expect(car.honk()).toBe('빵빵!')
  })

  it('get car speed', () => {
    const speed: number = 10
    car.accelerate(speed)

    expect(car.acceleration).toBe(speed)
  })
})

describe('Exercise 2 - Inheritance', () => {
  it('get Rectangle size', () => {
    const rectangle = new Rectangle()

    rectangle.width = 5
    rectangle.length = 2

    expect(rectangle.calcSize()).toBe(10)
  })
})

describe('Exercise 3 - Getter & Setter', () => {
  const person = new Person()

  it('화살표 함수 반환 확인', () => {
    expect(person.firstName).toBeUndefined()
  })

  it('화살표 함수 반환 확인', () => {
    person.firstName = 'JY'
    expect(person.firstName).toBeUndefined()
  })

  it('화살표 함수 반환 확인', () => {
    person.firstName = 'JYP'
    expect(person.firstName).toBe('JYP')
  })
})
