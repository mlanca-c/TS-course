// Core Types (continuation)

// The next type to review is the object types
// objects are
const person = {
  name: "mlanca-c",
  age: 3,
};

// console.log(person.nickname); // this gives an error


// const person: object = {
// 	name: 'mlanca-c',
// 	age: 3,
// }
// console.log(person.name) // this will also give an error

// const person: {
// 	name: string;
// 	age: number;
// } = {
// 	name: 'mlanca-c',
// 	age: 3,
// }; // this is a bad practice because it's better to let the ts inference feature fo its job

// Nested objects
// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
// This would be the type of such an object:
// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }
// So you have an object type in an object type so to say.