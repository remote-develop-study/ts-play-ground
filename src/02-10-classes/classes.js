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
// 캐릭터 클랙스 생성
var Charactor = /** @class */ (function () {
    function Charactor(account, skill, mana) {
        this.account = account;
    }
    // 생성자로부터 값을 받아 리턴
    Charactor.prototype.Fishing = function (skill, mana) {
        return (skill + ':' + mana + '소모');
    };
    Charactor.prototype.sit = function (skill, mana) {
        return (skill + ':' + mana + '소모');
    };
    return Charactor;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.job = "warrior";
        return _this;
    }
    Human.prototype.bash = function (mana, skill) {
        var count = 20;
        return (skill + count + mana);
    };
    return Human;
}(Charactor));
var Elf = /** @class */ (function (_super) {
    __extends(Elf, _super);
    function Elf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Elf.prototype.shoot = function (mana, skill) {
        var count = 20;
        return (skill + count + mana);
    };
    return Elf;
}(Charactor));
var Change = /** @class */ (function (_super) {
    __extends(Change, _super);
    function Change() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Change;
}(Human));
var passcode = "MyUnit";
var AccountChange = /** @class */ (function (_super) {
    __extends(AccountChange, _super);
    function AccountChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AccountChange;
}(Charactor));
var TestAccount = /** @class */ (function () {
    function TestAccount() {
    }
    TestAccount.prototype.sign = function (login) {
        return '접속 ';
    };
    return TestAccount;
}());
var Connection = /** @class */ (function (_super) {
    __extends(Connection, _super);
    function Connection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Connection;
}(TestAccount));
