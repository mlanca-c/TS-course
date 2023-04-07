// Core Types (continuation)

// arrays
const arr1 = [1, 2, 3]; // type number[]
const arr2 = ["one", "two", "three"]; // type string[]
const arr3 = [1, true, "hello world"]; // type (number | boolean | string)[]

// some array builtin methods
arr1.push(4); // adds 4 to end of array
arr1.unshift(0); // adds 0 to beggining of array

arr1.pop(); // removes last element of array
arr1.shift(); // removes first element of array

// iterating through arr2
for (const str of arr2) {
  console.log(str.toUpperCase());
}

// Tuples
// tuples are fixed lenghth and fixed type arrays
// they are declared like this
const tup1: [number, string] = [1, "Hello"];

// tup1[0] = 'Hello'; // this gives an error
tup1[0] = 1;
// tup[1] = 1; // this gives an error
tup1[1] = "Hello";
// tup1[2] = 2; // this also give an error

// tuples are a great example for cases when typescript inferes a type but we actually want to change that type
// if I had written just `const tup1 = [1, 'Hello']` the assumed type would be (number | string)[] -> array of numbers and strings
// so in this case we need to specify the type.

// Enums
// loosely related to the idea of a tuple
// enums are a way to give more friendly names to sets of numeric values
// enums are declared like this
enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2