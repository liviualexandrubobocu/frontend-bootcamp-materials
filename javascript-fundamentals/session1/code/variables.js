// "use strict";
/*// var x = 1;
// var x;
// var x;

// if (3 > 2) {
//   var y = 4;
// }

// console.log(y);

// var z = 5;

// z *= 100;
// z = z * 100;
// console.log(z);

// for (var i = 0; i < 5; i += 1) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// }

// let m = 100;

// for (let j = 0; j < 5; j++) {
//   setTimeout(function() {
//     console.log(j);
//   }, 2000);
// }

// {
//   let o = 0;
// }

// console.log(o);
*/

// function f() {
//   console.log(localVariable);

//   var localVariable = 2;

//   // console.log(letLocalVariable);

//   function g() {
//     console.log(letLocalVariable);
//   }

//   let letLocalVariable = 3;

//   g();
// }

// f();

const constantVariable = 7;

// constantVariable = 8;

const objectVariable = {
  x: 1
};

objectVariable.x = 100;

Object.freeze(objectVariable);

objectVariable.x = 200;
