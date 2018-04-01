interface SquareFunc {
    (num: number):number
}

const squarefunc:SquareFunc = (num) => num * num;

interface IUser {
    id: string,
    pw: string,
    job?: string
}

const getUserId:IUser = (user:IUser):string => user.id;

const getUserJob:IUser = (user:IUser):string => {
  if(!user.job){
    return user.job = '백수';
  }
  return user.job;
}

interface ISortUser {
  (arr: Array<IUser>): Array<IUser>
}

const sortUser:ISortUser = (arr) => {
  arr.sort((a,b) => {
    let result;
    const result;
    return a.id > b.id ? result = a: result =b;
  })
}

interface IHuman {
    name: string,
    borned: number,
    getAge(): void
}

class Human implements IHuman{
  name: string;
  borned: number;
  constructor(name:string, borned:number){
    this.name = name;
    this.borned = borned;
  }
  getAge() {}
}

const getName = ({name}:Human):string => name;
const getBorned = ({borned}:Human):number => borned;


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