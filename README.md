# TypeScript-Crash-Course


TypeScript is a programming language that is a superset of JavaScript. It adds optional static typing and other features to JavaScript, which can help catch errors at compile-time rather than run-time. Here's a quick crash course to get you started:

## Installation

To install TypeScript, you need to have Node.js and npm installed on your machine. Then you can run the following command to install TypeScript globally:

```
npm install -g typescript
```

## Basic Types

TypeScript supports the following basic types:

- `number` for numeric values
- `string` for textual values
- `boolean` for true/false values
- `null` and `undefined` for absence of value
- `object` for complex data structures
- `any` for any type (similar to JavaScript's `var`)

## Variable Declarations

To declare a variable in TypeScript, you can use the `let` keyword followed by the variable name and its type (optional). Here are some examples:

```typescript
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;
let person: { name: string, age: number } = { name: "John", age: 25 };
```

You can also declare a variable without specifying its type and let TypeScript infer it based on the value:

```typescript
let age = 25; // age is inferred as number
let name = "John"; // name is inferred as string
```

## Functions

Functions in TypeScript can specify the types of their parameters and return values. Here's an example:

```typescript
function add(x: number, y: number): number {
  return x + y;
}

let result = add(1, 2); // result is inferred as number
```

You can also use arrow functions in TypeScript:

```typescript
let add = (x: number, y: number): number => {
  return x + y;
};
```

## Classes

Classes in TypeScript are similar to classes in other object-oriented languages like Java or C#. Here's an example:

```typescript
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

let john = new Person("John", 25);
console.log(john.getDetails()); // "John is 25 years old."
```

## Interfaces

Interfaces in TypeScript define the structure of an object. Here's an example:

```typescript
interface Person {
  name: string;
  age: number;
}

let john: Person = { name: "John", age: 25 };
```

## Generics

Generics in TypeScript allow you to define a function or class with a type parameter that can be used to specify the type of its input or output. Here's an example:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<number>(1); // result is inferred as number
```

## Conclusion

This crash course should give you a basic understanding of TypeScript. There's a lot more to learn, but this should be enough to get you started. Good luck!
