interface SquareFunc {
  squarefunc(num:number):number;
}

const squarefunc = (num:number) => {
  return num*num;
}

interface IUser {
  id:string;
  pw:string;
  job?:string;
}

const getUserId = (id:IUser,pw:IUser) => {
  let user = {id : 'dev',pw: 'abc'}
  return user.pw;
}

// ???
const getUserJob = (id:IUser,pw:IUser,job?:IUser) => {
}

interface ISortUser {
  
  
}

const sortUser = () => {

}

interface IHuman {
name:string;
borned:number;
getAge():number;
}

class Human implements IHuman{
  name:string;
  borned:number;

  
}

const getName = () => {

}
const getBorned = () => {
  
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