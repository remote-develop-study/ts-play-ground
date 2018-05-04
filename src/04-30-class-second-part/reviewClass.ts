interface Foo {
  bar: {
    (str: string): number;
    (num: number): string;
  }
}

/**
 * 타입 가드와 오버로딩을 사용하여
 * 위의 인터페이스를 구현하세요
 */
class FooClass implements Foo {
  // TODO:
}