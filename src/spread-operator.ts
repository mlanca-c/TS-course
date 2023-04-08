// Spread Operator
const hobbies = ["sports", "cooking"];
const activeHobbies = ["hiking"];
// activeHobbies.push(hobbies); // this is not possible
activeHobbies.push(...hobbies);
// activeHobbies = ["hiking", ...hobbies]; // this can also be done

const person = {
  name: "mlanca-c",
  age: 3,
};

// const copiedPerson = person; // in here we're not really creating a copy
const copiedPerson = { ...person }; // here we're copying
person.name = 'testing...';
console.log(person);
console.log(copiedPerson);