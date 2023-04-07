// union type is a type that can be one of several types
function add(input1: number | string, input2: number | string) {
  let result;
  // type guard
  // in union we can be more flexible in function params
  // but we need to check the type of the params before we use them in the function
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = add(30, 26);
console.log(combinedAges);

const combinedNames = add("mlanca-c", "sotto");
console.log(combinedNames);
