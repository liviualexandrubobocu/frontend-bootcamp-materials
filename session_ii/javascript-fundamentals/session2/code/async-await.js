Promise.resolve(5);
// Promise.reject(new Error("asdf"));

async function f() {
  try {
    // await Promise.reject(new Error("async error"));

    const value = await Promise.resolve(3000);

    return value;
  } catch (err) {
    console.log("error", err);
  } finally {
    console.log("finally");
  }
}

// const fun = async () => {};

f().then(value => {
  console.log("value", value);
});
