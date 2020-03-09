let name = "Alice";
/*
const obj = {
  name: "Alice",

  getName: function() {
    return this.name;
  }
};
*/

const obj = {
  name,

  getName() {
    return this.name;
  }
};

function F() {}

new F();

new obj.getName();

console.log(obj.getName());
