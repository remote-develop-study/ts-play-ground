interface ShapeAreaCalculator {
  circle(radius: number): number;
  rect(wide: number, long: number): number;
  trapezoid(height: number, base1: number, base2: number): number;
  calculateCircle(radius: number): number;
  calculateRect(wide: number, long: number): number;
  calculateTrapezoid(height: number, base1: number, base2: number): number;
}

const hasNegativeNumber = (...numbers: number[]): boolean => {
  return numbers.filter((value) => { return value < 0 }).length > 0
}

class MyShapeAreaCalculator implements ShapeAreaCalculator {
  
  public circle(radius: number) {
    return Math.sqrt(radius) * Math.PI
  }
  public rect(wide: number, long: number) {
    return wide * long
  }
  public trapezoid(height: number, base1: number, base2: number) {
    return ((base1+base2)/2)*height
  }
  public calculateCircle(radius: number) {
    if (hasNegativeNumber(radius)) throw new Error("반지름은 0 보다 커야 합니다");
    return this.circle(radius)
  }
  public calculateRect(wide: number, long: number) {
    if (hasNegativeNumber(wide, long)) throw new Error("가로, 세로의 길이는 0 보다 커야 합니다");
    return this.rect(wide, long)
  }
  public calculateTrapezoid(height: number, base1: number, base2: number) {
    if (hasNegativeNumber(height, base1, base2)) throw new Error("높이나 각 변의 길이는 모두 0 보다 커야 합니다.")
    return this.trapezoid(height, base1, base2)
  }
  public getArea(shapeName: 'circle' | 'rect' | 'trapezoid', ...args: number[]) {
    switch (shapeName) {
      case 'circle':
        const [radius] = args
        return this.calculateCircle(radius)
      case 'rect':
        const [wide, long] = args
        return this.calculateRect(wide, long)
      case 'trapezoid':
        const [height, base1, base2] = args
        return this.calculateTrapezoid(height, base1, base2)
      default:
        throw new Error("circle, rect, trapezoid의 문자열에 대해서만 연산 가능 합니다.")
    }
  }
}