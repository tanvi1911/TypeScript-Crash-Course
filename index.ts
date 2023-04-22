// Basic type
let id: number = 5;
let company:string = "Tanvi"
let isPublished: boolean = true
let x: any = "Hello"

let ids:number[] = [1,2,3,4,5]
let arr: any[] = [1, true, "Hello"]

// Tuple
let person: [number, boolean, string] = [1,true, "Hello"]

// Tuple array
let employees: [number, string][]

employees = [
    [1,"Brad"],
    [2,"Jake"],
    [3,"Tim"],
]

// Union - holds more than one data type
let pid : string | number 
pid = 99

//Enum 
enum Directions1 {
    Up = 1, 
    Down, 
    Left, 
    Right,
}

enum Directions2 {
    Up = "UP", 
    Down = "Down", 
    Left = "Left", 
    Right = "Right",
}

console.log(Directions1.Up)
console.log(Directions1.Down)
console.log(Directions1.Left)
console.log(Directions1.Right)

console.log(Directions2.Up)
console.log(Directions2.Down)
console.log(Directions2.Left)
console.log(Directions2.Right)

// Objects
type User = {
    id: number,
    name: string,
}


const user: User = {
    id:1,
    name: "Johnny"
}

// Type Assertion
let cid: any = 1
// let customerId = <string>cid
let customerId = cid as number


//function
function addNum(x: number,y:number): number {
    return x * y
}

console.log(addNum(9,4));

//Void
function log(message: string | number): void {
    console.log(message)
}

log("This is a message it can print string as well as numbers")

// Interfaces 
interface UserInterface  {
    id: number,
    name: string,
    age?: number,
}


const user1: UserInterface = {
    id:1,
    name: "Johnny"
}

interface MathFunc {
    (x: number, y: number): number
}

//Interface with functions
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface  {
    id: number,
    name: string,
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad")
const eva = new Person(2, "Eva")

console.log(brad, eva)
console.log(eva.register());

// Subclass
class Employee extends Person {
    position: string

    constructor(id:number, name:string, position: string) {
        super(id, name) 
        this.position = position
    }
}

const emp = new Employee(3,"Shaun", "Developer")

console.log(emp.register())

// console.log(brad.id) gives error because id is declared private

