import {pi} from "./ploygon";

function calculateCircle (width:number):any {
    if(typeof width === 'number'){
        return '숫자형타입만 계산이 가능합니다.'
    }
    if(width < 0){
        return '반지름은 0보다 커야 합니다'
    }
    if(!width){
        return '최소 한가지 값이 필요합니다'
    }
    return (width *2) * pi;
}