// 캐릭터 클랙스 생성
class Charactor {
  private account: string;
  constructor(account: string, skill: string, mana: number) {
    this.account = account;
  }

  // 생성자로부터 값을 받아 리턴
  Fishing(skill: string, mana: number) {
    return (skill + ':' + mana + '소모')
  }
  sit(skill: string, mana: number) {
    return (skill + ':' + mana + '소모')
  }
}

class Human extends Charactor {
  readonly job: string = "warrior";
  bash(mana: number, skill: string) {
    let count = 20;
    return (skill + count + mana)
  }
}

class Elf extends Charactor {
  shoot(mana: number, skill: string) {
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
