// Decorators

// decorator function

// class decorator
function Logger(logString: string) {
  console.log("Logger");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("WithTemplate");
  return function (_: Function) {
    console.log("Rendering template");
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

// decorators execute bottom-up (their returns do)
@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();

console.log(person);

// Property Decorators
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target);
  console.log(propertyName);
}

// accessor decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// method decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  private _price: number;

  constructor(private title: string, price: number) {
    this._price = price;
  }

  @Log2
  set price(val: number) {
    if (val < 0) {
      throw new Error(`${val}: invalid price`);
    }
    this._price = val;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// the instantiation of the class doesn't trigger the decorators
const p1 = new Product("Book", 19);
const p2 = new Product("Book 2", 29);