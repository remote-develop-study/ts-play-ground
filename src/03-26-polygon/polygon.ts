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


export function calculateCircle(radius: number): string | void{
    if(radius === undefined) {
        return '최소 한가지 값이 필요합니다.'
    }
    
    if(typeof(radius) === "string") {
        return '숫자형타입만 계산이 가능합니다.'
    }

    if(radius < 0) {
        return '반지름은 0보다 커야 합니다.'
    }
}

//param1,2,3 스프레드 연산자로 대체하기
export function getArea(fcname: string, ...param:number[]){
    switch(fcname){
        case 'circle':
            const [radius] = param
            return circle(radius);
        case 'rect':
            const [horizontal,vertical ] = param;
            return rect(horizontal, vertical);
        case 'trapezoid':
            const [below,upper,height] = param;
            return trapezoid(below, upper, height);
        default:
         return "circle, rect, trapezoid만 사용 가능합니다."
    }
}
