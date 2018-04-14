/**
 * 완료 후 직접 테스트 케이스를 만들어 등록해주세요
 * 모두 크게 어렵지는 않은 편이니 복붙하지말고 스스로 터득하시면됩니다.
 * 모르면 물어봅시다!
 */

// tuple에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
let arr: [string, string, number];
arr = ['a', 'b', 1];
export function tupleFn(num:number, type:string):boolean {
    return (typeof arr[1]) === type;
}

// enum에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function EnumFn(str: number) {
    return str;
}
// any에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function anyFn1(str:number):any {
    return 'string';
}
export function anyFn2(str:number):number {
    return str;
}
// union에 대해 직접 공부한 후 설명과 예제 코드를 만들어주세요
export function unionFn(data:number | string):boolean {
    return (typeof data) === 'string';
}
// never와 void에 대해 직접 공부한 후 비교 설명과 예제 코드를 만들어주세요
export function voidFn(num:number):void {
    num += 1;
}

export function errorFn(str:string):never {
    throw new  Error(str);
}