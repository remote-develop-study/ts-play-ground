# 클래스 복습 그리고 만들기
## 설명

이해가 되지 않는다면 이전에 했던 내용들을 복습하셔야 합니다.

구글링도 좋지만 핸드북 문서를 참고하는 게 가장 좋습니다.

## 상세 설명
1. rewriteClass: 이미 만들어져있는 `JS의 클래스를 TS의 클래스로` 마이그레이션 합니다.

2. reviewClass: 다양한 케이스의 클래스를 다시 만들며 `복습`합니다.

3. implClass: UML 다이어그램을 `분석` => 인터페이스 `설계` => 클래스 `구현` => `테스트` 케이스 직접 만들기

## 참고사항
위와 같은 순서로 진행하는 게 낫다고 판단하여 순서를 정했고 편한 대로 진행하시면 됩니다.

클래스는 이번 주차에 끝내고 다음 주부터는 여태까지 배운 걸 활용하여 응용할 예정입니다.

때문에 스터디 진도를 맞추시려면 이번 주차에 클래스와 인터페이스에 대한 이해를 어느 정도 마쳐야 합니다.

- jest 실행 명령어
```bash
npm run test ./src/04-30-class-second-part/rewriteClass.spec.ts
npm run test ./src/04-30-class-second-part/syntaxClass.spec.ts
npm run test ./src/04-30-class-second-part/reviewClass.spec.ts
npm run test ./src/04-30-class-second-part/implClass.spec.ts
```