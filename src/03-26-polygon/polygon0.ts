const polygonScale = (function () {
  const circle = function (r: number) {
    return r * r * 3.14;
  }
  
  const rect = function (x: number, y: number) {
    return x * y;
  }
  
  const trapezoid = function (x: number, y: number, h: number) {
    return (x + y) * 2 / 2;
  }

  return {
    circle,
    rect,
    trapezoid
  }
})()
