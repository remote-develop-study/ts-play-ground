const PI:number = 3.14;
export function circle(radius: number): number {
    return radius * radius * PI;
}

export function rect(horizontal: number, vertical: number): number {
    return horizontal * vertical
}

export function trapezoid(below: number, upper: number, height: number): number{
    return (below + upper) * height/2
}

export function calculateCircle(radius){
    if(typeof radius == String ) {
        return '숫자형타입만 계산이 가능합니다.'
    }

    if(radius == undefined) {
        return '최소 한가지 값이 필요합니다.'
    }

    if(radius < 0) {
        return '반지름은 0보다 커야 합니다.'
    }
}

export function getArea(fcname: string, param1: number, param2: number, param3: number){
    console.log(fcname);
    switch(fcname){
        case 'circle':
            return circle(param1);
            break;
        case 'rect':
            return rect(param1, param2);
            break;
        case 'trapezoid':
            return trapezoid(param1, param2, param3);
            break;
    }
}
