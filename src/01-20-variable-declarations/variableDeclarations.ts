export function blockScope(flag: boolean): number | undefined {
  let a = 40, b = 20
  if (flag) {
    let c = a + b
    return c
  }
  return undefined
}

export function makeLoop(): number {
  let result: string = ""
  for (let i = 0; i < 5; i++) {
    result += "1"
  }
  return Number(result)
}

interface obj {
  color: string[],
  number: number[],
  goods: string,
  age: number[]
}

export function getColorByIndex({ color }: obj, idx: number): string {
  return (idx >= 0 && idx < color.length) ? color[idx] : "index out of range"
}

export function getSumOfNumArray({ number }: obj): number {
  return number.reduce((sum, x) => sum + x, 0)
}

export function getOldestAge({ age }: obj): number {
  return age.reduce((max, x) => max > x ? max : x)
}

export function getChangedText({ goods }: obj): string {
  return goods.replace("Air", "Pro")
}

export function getSecondValueOfArray([, a]: number[]): number {
  return a
}
