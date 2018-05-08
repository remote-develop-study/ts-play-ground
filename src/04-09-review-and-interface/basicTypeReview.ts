/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
// 배열의 고정된 인덱스의 타입은 같아야 하지만 그 이후에는
// 설정한 타입값 아무거나 할당 가능 
//ex) x[4] = 'string | number | boolean' 값 할당 가능
interface Tuple{
    x:[string, number, boolean];
}
let pracTuple = function(x:Tuple):Tuple {
        return x;
}
// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
// enum은 해당 숫자값에서 해당 값 이름으로 이동 가능 !
enum Animal { monkey, rabbit, dog, cat }
let pracEnum = function(x:number):string{

    return Animal[x]; //반환 값이 문자열이여서 해당 값 출력!
}

// any에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
// 알지 못하는 변수의 타입을 설명할 때
let pracAny = function(x:any):string{
    let str:string;
    if(typeof(x) == 'string'){
        str = '저는 문자열입니다.';
    }else if(typeof(x) == 'number'){
        str = '저는 숫자입니다.';
    }else if(typeof(x) == 'boolean'){
        str = '저는 불린형입니다.';
    }else{
        str = '저는 문자열,숫자,불린형이 아닙니다.';
    }
    return str;
}

// union에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
/*
what the 'union'..? union : 조합 결합
Sql에서 두  query를 결합할때 사용
단, query의 열의 개수와 순서가 동일해야하고 데이터 형식이 호환되어야함.
알려진 인덱스 집합 외부의 요소에 접근할때 사용.
유니온의 모든 타입에 공통적인 멤버에만 접근 가능.
모르겠다. pass
*/
type uni=string;
let pracUnion = function(str:uni) : uni{
    return str;
}

// never와 void에 대해 직접 공부한 후 비교 설명과 예제 코드를 만들어주세요
/* void : 어떠한 타입의 부재도 전혀 없다. return값 없음. */
function pracVoid(): void{
    // return undefined;
}

function pracNever():never{
    // throw new Error(message); //end-point가 있으면 안돼!
    //return 도 있으면 안돼!
}
export {pracTuple, pracEnum, pracAny,pracUnion,pracVoid,pracNever};