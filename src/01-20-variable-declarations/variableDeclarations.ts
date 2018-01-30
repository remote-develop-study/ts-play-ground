/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(input:boolean):number {
    let a = 40, b =20;
    if(input) {
        let c = a + b;
        return c;
    }
    return undefined
}

// 스코프 문제
export function makeLoop(str: string): string {
    let result: string = '';
    for (let i: number = 0; i < 5; i++) {
        result += str;
        if(result === '11111'){
            return result;
        }
    }
}

interface obj {
    color: string[],
    number: number[],
    goods: string,
    age: number[]
}

export function getColorByIndex(colorObj:{color: string},index:number):any {
    return index < colorObj.color.length ? colorObj.color[index] : 'index out of range';
}

export function getSumOfNumArray({number}:obj):number {
    return number.reduce((num1:number, num2:number) => num1 += num2, 0)
}

export function getOldestAge({age}:obj):number {
    return age.reduce((a:number, b:number) => a > b ? a : b)
}

export function getChangedText(goodsObj:{goods:string}):string {
    let obj = goodsObj.goods;
    if(obj === "MacBook Air"){
        return obj = "MacBook Pro";
    }
    return obj;
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray({age}:obj, index:number):number {
    return age[index];
}