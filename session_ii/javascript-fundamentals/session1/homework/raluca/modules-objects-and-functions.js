// 1. export an array of objects. each object must have a method
//    that returns the value of the "x" property from the object.
// 2. import the array of objects from the previous exercise, in a separate module.
//    iterate through the array using an arrow function as the callback and print
//    the result of calling the object's method.

export const arrayOfObjects = [
   {
       x: 2,
       getX() {
           return this.x
       }
   },
   {
       x: 50,
       getX() {
           return this.x
       }
   },
   {
       x: 42,
       getX() {
           return this.x
       }
   },
];
