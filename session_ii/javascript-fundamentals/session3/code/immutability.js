// referential transparency
// funcCall(1, 2) === funcCall(1, 2);

// const obj = Object.freeze({
//   x: 2,
// });

// obj.x = 3;

// filter
const arr1 = [1, 2, 3];
const filterResult = arr1.filter((value, index, arr) => {
  return value / 2 === 1;
});

console.log("filter", filterResult);
console.log("filter result equality", arr1 === filterResult);

// arr1.forEach((value, index, arr) => {
//   console.log(value);
// });

// map
const arr2 = [6, 7, 2];
const mapResult = arr2.map((value, index, arr) => {
  return value + 100;
});

console.log("map", mapResult);
console.log("map result equality", arr2 === mapResult);

// reduce
const arr3 = [10, 20, 50];
const reduceResult = arr3.reduce((sum, value, index, arr) => {
  return sum + value;
}, 0);

console.log("reduce -sum", reduceResult);

// ####################################

const person = {
  age: 10,
  name: "George",
};

// object destructuring
// const name = person.name;
const { name } = person;
console.log("object destructuring", name);

const people = [
  person,
  {
    age: 20,
    name: "Tom",
  },
];

// array destructuring
const [george, tom] = people;

console.log("array destructuring", george, tom);

const car = {
  engine: {
    weight: 5,
  },
};

// const weight = car.engine.weight;
// const { engine } = car;
// const { engine: engine } = car;
// const { weight } = engine;

// destructuring with a different binding name
const { engine: fastCarEngine } = car;
console.log("fast car engine", fastCarEngine);

const {
  engine: { weight: kilos },
} = car;

console.log("kilos", kilos);

// #################################

const bag = {
  books: [1],
  tshirt: { x: 2 },
  o: 0,
  y: 2,
};

// object spread
const biggerBag = {
  wallet: { y: 3 },
  ...{ u: 3 },
  y: 2000,
  ...bag,
  o: -33,
  pallet: { z: 1 },
};

// Object.assign({}, bag, {}, {});

console.log("object spread", bag === biggerBag, bag, biggerBag);

biggerBag.books = 90;
biggerBag.tshirt.x = 1000;

console.log("object spread with assignment", bag, biggerBag);

const naturalNumbers = [1, 2, 3, 4, 5];
// array spread
const integerNumbers = [
  -4,
  -1,
  -100,
  ...naturalNumbers,
  5,
  ...naturalNumbers,
  1,
  2,
];

console.log(
  "array spread",
  naturalNumbers === integerNumbers,
  naturalNumbers,
  integerNumbers
);

// rest arguments
function f(g, ...args) {
  g(...args, ...["a", "b"]);
}

function g(x, y, z, a, b) {
  console.log("function call spread in g", x, y, z, a, b);
}

f(g, 2, 1, 65);

// #####################

// rest
const { books, ...anotherBag } = bag;
console.log("rest with arguments", books, anotherBag, bag);

// rest
const [firstElement, ...rest] = [2, 1, 5, 6];

console.log("array rest", firstElement, rest);

// #################################

const form = {
  nameInput: "Tom",
  ageInput: 20,
  genderInput: "Male",
};

// the user enters George in the name input

const formResult = {
  ...form,
  nameInput: "George",
};

const form2 = {
  person1: {
    nameInput: "Tom",
    ageInput: 20,
    genderInput: "Male",
  },

  person2: {
    nameInput: "Alice",
    ageInput: 20,
    genderInput: "Female",
  },
};

// the user enters Maria for the second person

const form2Result = {
  ...form2,
  person2: {
    ...form2.person2,
    nameInput: "Maria",
  },
};

const subFormKey = "person1";
const nameInputValue = "Costi";
const form2ResultWithKey = {
  ...form2,
  [subFormKey]: {
    ...form2[subFormKey],
    nameInput: nameInputValue,
  },
};

console.log("form spread subobject with key", form2, form2ResultWithKey);

// #############################

// add an element to an array

const realNumbers = [2.5, 1.2, -5];
const realNumbersWithElementAddedAtTheEnd = [...realNumbers, 0];

console.log(
  "add element ot array",
  realNumbers,
  realNumbersWithElementAddedAtTheEnd
);

const realNumbersWithElementAddedAtTheBeginning = [0, ...realNumbers];

// modify element
const modifyIndex = 2;
const realNumbersWithModifiedElement = realNumbers.map((value, index) => {
  if (index === modifyIndex) {
    return 0;
  } else {
    return value;
  }
});

console.log(
  "modify at given index",
  realNumbers,
  realNumbersWithModifiedElement
);

const insertIndex = 2;
const realNumbersWithInsertedElement = [
  ...realNumbers.slice(0, insertIndex),
  0,
  ...realNumbers.slice(insertIndex),
];

console.log(
  "insert at given index",
  realNumbers,
  realNumbersWithInsertedElement
);

const removedIndex = 1;
const realNumbersWithRemovedElement = realNumbers.filter(
  (value, index) => index !== removedIndex
);

console.log(
  "removed from given index",
  realNumbers,
  realNumbersWithRemovedElement
);

// sets and transformations
const arrayWithDuplicates = [1, 2, 1, 1, 3, 4];
const uniqueElements = new Set(arrayWithDuplicates);
const uniqueElementsArray = Array.from(uniqueElements);

console.log("unique elements array", uniqueElementsArray);

uniqueElements.has(3);

[...uniqueElements];

// maps and transformations
const uniqueElementsMap = new Map(arrayWithDuplicates.entries());

console.log("unique elements map", uniqueElementsMap);
console.log("spreaded map", [...uniqueElementsMap]);

const windSpeeds = new Map([
  [0, "blue"],
  [50, "yellow"],
  [100, "red"],
]);

console.log("color for wind speed 100", windSpeeds.get(100));

// windSpeeds.set(100, "purple");

const mapChangeKey = 100;
const changeColor = "purple";

const windSpeedsWithChangedColor = new Map(
  [...windSpeeds].map((entry) => {
    if (entry[0] === mapChangeKey) {
      return [entry[0], changeColor];
    }

    return entry;
  })
);

console.log("wind speeds map with changed color", windSpeedsWithChangedColor);

console.log(
  "object entries",
  Object.entries({
    x: 1,
    y: 2,
  })
);

console.log("object from map", Object.fromEntries(windSpeedsWithChangedColor));

console.log(
  "map from object",
  new Map(
    Object.entries({
      x: 1,
      y: 2,
    })
  )
);

console.log(
  "enumerable keys",
  Object.keys({
    x: 1,
    y: 2,
  })
);

console.log(
  "enumerable values",
  Object.values({
    x: 1,
    y: 2,
  })
);

const weakMap = new WeakMap([
  [{ x: 0 }, 3],
  [{ y: 1 }, { y: 2 }],
]);

const weakSet = new WeakSet([{ x: 1 }, { x: 2 }]);

// window.x = {};

// const globalMap = new Map([["x", window.x]]);

// window.x = null;

// console.log("spreaded weakSet", [...weakSet]);
