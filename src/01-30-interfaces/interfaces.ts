interface SquareFunc {
  (num: number): number
}

const squarefunc = (num: number) => {
  return num*num
}

interface IUser {
  id: string,
  pw: string,
  job?: string
}

const getUserId = (user: IUser) => {
  return user.id
}

const getUserJob = (user: IUser) => {
  return user.job || '백수'
}

interface ISortUser {
  (user: IUser): Array<IUser>
}

const sortUser = (user: Array<IUser>) => {
  user.sort((a, b) => {

    if (a.id.toUpperCase() > b.id.toUpperCase()) {
      return 1;
    }

    if (a.id.toUpperCase() < b.id.toUpperCase()) {
      return -1;
    }
    
    return 0;
  })
  return user
}

interface IHuman {
  name: string,
  borned: number,
  getAge(): number,
}

class Human implements IHuman {
  name: string;
  borned: number;

  constructor(name: string, borned: number) {
    this.name = name;
    this.borned = borned;
  }

  getAge(): number {
    return (new Date().getFullYear()) - this.borned;
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
  ISortUser,
  sortUser,
  IHuman,
  getName,
  getBorned
}