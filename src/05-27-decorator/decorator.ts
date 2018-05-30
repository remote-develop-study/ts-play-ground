// Class Decorator
//Method Decorator
//Property Decorator
//Parameter Decorator

function hello13_2(constructorFn: Function) {
  console.log(constructorFn);
}
function helloFactory13_2(show: boolean) {
  if (show) {
      return hello13_2;
  } else {
      return null;
  }
}

@helloFactory13_2(true)
class Person13_2 {
  constructor() {
      console.log('new Person13_2()');
  }
}
new Person13_2();