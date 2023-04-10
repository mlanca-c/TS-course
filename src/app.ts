// Intersection Type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "mlanca-c",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinale = string | number;
type Numeric = number | boolean;
type Universal = Combinale & Numeric;

// const u1: Universal = 'Hello'; // this doesnt't work
const u2: Universal = 2;
// const u3: Universal = true; // this doesn't work

// Type Guard
function add(a: Combinale, b: Combinale) {
  // this is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`);
  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: "sotto", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(new Truck());
useVehicle(new Car());

// Discreminated Union
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log(`Moving with speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 30 });

// Type Casting
// const userInputElement = <HTMLInputElement>document.getElementById("user-input"); // this also works
const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi There!";
}

// Index Property
interface ErrorContainer {
  // { email: 'Not a valid email' , username: 'Must start with a character'}
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};

console.log(errorBag);

// Function Overload
function sub(a: number, b: number): number;
function sub(a: string, b: string): string;
function sub(a: Combinale, b: Combinale) {
  // this is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a - b;
}

const result = sub("mlanca", "-c");
result.split("-");

// Optional chaining
const fetchedUserData = {
  id: "u1",
  name: "Max",
  //   job: { title: "CEO", description: "My own company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title); // secure way of avoiding errors in js
console.log(fetchedUserData?.job?.title); // typescript way

// Nullish Coalescing
const userInput = null;
// const userInput = '';2

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
