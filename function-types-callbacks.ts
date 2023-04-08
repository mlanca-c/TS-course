// Function return types
// a function can have a return type.
// the return type of the add function is number and it's infered by typescript, so we don't need to specify it.
// however, if we want to specify it, we can do it like this:
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void type
// void type is used when a function doesn't return anything.
function printResult(num: number): void {
  console.log("Result: " + num);
}

console.log(printResult(add(5, 12))); // undefined

// undefined type
// undefined type is a valid type in typescript. It's used when a variable is not initialized.
// from a typescript prespective, we rarely use undefined type.
let someValue: undefined; // this is ok
// someValue = 5; // this is not ok
console.log(someValue); // undefined

// Function as types
// we can store a function in a variable and use it as a type.
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(8, 8)); // 16

// Function callbacks
// we can pass a function as an argument to another function.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
