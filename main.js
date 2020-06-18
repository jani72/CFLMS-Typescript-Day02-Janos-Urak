var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, age, jobTitle) {
        this.firstName = firstName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.register = function () {
        console.log("Hello there,my name is " + this.firstName + " and I am " + this.age + " years old,and i am a " + this.jobTitle + ".");
    };
    return Person;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(salary, jobLocation, firstName, age, jobTitle) {
        var _this = _super.call(this, firstName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Member.prototype.register = function () {
        _super.prototype.register.call(this);
    };
    Member.prototype.extend = function () {
        console.log("And I get " + this.salary + " every month, and I work in " + this.jobLocation + ".");
    };
    return Member;
}(Person));
var john = new Person("John", 34, "Dentist");
var additional = new Member(1300, "Vienna", "John", 34, "Dentist");
john.register();
additional.extend();
