
const pro1 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(1), 1000);
    reject(new Error("error1"));
});

const pro2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(2), 400);
    reject(new Error("error2"));
});

const pro3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(3), 300);
    reject(new Error("error3"));
});

const pro4 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(4), 100);
    reject(new Error("error4"));
});

const pro5 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve(5), 200);
    reject(new Error("error5"));
});

promises = [pro1, pro2, pro3, pro4, pro5];

const erra = [];

// function to complete Promise.race in case all the promises rejected
function allReject(timeout) {
    return new Promise((resolve, reject) => 
    setTimeout(() => reject('ihatepromises !'), timeout * 1000));
}

// each of the original promises have been chained with .catch method in the event of an exception 
function f() {
    return Promise.race([
        pro1
            .catch(v2 => {
                erra.push(v2.message);
                // console.log("erra1", erra);
                return new Promise((resolve) => { })
            }),
        pro2
            .catch(v2 => {
                erra.push(v2.message);
                // console.log("erra2", erra);
                return new Promise((resolve) => { })
            }),
        pro3
            .catch(v2 => {
                erra.push(v2.message);
                // console.log("erra3", erra);
                return new Promise((resolve) => { })
            }),
        pro4
            .catch(v2 => {
                erra.push(v2.message);
                // console.log("erra4", erra);
                return new Promise((resolve) => { })
            }),
        pro5
            .catch(v2 => {
                erra.push(v2.message);
                // console.log("erra5", erra);
                return new Promise((resolve) => { })
            }),
        allReject(2)
    ])
        .then(
            cevine => {
                console.log("quickest fulfillment value final is", cevine);
            })
        .catch(error => console.log("rejection value final", erra))
}

f();
