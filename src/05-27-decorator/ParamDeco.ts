function print(target: any, name: string, paramIndex: number) {
  console.log(target);
  console.log(name);
  console.log(paramIndex);
}

class ParamDeco {
  private _name: string;
  private _age: number;

  constructor(name: string, @print age: number) {
    this._name = name;
    this._age = age;
  }

  hello(@print msg: string) {
    return msg;
  }
}
