const circle = (radius: number): number => Math.floor(radius * radius * Math.PI);
const rect = (width: number, height: number): number => width * height;
const trapezoid = (top: number, bottom: number, height: number): number => (top + bottom) * height / 2;

export {
  circle,
  rect,
  trapezoid,
}