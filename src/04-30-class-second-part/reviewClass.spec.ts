import { Child, Foo, NewEmployee, NewManager } from './reviewClass'

describe('Exercise 1 - override', () => {
  // TODO: 직접 할당해주세요
  const id = 0
  // TODO: 직접 할당해주세요
  const name = ''
  const child = new Child(id, name)

  it('오버로딩된 메서드의 반환값 확인', () => {
    expect(child.getProp()).toBe(`id: ${id} name: ${name}`)
  })
})

// describe('Exercise 2 - override', () => {
//   const foo = new Foo()

//   it('string 반환', () => {
//     expect(foo.bar('1234')).toBe('문자열')
//   })

//   it('number 반환', () => {
//     expect(foo.bar(1234)).toBe('숫자형')
//   })
// })

describe('Exercise 2 - override', () => {
  const foo = new Foo()

  it('string 반환', () => {
    expect(typeof foo.bar('1234')).toBe('number')
  })

  it('number 반환', () => {
    expect(typeof foo.bar(1234)).toBe('string')
  })
})

describe('Exercise 3 - abstract', () => {
  const employee = new NewEmployee()
  const manager = new NewManager()

  it('employee 인스턴스 생성 후 반환', () => {
    employee.id = 1
    employee.name = 'employee'

    expect(employee.printDetail()).toBe(`id: 1 name: employee`)
  })

  it('manager 인스턴스 생성 후 반환', () => {
    manager.id = 2
    manager.name = 'manager'
    manager.Employees = new Array()

    expect(manager.getDetail()).toBe(`id: 2 name: manager count: 0`)
  })
})
