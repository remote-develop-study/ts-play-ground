// type script 함수 인자 체킹할때 양수엔 필수인 조건...
const validateIsExist = function (r:number):void {
  if(r !== 0 && !r) {
    throw new Error(`${r}은 존재해야만 합니다.`)
  }
}

const validateMinusNbumer = function (r:number):void {
  if(r <= 0) {
    throw new Error(`${r}은 0보다 커야합니다.`)
  }
}

const calculateCircle = function (r:number):number {
  validateIsExist(r);
  validateMinusNbumer(r);
  const pai = 3.14
  return r * r * pai;
}

const caculateRectancle = function (x:number, y:number):number {
  validateIsExist(x);
  validateMinusNbumer(x);
  validateIsExist(y);
  validateMinusNbumer(y);  
  return x * y;
}

const caculateTrapezoid = function (x:number, y:number, h:number):number {
  validateIsExist(x)
  validateIsExist(y)
  validateIsExist(h)
  validateMinusNbumer(x)
  validateMinusNbumer(y)
  validateMinusNbumer(h)
  return (x+y)/2;
}
export {validateIsExist, validateMinusNbumer}
