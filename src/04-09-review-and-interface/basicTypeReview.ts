enum Door {
  open = 'openDoor',
  close = 'closeDoor',
}

type strOrNum = string | number;

interface ITuple {
  arr: [string, number];
}

let voidMsg: string;

// tuple
const tupleFunc = function(arr: ITuple): string {
  return arr.toString();
};

// enum
const enumFunc = function(val: any) {
  return Door[val];
};

// any
const noAny = (some: any): any => some;

// union
const someUnion = (some: strOrNum): strOrNum => some;

// void
const voidFunc = function(msg: string): void {
  voidMsg = msg;
};

// never
const neverFunc = function(errMsg: string): never {
  // 케이스 1: 반환 불가
  // return 'test';
  // 케이스 2: 엔드포인트 없음
  // voidMsg = 'zzzz';
  // throw new Error(errMsg);
};

export { tupleFunc, enumFunc, noAny, voidMsg, someUnion, voidFunc, neverFunc };