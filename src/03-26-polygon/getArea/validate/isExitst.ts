const isExist = function (r:number) {
  if(!r) {
    throw new Error(`${r}은 존재해야만 합니다.`)
  }
}
export default isExist