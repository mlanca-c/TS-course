// Union type

// union types are used when a value can be more than a single type.
function combine(input1: number | string, input2: number | string) {
  let result: number | string;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(1, 2.3);
console.log(combinedAges);
const combinedNames = combine("Max", "Ana");
console.log(combinedNames);
const combinedTypes = combine("1", 2.3);
console.log(combinedTypes);

// Literal Types

// literal types are used when a variable can only have specific values
function literalTypes(input1: "this type" | "other type") {
  if (input1 === "this type") {
    console.log("Yup this type");
  } else if (input1 === "other type") {
    console.log("Yup the other type");
  }
}

literalTypes("other type");
literalTypes("this type");
// literalTypes('error'); // this gives an error

// Type Aliases

// You can use this to define the type before using it.
// Used with Union Types.
type Combo1 = string | number;

let stringa: Combo1 = "Hello";
let numba: Combo1 = 2;
// let somethingElse: Combo1 = true; // this gives an error

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
// For example:

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!

// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:
// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }
function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

greet(u1);
isOlder(u1, 1);
