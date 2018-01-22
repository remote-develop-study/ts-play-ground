/**
 * 블록스코프 문제
 * var를 let으로 대체하여 호이스팅의 문제점을 let으로 어떻게 해결하는지가 문제입니다
 */
export function blockScope(flag: boolean): number | undefined {
  let a = 40, b = 20
  if (flag) {
    let c = a + b
    return c
  }
  return undefined
}

// 스코프 문제
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

export function getColorByIndex(obj: obj, idx: number): string {
  const { color } = obj
  return (idx >= 0 && idx < color.length) ? color[idx] : "index out of range"
}

export function getSumOfNumArray(obj: obj): number {
  const { number } = obj
  return number.reduce((sum, x) => sum + x, 0)
}

export function getOldestAge(obj: obj): number {
  const { age } = obj
  return age.reduce((max, x) => max > x ? max : x)
}

export function getChangedText(obj: obj): string {
  const { goods } = obj
  return goods.replace("Air", "Pro")
}

//배열의 2번째 값을 리턴하시오.
export function getSecondValueOfArray(arr: number[]): number {
  return arr[1]
}
