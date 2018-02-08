import {Fishing, sit} from './classes'
import { } from 'jest';

describe('타입 스크립트 스터디 2월 10일 스프린트 클래스', () => {
  describe('Account(string)을 변수로 갖고 있는 클래스를 작성합니다. ',()=>{
    it('행동을 구현하기 위해 생성자를 만듭니다. mana:num, act:string',()=>{
      expect(Fishing('낚시',15)).toBe('낚시 : 15소모')
      expect(sit('앉기',5)).toBe('앉기 : 5소모')
    })
  })
  describe('Charactor 클래스로부터 mana와 skill을 가져옵니다. ',()=>{
    it('',()=>{
      expect('bash').toBe('bash 20 mana')
      expect('shoot').toBe('shot 15 mana')
    })
  })
  describe('Human클래스로부터 job를 가져옵니다.',()=>{
    it('job을 바꿉니다.',()=>{
      expect('knight').toBe('job:knight')
    })
  })
  describe('Charactor 클래스로부터 Account를 받아옵니다',()=>{
    it('passcode와 일치하면 Account를 "totoro"로 하고 아니면 "계정이 틀렸습니다를 출력합니다."',()=>{
      expect('passcode="MyUnit"').toBe('totoro')
      expect('passcode!="MyUnit"').toBe('계정이 틀렸습니다')
    })
  })
  describe('abstract class에 Login 가상 함수를 작성합니다.',()=>{
    it('그 함수를 Connection 함수에서 출력합니다.',()=>{
      expect('접속').toBe('접속 완료')
    })
  })


});


02-10-Classes