interface SquareFunc {
  (num:number):number;
}

const squarefunc = (num:number) => {
  return num*num;
}

interface IUser {
  id:string;
  pw:string;
  job?:string;
}


// 여기서부터 수정하기
const getUserId = (id:IUser,pw:IUser) => {
  let user = {id : 'dev',pw: 'abc'}
  return user.pw;
}

// ???
const getUserJob = (id:IUser,pw:IUser,job?:IUser) => {
  
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
name:string;
borned:number;
getAge():number;
}

//완
class Human implements IHuman{
  name:string;
  borned:number;
  constructor(name: string, borned:number){
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