const h = (x, y) => {
  console.log("h", x, y);
};

const h2 = p => {};

h(3);

// new h();

const outerObject = {
  x: 200,

  outerObjectMethod: function() {
    console.log("this in outerObjectMethod", this);

    const innerObject = {
      x: 1,

      traditionalFunction: function() {
        console.log("this.x in traditionalFunction", this.x);
      },

      shorthandMethod() {
        console.log("this.x is shorthandMethod", this.x);
      },

      arrowFunction: () => {
        console.log("this.x in arrowFunction", this.x);
      }
    };

    innerObject.traditionalFunction();
    innerObject.shorthandMethod();
    innerObject.arrowFunction();
  }
};

outerObject.outerObjectMethod();

const obj = {
  x: 1,

  func: function() {
    document.body.addEventListener("click", () => {
      console.log(this.x);
    });
  }
};

obj.func();
