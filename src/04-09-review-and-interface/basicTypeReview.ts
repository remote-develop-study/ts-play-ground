/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
/**
 * 기본적인 성격은 array와 동일하다. 요소로 가질수 있는 타입이 여러가지인점이 array와  다르다.
 * let ex:[number,string]이면
 * 선언된 0번 인덱스와 ,1번인덱스는 반드시 순서에 맞는 타입의 값이 들어가야한다, 이후의 인덱스 2...인덱스 부터는 
 * number이거나 string이면 순서에 상관없다.
 * 또, 선언된 인덱스 만큼 반드시 값을 할당해야한다.
 * ex = [1] //error 두번째값 할당 안함
 */

export let tuple:[number, string]; //0번 인덱스 number, 1번 인덱스 string
tuple = [1, 'hello'];
tuple.push('hi')//2번 인덱스 string
tuple.push(0)//3번 인덱스 number

// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
/**
 * 열거형 변수
 * 지정하지 않으면 기본 0 할당  +1 씩증가
 * 지정값 12 +1 씩증가
 * 전부다 임의의 값을 지정할수도 있음
 * 값으로 키를 알수도, 키로 값을 알수도 있음.
 */

export const enum defaultEnum {
    zero,
    one,
    two
}
export const enum dayOfweek{
    Sunday, //0 할당 
    Monday = 12,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// any에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
/**
 * 컴파일 당시에 타입체크를 하지 않는다. 작성당시 어떤 타입의 값이 들어올지 예상할수 없을때 사용.
 * 어떤 타입이든 통과하여 할당 가능하다. 되도록 쓰지 않아야 한다.
 */
export let anyVariable:any;
anyVariable = '문자열이 와도 괜찮다.';

// union에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
/**
 * 여러 타입중 하나의 타입을 사용될 수 있다.
 * 순서에 상관없다.
 */
export const myArray: (number | string | boolean)[] = [2018, false, '2018년 4월 22일'];

// never와 void에 대해 직접 공부한 후 비교 설명과 예제 코드를 만들어주세요 (이해 못함)
/**
 * 절대로 발생하지 않는 값의 유형(이해 못함))
 */
export function errorFunc(message: string): never {
    throw new Error(message);
}
