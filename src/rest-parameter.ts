// Rest Parameter

// numbers -> merge all arguments into an array
const sub = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult - curValue;
  }, 0);
};

console.log(sub(1, 2));
console.log(sub(1, 2, 3, 4));
