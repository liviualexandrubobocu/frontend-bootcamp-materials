/*import importedFruits from "./goods.js";
import { clothes } from "./goods.js";*/

import importedFruits, { clothes, cars, planes, f, A } from "./goods.js";
// import { clothes as something } from "./goods.js";
import * as moduleObject from "./goods.js";

console.log("imported module object", moduleObject);

// clothes = 2;
// moduleObject.clothes = 2;

console.log(importedFruits);
console.log(clothes);
console.log(cars, planes);

setTimeout(function() {
  console.log(clothes);
}, 2000);
