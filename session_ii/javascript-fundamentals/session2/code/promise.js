// states
// - fulfilled - has a value associated
// - rejected - in general there is something wrong. it has a reason associated,
// which is usually an error object
// - pending - not fulfilled and not frejected

// resolving
// - can happen only once
// - promises (thenables) if used as resolving values are treated differently
// - it means either fulfilling or locking to match another promise

// rejecting
// - can happen only once
// - can be done with any value (error objects are recommended)

const promise = new Promise((resolve, reject) => {
  resolve(10);
  resolve(2);
  console.log("promise 1 is resolved");
});

const rejectedPromise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  //   reject(new Error("err"));
  // }, 2000);
  reject(new Error("err"));
  console.log("rejectedPromise is rejected");
});

promise.then(value => {
  console.log(value);
});

console.log(1);

const promise2 = new Promise((resolve, reject) => {
  resolve(
    new Promise((resolve, reject) => {
      resolve(20);
    })
  );
});

promise2.then(value => {
  console.log(value);
});

const promise3 = new Promise((resolve, reject) => {
  reject(new Error("error"));
  reject(new Error("error2"));
});

promise3
  .catch(error => {
    console.log("error", error.message);

    return 1000;
  })
  .finally(args => {
    console.log("args", args);
  });

Promise.all([promise, promise2]).then(values => {
  console.log("all values", values);
});

Promise.all([Promise.reject(new Error("error")), promise, promise2]).catch(
  err => {
    console.log("all error", err);
  }
);

Promise.race([promise, promise2]).then(value => {
  console.log("race value", value);
});

Promise.race([rejectedPromise, promise, promise2])
  .then(
    value => {
      console.log("race value", value);
    },
    err => {
      console.log("intermediate race error", err);

      return Promise.reject(err);
      // throw err;
    }
  )
  .catch(err => {
    console.log("race error", err);
  });
