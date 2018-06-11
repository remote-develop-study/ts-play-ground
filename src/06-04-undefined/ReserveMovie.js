"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
from;
"./data.js";
// import { getUserId } from '../01-30-interfaces/interfaces.js';
var movie = {
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
};
var a = movie.ListData[0].name;
console.log(a);
var id = '';
var pw = null;
var id_ = [];
var pw_ = [];
// 로그인시 로그인된거 표기
function loginAlert() {
    document.getElementById('presentID').innerHTML = id + '님 환영합니다.';
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
    pw_.push(pw);
}
// 로그인
function log(id, pw) {
    id = document.getElementById('id').value;
    pw = parseInt(document.getElementById('pw').value);
    // @1111이 아닌 0000으로 했을 시 오류뜸
    if (id == 'admin' && pw == 1111) {
        //관리자가 영화데이터를 생성할수 있는 함수 넣기
        loginAlert();
    }
    // 회원 로그인하기
    else if ((id != 'admin' || pw != 1111)) {
        for (var i = 0; i < id_.length; i++) {
            // 배열의 갯수만큼 조회하여 같을시에 pop
        }
    }
}
// 예약부분
// 영화 정보 기본값0
var Reserve = /** @class */ (function () {
    function Reserve(_movieName, _date, _time) {
        this.movieName = _movieName;
        this.date = _date;
        this.time = _time;
    }
    // 예약이 가능한 판별은 여기서 하고 
    Reserve.prototype.selectMovie = function () {
    };
    Reserve.prototype.selectDate = function () {
    };
    Reserve.prototype.selectTime = function () {
    };
    return Reserve;
}());
// 가능하다면 하위 클래스로 이동
var ReserveMovieName = /** @class */ (function (_super) {
    __extends(ReserveMovieName, _super);
    function ReserveMovieName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReserveMovieName;
}(Reserve));
// 날짜 선택 부분.
var ReserveDate = /** @class */ (function (_super) {
    __extends(ReserveDate, _super);
    function ReserveDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReserveDate;
}(Reserve));
// 시간 선택 부분.
var ReserveTime = /** @class */ (function (_super) {
    __extends(ReserveTime, _super);
    function ReserveTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReserveTime;
}(Reserve));
