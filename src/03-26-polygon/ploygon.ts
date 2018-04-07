const PI: number = (Math.floor(Math.PI) * 100) / 100;//편의상 소수점 2자리

function circle (width:number):number {
    return (width * 2) * PI;
}

function rect (width:number, height:number):number {
    return width * height;
}

function trapezoid (topWidth:number, bottomWidth:number, height:number):number {
    return (topWidth + bottomWidth) * height / 2;
}

export { circle, rect, trapezoid }