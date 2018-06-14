// import * as movie from "./data.js";
// import { $ } from './jquery-2.2.4.min.js';
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
var id_length = id_.length;
// 로그인시 로그인된거 표기 - 완
function loginAlert(id) {
    document.getElementById('presentID').innerHTML = id + ' 님 환영합니다.';
}
//회원가입부분
// 1. 계정이 있는지 없는지 판별하기. 없다면 만들고, 있다면 있다고 알림.
function resgist() {
    var id_length = id_.length;
    id = document.getElementById('id').value;
    pw = parseInt(document.getElementById('pw').value);
    if (id_length == 0) {
        id_.push(id);
        alert('가입되었습니다');
    }
    for (var i = 0; i < id_length; i++) {
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
function login(id, pw) {
    id = document.getElementById('id').value;
    pw = parseInt(document.getElementById('pw').value);
    // @1111이 아닌 0000으로 했을 시 오류뜸
    // 관리자 계정 로그인 - 완
    if (id == 'admin' && pw == 1111) {
        // loginAlert(id);
        var authority = document.getElementById('admin');
        var className = 'none';
        if (authority.classList) {
            authority.classList.remove(className);
        }
        else
            authority.className = authority.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    else if ((id != 'admin' && pw != 1111)) {
        id = document.getElementById('id').value;
        pw = parseInt(document.getElementById('pw').value);
        for (var i = 0; i < id_.length; i++) {
            id_[i] == id;
            console.log('아이디' + id);
            // 로그인하는 곳에 addClass none하고 로그아웃은 none없애기
            var edit_id = document.getElementById('id');
            var edit_pw = document.getElementById('pw');
            var Btn_login = document.getElementById('Btn_login');
            var Btn_logout = document.getElementById('Btn_logout');
            var none = 'none';
            // let block = 'block'
            if (edit_id.classList && edit_pw.classList) {
                edit_id.classList.add(none);
                edit_pw.classList.add(none);
                Btn_login.classList.add(none);
            }
            else
                edit_id.className += ' ' + none;
            edit_pw.className += ' ' + none;
            Btn_login.className += ' ' + none;
            if (Btn_logout.classList) {
                Btn_logout.classList.remove(none);
            }
            else
                Btn_logout.className = Btn_logout.className.replace(new RegExp('(^|\\b)' + none.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
        // 영화선택할수있게하기
        alert(id + ' 님 환영합니다');
        loginAlert(id);
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
