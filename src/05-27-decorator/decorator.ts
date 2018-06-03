// 1. 클래스 데코레이터
function hello(constructorFn: Function) {
  console.log(constructorFn);
}


@hello
class Person {

}

// 클래스에 대하여 데코레이터 선언 방식인 @를 사용.


