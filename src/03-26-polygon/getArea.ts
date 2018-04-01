import { circle, rect, trapezoid } from './polygon';

export default function getArea(type: string, ...numbers: number[]): number {
  switch (type) {
    case 'circle':
      const [ radius ] = numbers;

      return circle(radius);

    case 'rect':
      const [ width, rectHeight ] = numbers

      return rect(width, rectHeight);

    case 'trapezoid':
      const [ top, bottom, trapezoidHeight ] = numbers;

      return trapezoid(top, bottom, trapezoidHeight);

    default:
      throw new Error('지원하지 않는 케이스입니다.');
  }
}