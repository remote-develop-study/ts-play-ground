import { SquareFunc, squarefunc, getUserId, IUser, getUserJob, sortUser, IHuman, getName, getBorned } from './interfaces'
import { } from 'jest'

describe('타입스크립트 스터디 1월 30일 스프린트 인터페이스', () => {
  describe('num(number)를 인자로 받는 함수 SquareFunc를 작성합니다', () => {
    it('Squarefunc를 구현하는 squarefunc 함수를 작성합니다', () => {
      expect(squarefunc(20)).toBe(20*20)
    })
  })
  describe('id(문자열)와 pw(문자열) 속성을 가지는 IUser 인터페이스를 작성합니다.', () => {
    it('IUser Interface를 만족하는 객체를 받아서 id를 반환하는 함수를 작성합니다.', () => {
      expect(getUserId({ id: 'dev', pw: 'abc' })).toBe('dev')
    });
  });
  describe('위에서 작성한 IUser 인터페이스에 job(문자열) 속성을 추가합니다. 이 속성은 없을수도 있는 속성입니다.', () => {
    it('IUser 인터페이스를 만족하는 객체를 받아서 job을 반환하는 함수(job이 없다면 "백수" 반환)', () => {
      expect(getUserJob({ id: 'dev', pw: 'abc', job: '노예' })).toBe('노예')
      expect(getUserJob({ id: 'dev', pw: 'abc' })).toBe('백수')
    });
  });
  describe('IUser 배열을 받아 id를 기준으로 오름차순 정렬하여 정렬된 IUser 배열을 반환하는 함수의 인터페이스를 작성합니다.', () => {
    it('위에 작성한 인터페이스를 만족하는 함수를 작성합니다.', () => {
      const users = [
        { id: 'bbb', pw: '***' },
        { id: 'abc', pw: '***' }
      ]
      expect(sortUser(users)).toEqual([{ id: 'abc', pw: '***' }, { id: 'bbb', pw: '***' }])
    });
  });
  describe('name(문자열), borned(숫자), getAge() 함수를 갖는 IHuman 인터페이스를 작성합니다.', () => {
    it('아래 테스트를 통과하는 IHuman 인터페이스를 implements하는 클래스를 작성합니다. 모든 함수는 IHuman 객체를 입력받습니다.', () => {
      const human: IHuman = {
        name: 'sungmin',
        borned: 1992,
        getAge() { return new Date().getFullYear() - this.borned }
      }
      expect(getName(human)).toBe('sungmin')
      expect(getBorned(human)).toBe(1992)
      expect(human.getAge()).toBe(26)
    });
  });
});