class Charactor {
  account:string;
  constructor( mana:number, act:string ){
    // 여기 이상
    this.account = act;
  }
  protected skill: string;
<<<<<<< HEAD    


  Fishing(skill:string, mana:number) {
    // let skillName = '낚시';
    // let manaNum = 15
    return (skill +':' +mana +'소모')
=======
  Fishing() {
   브런치 적용됬는지 확인중
>>>>>>> 67920d38941a4f407af03994c662919ac1771fab
  }
  sit(skill:string, mana:number) {
    return (skill + ':' + mana + '소모')
    test코드입니다. 
  }
}

class Human extends Charactor {
  readonly job: string = "warrior";
  bash(mana:number, skill:string) {
    let count = 20;
    return (skill +count  + mana)
  }
}

class Elf extends Charactor {
  shoot(mana:number, skill:string) {
    let count = 20;
    return (skill + count + mana)
  }
}
class Change extends Human {
 
}

let passcode = "MyUnit"
class AccountChange extends Charactor {
}

abstract class TestAccount {
  sign(login: string) {
    return '접속 ';
  }
}
class Connection extends TestAccount {
}
