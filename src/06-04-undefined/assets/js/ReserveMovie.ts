// import * as movie from "./data.js";
// import { $ } from './jquery-2.2.4.min.js';


let movie = {
  ListData: [
    {
      name: '영화제목1',
      date: '18-02-01',
      time: '23:00'
    },
    {
      name: '영화제목2',
      date: '18-03-11',
      time: '11:00'
    }
  ]
}

let a = movie.ListData[0].name;

console.log(a);

let id: string = '';
let pw: number | null = null;
let id_: any[] = [];
let pw_: any[] = [];
let id_length = id_.length;

// 로그인시 로그인된거 표기 - 완
function loginAlert(id: string) {
  (<HTMLInputElement>document.getElementById('presentID')).innerHTML = id + ' 님 환영합니다.';
}

//회원가입부분
// 1. 계정이 있는지 없는지 판별하기. 없다면 만들고, 있다면 있다고 알림.
function resgist(): void {
  let id_length = id_.length;
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  if(id_length == 0){
    id_.push(id);
    alert('가입되었습니다');
  }
  for (let i = 0; i < id_length; i++) {
    if (id_[i] == id) {
      alert('이미있는 아이디입니다');
      id == '';
      pw == null;
    }
    else {
      id_.push(id);
      pw_.push(pw);
    }
    console.log('등록된 아이디: ' + id_[i] + pw_[i]);
  }
}


// 로그인
function log(id: string, pw: number | string): void {
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  // @1111이 아닌 0000으로 했을 시 오류뜸
  // 관리자 계정 로그인 - 완
  
  if (id == 'admin' && pw == 1111) {
    loginAlert(id);
    let authority = (<HTMLDivElement>document.getElementById('admin'));
    let className = 'none'
    if (authority.classList) {
      authority.classList.remove(className);
    }
    else
      authority.className = authority.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  // 회원 로그인하기
  else if ((id != 'admin' && pw != 1111)) {
    id = (<HTMLInputElement>document.getElementById('id')).value;
    pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
    for(let i = 0; i< id_.length; i++){
      id_[i] == id;
      loginAlert(id);
      // 영화선택할수있게하기
    }
  }

}

interface MovieItem{

}

// 예약부분
// 영화 정보 기본값0
class Reserve implements MovieItem{
  movieName: string;
  date: string | number;
  time: string | number;
  constructor(_movieName: string, _date: string | number, _time: string | number) {
    this.movieName = _movieName;
    this.date = _date;
    this.time = _time;
  }
  // 예약이 가능한 판별은 여기서 하고 
  selectMovie() {

  }
  selectDate() {

  }
  selectTime() {

  }
}

// 가능하다면 하위 클래스로 이동
class ReserveMovieName extends Reserve {
}
// 날짜 선택 부분.
class ReserveDate extends Reserve {

}
// 시간 선택 부분.
class ReserveTime extends Reserve {

}




