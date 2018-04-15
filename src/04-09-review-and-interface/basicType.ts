/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

/* scope description of tuple */
// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
{
  /**
   * Tuple은 아래 3가지 방법으로 선언할 수 있음
   * 변수에 직접 선언, type으로 정의, interface로 정의
   * 참고링크
   * 1. https://visualstudiomagazine.com/articles/2016/02/01/type-safe-structures.aspx
   * 2. https://basarat.gitbooks.io/typescript/docs/types/type-system.html
   * 3. https://codingblast.com/typescript-tuples/
   */

  // let으로 먼저 변수 타입을 초기화 한 뒤, 실제 값을 대입. const에서 바로 타입 선언 후 타입에 맞는 값 대입하여도 관계없음
  {
    let studentGradeData: [string, number];
    studentGradeData = ['권기웅', 100];
  }

  // 타입으로 튜플타입을 사전에 정의하는 타입. 보편적
  {
    type StudentGrade = [string, number];
    const studentGradeData: Array<StudentGrade> = [
      ['권기웅', 100],
      ['수지', 90],
      ['호날두', 80],
      ['Evan You', 60],
    ];
  }

  // 인터페이스로 튜플을 정의한 경우, 매핑되는 내부 값에 의문이 생김
  {
    interface StudentGrade extends Array<string | number> {
      0: string;
      1: number;
    }
    const studentGradeData: Array<StudentGrade> = [
      ['권기웅', 100],
      ['수지', 90],
      ['호날두', 80],
      ['Evan You', 60],
    ];
  }
}
/* End scope */

/* scope description of enum */
// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
{
  // Enum은 명명된 상수의 집합을 정의할 수 있도록 함
  // enum은 숫자형, 문자 기반 두 가지로 구분할 수 있음
  // 1. 숫자 기반 열거형
  enum LogicValues {
    False,
    True,
  } // False === 0, True === 1
  const lieDetector = (bool: LogicValues): void => {
    if (bool) console.log('True!');
    console.log('Liar!');
  };
  lieDetector(LogicValues.False); // Liar!

  // 숫자 기반 열거형의 시작 값을 바꿀 수 있음
  enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  // 각각이 다른 숫자 값을 가질 수 있음
  enum Grades {
    S = 100,
    A = S * 0.9,
    B = S * 0.8,
    C = S * 0.7,
    D = S * 0.6,
  }
  
  const a_grade = Grades.A
  console.log(a_grade) // 90

  // 문자 기반 열거형
  enum Abbreviations {
    PS = "POST SCRIPT",
    IE = "ID EST",
    EG = "EXEMPLI GRATIA"
  }

  console.log(Abbreviations.EG) // EXEMPLI GRATIA (예를 들어)

  // 혼합형
  enum HybridBooleans {
    False = 0,
    True = "YES"
  }

  // const enum
  const varForEnum = 'Referenced value in the Enum'
  const enum constantEnum {
    A = varForEnum,
    // enum 바깥에서 정의한 변수의 평가는 complie 타임에 이루어짐
    // const enum의 경우는 complie된 결과물을 가지지 않기 때문에
    // runtime에 해당 변수에 대해 평가하게 되는데, 그렇다면 enum의 불변성을 보장할 수 없음
    B = 'Immutable!'
    // enum 내부에서 정의한 상수의 경우는 문제 없음!
  }

}
/* End scope */

/* scope description of any */
// any에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
{
  // 어떤 타입이든 대입 가능한것이 any! any를 어떻게든 안쓰는것이 정적 타이핑의 목적일지도
  type AnyType = any;
  let anyVar: AnyType;
  anyVar = 503;
  anyVar = '문자도 됩니다';
  anyVar = true;
  anyVar = { anyType: 'anything!' };
  anyVar = class AnyClass {};
  anyVar = () => console.log('Any Function!');
}
/* End scope */

/* scope description of union */
// union에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
{
  // 여려 유형의 타입 중 하나를 가지게 하고 싶은 경우 활용
  type UnionStringNumberType = string | number;
  let strOrNum: UnionStringNumberType;
  strOrNum = 1;
  strOrNum = '문자도 됩니다!';
  strOrNum = { neitherStrNorNum: 'Object 타입은 안됩니다' }; // Error!
}
/* End scope */

// never와 void에 대해 직접 공부한 후 비교 설명과 예제 코드를 만들어주세요
/**
 * Never 타입 문제 작성하다 엄청 먼 길을 돌아왔습니다 제가 참고한 링크들입니다.
 * 1. https://blog.mariusschulz.com/2016/11/18/typescript-2-0-the-never-type
 * 2. https://stackoverflow.com/questions/37910669/what-is-the-difference-between-never-and-void-in-typescript
 * 3. https://basarat.gitbooks.io/typescript/content/docs/types/never.html
 * 4. https://basarat.gitbooks.io/typescript/docs/types/type-system.html
 * 5. https://en.wikipedia.org/wiki/Unit_type
 * 6. https://en.wikipedia.org/wiki/Bottom_type
 * 7. https://en.wikipedia.org/wiki/Type_theory
 * 8. https://www.quora.com/What-is-type-theory-in-computer-science
 *
 * 자바스크립트에서 명시적으로 return 값이 없는 함수는 암묵적으로 undefined를 반환함
 * 위와 같은 함수를 void return type을 갖는 함수로 추론함
 *
 * never의 경우는 위와 같은 undefined 조차 return 하지 않음
 * 이는, error를 throw하거나, 절대 실행이 끝나지 않음을 의미함
 *
 * never는 아래 두 가지에서 사용되고 있음
 * 1. 절대 반환값이 없는 함수의 return type 정의
 * 2. 절대 참이 아닌 변수의 타입 지정
 *
 * void는 반환 값이 없는 함수의 리턴 값, 또는 undefined와 유사하게 정의할 수 있음
 * 1. void는 위 설명대로 암묵적으로 undefined를 반환하기 때문에 void 타입에 undefined 값을 할당할 수 있음
 * 2. void는 함수의 리턴값의 타입으로 지정될 수 있음
 */

type neverType = never; // never type alias
type voidType = void; // void type alias
let neverValue: neverType;
let voidValue: voidType;

// 1. 절대 반환값이 없는 함수의 return type 정의
// 1-1. ((){})() 형태의 IIFE 식은 가능
neverValue = (function() {
  while (true) console.log('Loop Forever');
})();

// 1-2. ((){}()) 형태의 IIFE 식 또한 가능
neverValue = (function() {
  while (true) console.log('Loop Forever');
})();

// 1-3. !function(){}() 형식의 IIFE는 불가능, 이 형식은 암묵적으로 true 값을 반환함 (!undefined === true 이므로)
// 기타 다른 연산자 (~,^,+,-) 를 활용한 IIFE식은 NaN, true, -1 등을 반환하기 때문에 never로 취급되지 않음
neverValue = !(function() {
  while (true) console.log('Loop Forever');
})();

// inferred 'never'
const neverFunction = function() {
  while (true) console.log('Loop Forever');
};
// inferred 'void'
function voidFunction(): void {
  while (true) console.log('Loop Forever');
}
// inferred 'never', 명시적으로 반환 타입을 never로 지정한 경우
function neverFunctionWithExplicitReturnType(): never {
  while (true) console.log('Loop Forever');
}

// 2. 절대 참이 아닌 변수의 타입 지정 (type guard에서만 유효)
function testNever(value: string | number, neverValue: neverType) {
  if (typeof value === 'string' && typeof value === 'number') {
    neverValue = value; // 현 위치에서 type guard에 의해 value가 never로 평가되기 때문에 neverValue에 대입 됨
    neverValue = 1; // Error!
    neverValue = 'string'; // Error!
  }

  value = 1;
  value = 'string';
}

// 형 이론에서 Unit Type은 하나의 값만 가지는 것으로, 자바스크립트에서는 null과 undefined가 있다
neverValue = undefined; // never는 Unit type이 아닌 bottom type이므로 대입 불가!
neverValue = null; // never는 Unit type이 아닌 bottom type이므로 대입 불가!

// never는 모든 타입의 subType이 될 수 있고, 할당 되지만, never 자체는 어떤 subtype도 가지지 않는다.

// 반환 값이 없는 함수 선언식의 반환 값으로 void를 지정할 수 있음
function newVoidFunction(): void {
  console.log('Hello! void Function!');
}

// 함수 표현식도 마찬가지
const voidFunctionExpr = (): void => console.log('void function with fat arrow!');

// 반환 값이 없는 함수식의 평가는 void로 추론됨
voidValue = (function() {
  console.log('Loop Forever');
})();

// void는 잠재적으로 undefined를 반환하므로, undefined를 할당하는 것이 가능함
voidValue = undefined;

// void는 잠재적으로 undefined의 형태와 같으므로, null을 할당하는것은 불가
voidValue = null;
