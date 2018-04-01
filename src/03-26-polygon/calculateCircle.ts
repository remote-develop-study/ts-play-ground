import {circle} from "./ploygon";

function calculateCircle (width:number):number{
    if(!width){
        throw new Error('최소 한가지 값이 필요합니다')
    }
    if(typeof width === 'number'){
        throw new Error('숫자형타입만 계산이 가능합니다.')
    }
    if(width < 0){
        throw new Error('반지름은 0보다 커야 합니다')
    }
    return circle(width);
}