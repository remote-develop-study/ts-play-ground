class Charactor {

  protected skill: string;
  Fishing() {

  }
  sit() {

  }

}

class Human extends Charactor {
  readonly job: string = "warrior";
  bash() {

  }
}

class Elf extends Charactor {
  shoot() {

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
