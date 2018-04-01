const pi: number = 3.14;//편의상 소수점 2자리

function circle (width:number):number {
    return (width * 2) * pi;
}

function rect (width:number, height:number):number {
    return width * height;
}

function trapezoid (topWidth:number, bottomWidth:number, height:number):number {
    return (topWidth + bottomWidth) * height / 2;
}

export { pi, circle, rect, trapezoid}