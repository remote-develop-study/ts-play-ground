interface SquareFunc {}

const squarefunc:SquareFunc = (num:number) => {
  return num * num
};

interface IUser {}

const getUserId = ({id}: IUser) => {
  return id;
};

const getUserJob = ({job = '백수'}: IUser) => {
  return job;
};

interface ISortUser {}

const sortUser:ISortUser = (users) => {
  return users.sort((a, b) => a.id >  b.id ? 1 : -1)
};

interface IHuman {}

class Human implements IHuman{
  name: string;
  borned: number;
  constructor(name: string, borned: number){
    this.name = name;
    this.borned = borned;
  }
  getAge(){
    return (new Date().getFullYear()) - this.borned;
  }
}

const getName = ({name}: IHuman) => {
  return name;
};
const getBorned = ({borned}: IHuman) => {
  return borned;
};

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
};