const isMinusNumber = function (r:number) {
  if(r <= 0) {
    throw new Error(`${r}은 0보다 커야합니다.`)
  }
}
export default isMinusNumber