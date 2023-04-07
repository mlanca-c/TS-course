// Typescript add many more types to javascript
// Core Types
// One of the core types is the number type
// There is only one number type, there is no int, float, double, etc. instead there is just number.
var n1 = 1;
var n2 = 1.2;
var n3 = -3;
// There is also the string type which is text
// string types can be defined with single quotes, double quotes, or backticks
var string1 = "This is a string";
var string2 = "This is also a string";
var string3 = "This is also a string";
// There is also the boolean type which is true or false
var b1 = true;
var b2 = false;
// there is also the idea of truthy and falsy values, which are values that are not technically true or false but are treated as such
// example:
function add(n1, n2) {
    return n1 + n2;
}
// const number1 = '5'; // this would work when passing it as a paraemter to the add function
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
