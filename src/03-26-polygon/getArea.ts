import {pi, circle, rect, trapezoid} from "./ploygon";

function getArea (name:string, ...numbers: number[]):any {
    if(name ==='circle') {
        const [width] = numbers;
        circle(width);
    }

    if(name ==='rect') {
        const [width, height] = numbers;
        rect(width, height);
    }
    if(name ==='trapezoid') {
        const [topWidth, bottomWidth, height] = numbers;
        trapezoid(topWidth, bottomWidth, height);
    }
}
