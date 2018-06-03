function sub(constructor: Function) {
  console.log('sub()');
}

function freezed(constructor: Function) {
  console.log('freezed()');
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}

// 런타임시 실행 순서는 반대로
@sub
@freezed
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
