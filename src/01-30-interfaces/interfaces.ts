interface SquareFunc {
  squarefunc():number;
}

const squarefunc = (num:number) => {

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

}

class Human {

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