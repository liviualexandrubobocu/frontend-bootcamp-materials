/*import importedFruits from "./goods.js";
import { clothes } from "./goods.js";*/

import importedFruits, { clothes, cars, planes, f, A } from "./goods.js";

console.log(importedFruits);
console.log(clothes);
console.log(cars, planes);

setTimeout(function() {
  console.log(clothes);
}, 2000);
