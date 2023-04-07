// Typescript add many more types to javascript

// Core Types

// One of the core types is the number type
// There is only one number type, there is no int, float, double, etc. instead there is just number.
const n1 = 1;
const n2 = 1.2;
const n3 = -3;
// in typescript all numbers are floats by default

// There is also the string type which is text
// string types can be defined with single quotes, double quotes, or backticks
const string1 = "This is a string";
const string2 = "This is also a string";
const string3 = `This is also a string`;

// There is also the boolean type which is true or false
const b1 = true;
const b2 = false;
// there is also the idea of truthy and falsy values, which are values that are not technically true or false but are treated as such

// using all reviewd types:

function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (printResult) {
    console.log(phrase + result);
  }
  return result;
}

// const number1 = '5'; // this would work when passing it as a paraemter to the add function

// its redundant to implicitly assign the types of the variables below.
// and it's not a good practice.
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = "Result is: ";

const result = add(number1, number2, printResult, phrase);
console.log(result);

// on type assignment and type inference:
// typescript compiler understands the types of variables when a value is assigned in the same line that they are declared

// assigning a type to such a variable, because typescript has a built-in feature called type inference.
