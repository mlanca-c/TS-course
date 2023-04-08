// Arrow functions
// function add(a: number, b: number) {
//   return a + b;
// } // this can be converted into an arrow function
const add = (a: number, b: number) => {
  return a + b;
}; // this particular function can also be written like this
// const add = (a: number, b: number) => a + b;

// default function parameters
const subtract = (a: number, b: number = 1) => a - b;
subtract(1); // I can do this!
