interface SquareFunc {
  (base: number): number;
}

const squarefunc: SquareFunc = (base) => base * base;

interface IUser {
  id: string;
  pw: string;
  job?: string;
}

const getUserId = ({ id }: IUser): string => id;

const getUserJob = ({ job = '백수' }: IUser): string => job;

interface ISortUser {
  (arr: Array<IUser>): Array<IUser>
};

const sortUser: ISortUser = (arr) => arr.sort((a, b) => a.id.localeCompare(b.id));

interface IHuman {
  name: string;
  borned: number;
  getAge(): void;
}

class Human implements IHuman {
  name: string;
  borned: number;

  constructor(name: string, borend: number) {
    this.name = name;
    this.borned = borend;
  }

  getAge() {}
}

const getName = ({ name }: Human): string => name;

const getBorned = ({ borned }: Human): number => borned;

export {
  SquareFunc,
  squarefunc,
  IUser,
  getUserId,
  getUserJob,
  ISortUser,
  sortUser,
  IHuman,
  getName,
  getBorned
}