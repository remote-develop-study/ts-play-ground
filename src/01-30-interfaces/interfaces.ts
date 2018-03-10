interface SquareFunc {
  (num: number): number
}
const squarefunc: SquareFunc = num => {
  return num * num;
};

interface IUser {
  id: string,
  pw: string,
  job?: string
}
const getUserId = ({id}: IUser): string => id;
const getUserJob = ({job}: IUser): string => {
  if(!job) {
    return '백수';
  }
  return job
};
const sortUser = (users: Array<IUser>) => {
  users.sort((a, b) => {
    if (a.id.toUpperCase() > b.id.toUpperCase()) {
      return 1;
    }
    if (a.id.toUpperCase() < b.id.toUpperCase()) {
      return -1;
    }
    return 0;
  })
  return users  
};
interface IHuman {
  name: string,
  borned: number,
  getAge(): number
}
class Human implements IHuman {
  name: string;
  borned: number;

  constructor(name: string, borned: number){
    this.name = name;
    this.borned = borned;
  }

  getAge(): number {
    return new Date().getFullYear() - this.borned;
  }
}
const getName = (human: IHuman) => {
  return human.name
}
const getBorned = (human: IHuman) => {
  return human.borned
}

export {
  SquareFunc,
  squarefunc,
  IUser,
  getUserId,
  getUserJob,
  sortUser,
  IHuman,
  getName,
  getBorned
};
