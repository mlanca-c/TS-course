// Generics
// const names: Array = []; // this type exists but its a generic type.

// const names: string[] = [] // exactly the same as above
// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then(data => {
// 	data.split(' ');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe(["Sports"]));
console.log(countAndDescribe([]));
// console.log(countAndDescribe(1)); // number has no length property

// keyOf Constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

// Generic classes
class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

// textStorage.addItem(1); // this gives an error
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: "Max" });
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem({ name: "Max" });
// console.log(objStorage.getItems());

// Generic Utility Types -- Readonly, Partial,
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

console.log(createCourseGoal("ft_transcendence", "final project", new Date()));

const names: Readonly<string[]> = ["Max", "Manu"];
// names.push("Anna"); // this gives an error
// names.pop(); // this gives an error
