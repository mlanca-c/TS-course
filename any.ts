// Core Types

// any type is the most flexible type. It doesnt tell typescript anything, basically means you can store any type.
//
let n1 = 2;
let n2: any = 3;
// n1 = 'Hello'; // this gives an error
n2 = 'Hello'; // this works
// this is not a good practice - you want to avoid any and be explicit about variable types.