// const person: object = {}; --> this is not a good practice
// const person: {} = {}; --> this is not a good practice

// custom types start with capital letter
// enum is a custom type
enum Role {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
console.log(Role.AUTHOR)

// this is also not a good practice, where not the case of using a tuple.
// otherwise ts would think the role is an array of type number and string
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string]; // tuple
  role: Role; // enum
} = {
  name: "mlanca-c",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  // role: [2, "author"],
  role: Role.ADMIN,
};
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// nested objects
const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);

// any type is not a good practice
let favouriteActivities: any[];
favouriteActivities = ["Sports", 1];
