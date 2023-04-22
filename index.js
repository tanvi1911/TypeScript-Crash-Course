var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic type
var id = 5;
var company = "Tanvi";
var isPublished = true;
var x = "Hello";
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "Hello"];
// Tuple
var person = [1, true, "Hello"];
// Tuple array
var employees;
employees = [
    [1, "Brad"],
    [2, "Jake"],
    [3, "Tim"],
];
// Union - holds more than one data type
var pid;
pid = 99;
//Enum 
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Down"] = 2] = "Down";
    Directions1[Directions1["Left"] = 3] = "Left";
    Directions1[Directions1["Right"] = 4] = "Right";
})(Directions1 || (Directions1 = {}));
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "UP";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
    Directions2["Right"] = "Right";
})(Directions2 || (Directions2 = {}));
console.log(Directions1.Up);
console.log(Directions1.Down);
console.log(Directions1.Left);
console.log(Directions1.Right);
console.log(Directions2.Up);
console.log(Directions2.Down);
console.log(Directions2.Left);
console.log(Directions2.Right);
var user = {
    id: 1,
    name: "Johnny"
};
// Type Assertion
var cid = 1;
// let customerId = <string>cid
var customerId = cid;
//function
function addNum(x, y) {
    return x * y;
}
console.log(addNum(9, 4));
//Void
function log(message) {
    console.log(message);
}
log("This is a message it can print string as well as numbers");
var user1 = {
    id: 1,
    name: "Johnny"
};
//Interface with functions
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var brad = new Person(1, "Brad");
var eva = new Person(2, "Eva");
console.log(brad, eva);
console.log(eva.register());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, "Shaun", "Developer");
console.log(emp.register());
// console.log(brad.id) gives error because id is declared private
