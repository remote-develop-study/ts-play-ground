// import  { movie } from './js/data.js';

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

let a = movie.ListData[1].name;
console.log(a);

let id: string = '';
let pw: number | null = null;
let id_: any[] = [];
let pw_: any[] = [];

// 로그인시 로그인된거 표기
function loginAlert(id:string) {
  (<HTMLInputElement>document.getElementById('presentID')).innerHTML = id + '님 환영합니다.';
}

//회원가입부분
// 1. 계정이 있는지 없는지 판별하기. 없다면 만들고, 있다면 있다고 알림.
function resgist(): void {
  let id_length = id_.length;
  for (let i = 0; i < id_length; i++) {
    console.log(id_length);
  }
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  id_.push(id);
  pw_.push(pw);
}

// 비회원
function nonMember(){
  // 랜덤으로 숫자 생성.

}

// 로그인
function log(id: string, pw: number | string): void {
  id = (<HTMLInputElement>document.getElementById('id')).value;
  pw = parseInt((<HTMLInputElement>document.getElementById('pw')).value);
  // @1111이 아닌 0000으로 했을 시 오류뜸
  if (id == 'admin' && pw == 1111){
    //관리자가 영화데이터를 생성할수 있는 함수 넣기
    loginAlert(id);
    (<HTMLInputElement>document.getElementById('id')).value = '';
    (<HTMLInputElement>document.getElementById('pw')).value = '';
  }

  // 회원 로그인하기
  else if ((id != 'admin' || pw != 1111)) {
    for(let i=0; i<id_.length; i++){
      // 배열의 갯수만큼 조회하여 같을시에 pop
   }
  }
  
}

// 예약부분
// 영화 정보 기본값0
class Reserve {
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




