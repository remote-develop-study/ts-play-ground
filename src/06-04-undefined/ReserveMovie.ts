// import '../06-04-undefined/data.js';
// import { getUserId } from '../01-30-interfaces/interfaces.js';
let movie = {
  ListData: [
    {
      name: '영화제목1',
      date: '날짜',
      time: '23:00'
    },
    {
      name: '상품문의',
      date: '1제목이 출력되겠지요 한줄일때는 이렇게',
      time: '다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파 다람쥐 헌 쳇바퀴에 돌고파'
    }
  ]
}
let a = movie.ListData[0].name;

console.log(a);

let id:string = '';
let pw:number | null = null;
let id_:any[] = [];
let pw_:any[] = [];

function loginAlert(){
  (<HTMLInputElement>document.getElementById('presentID')).innerHTML = id;
}
// 로그인
function log(id: string, pw: number | string):void {
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  if (id == 'admin' && pw == 1111) {
    //관리자가 영화데이터를 생성할수 있는 함수 넣기
    loginAlert();
  
  }
  // 회원 로그인하기
  
  else if((id != 'admin' || pw != 1111)){
    console.log('계정 로그인'+id);
    loginAlert();
  }
  else{
    console.log('가입정보가 없습니다');
  }
}

//회원가입부분
// 1. 계정이 있는지 없는지 판별하기. 없다면 만들고, 있다면 있다고 알림.
function resgist():void{
  let id_length = id_.length;
  for(let i=0;i<id_length;i++){
    console.log(id_length);
  }
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  id_.push(id);
  console.log(id);
}

// 예약부분
class Reserve {
  moveName : string;
  date : string | number;
  time : string | number;
  constructor(_movieName:string,_date:string|number,_time:string | number) {
    this.moveName = _movieName;
    this.date = _date;
    this.time = _time;
  }

}

// let reserve = new Reserve("영화이름1", '06.20','12:00');



