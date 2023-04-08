// unknown type
let userInput: unknown;
let userName: string;
// we can't store values in userInput without getting an error, or without checking the type
userInput = "string";
if (typeof userInput === "string") {
  userName = userInput;
}

// never type

// The never type is used when you are sure that something is never going to occur.
// Useful to have on a function that you will never return. It will inform other programmers.
function generateError(message: string, code: number): never {
  throw {
    message,
    code,
  };
}
generateError("This will never return !", 404);
