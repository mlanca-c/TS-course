// Array de-structuring
const array: string[] = ['one', 'two', 'three', 'four'];

const [value1, value2] = array;

console.log(array);
console.log(value1, value2);

const [putHere, putAlsoHere, ...putRestHere] = array;
console.log(putHere, putAlsoHere);
console.log(...putRestHere);

// Object de-structuring
const item = {
    id: 1,
    amount: 5
};

const { id:newId, amount:newAmount } = item;

console.log(newId);
console.log(newAmount);

const { ...newItem } = item;

console.log(newItem);