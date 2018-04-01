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