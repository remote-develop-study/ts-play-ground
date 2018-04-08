const polygonScale = (function ():object {
  const circle = function (r: number): number {
    return r * r * 3.14;
  }
  
  const rect = function (x: number, y: number):number {
    return x * y;
  }
  
  const trapezoid = function (x: number, y: number, h: number):number {
    return (x + y) * 2 / 2;
  }

  return {
    circle,
    rect,
    trapezoid
  }
})()
