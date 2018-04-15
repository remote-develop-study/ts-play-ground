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
  throw new Error(errMsg);
};

export { tupleFunc, enumFunc, noAny, voidMsg, someUnion, voidFunc, neverFunc };
