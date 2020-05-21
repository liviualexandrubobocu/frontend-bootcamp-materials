const promise1 = new Promise((resolve) => {
  resolve(1);
});

promise1.then((v) => {});

promise1.catch((v) => {});

promise1.then(
  (v) => {},

  (err) => {}
);

const any = (promises) => {
  const errors = [];
  let errorsCount = 0;

  return new Promise((resolve, reject) => {
    for (const [index, promise] of promises.entries()) {
      promise.then(
        (val) => {
          resolve(val);
        },

        (err) => {
          errors[index] = err;

          if (++errorsCount === promises.length) {
            reject(errors);
          }
        }
      );
    }
  });
};

const delay = (time, value, isReject) =>
  new Promise((resolve, reject) =>
    setTimeout(() => (isReject ? reject : resolve)(value), time)
  );

const promises = [
  // delay(1000, 5),
  // delay(500, 200),
  delay(20, new Error("rejection 1"), true),
  delay(2000, new Error("rejection 2"), true),
  delay(200, new Error("rejection 3"), true),
  new Promise(() => {}),
];

any(promises).then(
  (value) => {
    console.log("result", value);
  },
  (errors) => {
    console.log("errors", errors);
  }
);
