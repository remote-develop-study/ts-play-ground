// import '../06-04-undefined/data.js';
// import { getUserId } from '../01-30-interfaces/interfaces.js';
var movie = {
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
};
var a = movie.ListData[0].name;
console.log(a);
var id = '';
var pw = null;
var id_ = [];
var pw_ = [];
function loginAlert() {
    document.getElementById('presentID').innerHTML = id;
}
// 로그인
function log(id, pw) {
    id = document.getElementById('id').value;
    pw = parseInt(document.getElementById('pw').value);
    if (id == 'admin' && pw == 1111) {
        //관리자가 영화데이터를 생성할수 있는 함수 넣기
        loginAlert();
    }
    else if ((id != 'admin' || pw != 1111)) {
        console.log('계정 로그인' + id);
        loginAlert();
    }
    else {
        console.log('가입정보가 없습니다');
    }
}
//회원가입부분
// 1. 계정이 있는지 없는지 판별하기. 없다면 만들고, 있다면 있다고 알림.
function resgist() {
    var id_length = id_.length;
    for (var i = 0; i < id_length; i++) {
        console.log(id_length);
    }
    id = document.getElementById('id').value;
    pw = parseInt(document.getElementById('pw').value);
    id_.push(id);
    console.log(id);
}
// 예약부분
var Reserve = /** @class */ (function () {
    function Reserve(_movieName, _date, _time) {
        this.moveName = _movieName;
        this.date = _date;
        this.time = _time;
    }
    return Reserve;
}());
// let reserve = new Reserve("영화이름1", '06.20','12:00');
