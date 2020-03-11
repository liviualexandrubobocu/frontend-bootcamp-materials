let fruits = [
  {
    quantity: 100
  },
  {
    quantity: 200
  },
  {
    quantity: 300
  }
];

export default fruits;

let clothes = [
  {
    quantity: 5
  }
];

export { clothes };

export let cars = [{}],
  planes = [{}];

export function f() {}
export class A {}

// export { f };
// export { f as g }
// export { x } from "./another-module.js"
// export * from "./another-module.js"
// export * as y from "./another-module.js";

setTimeout(function() {
  clothes = null;
}, 1000);
