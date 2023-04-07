// prints "Hello World!" in the console
console.log("Hello World!");

// adds two numbers and returns the result
function add(
  num1: number,
  num2: number,
  showResult: boolean,
  phrase: string
): number {
  const result: number = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

// there's no difference between integer and floats in TypeScript.
// the number type is used for both.
const number1 = 5;
const number2 = 2.8;

// boolean type
const printResult = true;
const resultPhrase = "Result is: ";

// calling the add function and storing the result in a variable
const result = add(number1, number2, printResult, resultPhrase);

// printing the result in the console
console.log(result);
