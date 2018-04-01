import {circle, rect, trapezoid} from "./ploygon";

function getArea (name:string, ...numbers: number[]):number {
    if(name ==='circle') {
        const [width] = numbers;
        return circle(width);
    }
    if(name ==='rect') {
        const [width, height] = numbers;
        return rect(width, height);
    }
    if(name ==='trapezoid') {
        const [topWidth, bottomWidth, height] = numbers;
        return trapezoid(topWidth, bottomWidth, height);
    }
    throw new Error('알맞은 형식이 존재 하지 않습니다.');
}
