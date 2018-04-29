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
// Exercise 1 - Class
var BasicClass = /** @class */ (function () {
    function BasicClass(id, name) {
        this.id = id;
        this.name = name;
        // TODO:
        // readonly password:string;
        this.password = '111';
    }
    return BasicClass;
}());
exports.BasicClass = BasicClass;
var user = new BasicClass(1, '이름');
// Exercise 2 - Property Accessor
var PropertyAccessor = /** @class */ (function () {
    function PropertyAccessor(mySecret, onlyChild) {
        this._mySecret = mySecret;
        this.onlyChild = onlyChild;
    }
    Object.defineProperty(PropertyAccessor.prototype, "mySecret", {
        // Getter & Setter 활용하여 외부에서 mySecret에 접근하기
        get: function () {
            return this._mySecret;
        },
        set: function (Secret) {
            this._mySecret = Secret;
        },
        enumerable: true,
        configurable: true
    });
    return PropertyAccessor;
}());
exports.PropertyAccessor = PropertyAccessor;
// Exercise 2 - Property Accessor (protected)
var ChildClass = /** @class */ (function (_super) {
    __extends(ChildClass, _super);
    function ChildClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO:
    ChildClass.prototype.getOnlyChild = function () {
        return this.mySecret;
    };
    ChildClass.prototype.setOnlyChild = function (value) {
        this.onlyChild = value;
    };
    return ChildClass;
}(PropertyAccessor));
exports.ChildClass = ChildClass;
// Exercise 3 - Static
var StaticProps = /** @class */ (function () {
    function StaticProps() {
    }
    StaticProps.calc = function (num) {
        return StaticProps.PI * num;
    };
    /**
     * 1. static 프로퍼티들을 만들고
     * 2. 해당 프로퍼티를 clac()를 활용하여 호출
     * 3. 객체 생성없이 바로 외부에서 StaticProperty.calc 로 접근하여 확인
    */
    // TODO:
    StaticProps.PI = 3.14;
    return StaticProps;
}());
exports.StaticProps = StaticProps;
// Exercise 4 - Abstract Class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
exports.Project = Project;
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // TODO:
    ITProject.prototype.getName = function () {
        return this.projectName;
    };
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
exports.ITProject = ITProject;
