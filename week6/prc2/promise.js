console.log("--- START OF FILE ---");

const myPromise = new Promise((resolve, reject) => {
    // Condition
    // Did the prmise fullfil
    // or
    // did the promise fail

    const data = {
        name: "John Wick",
        age: 56,
    };

    const error = {
        message: "ERROR",
    };

    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve(data);
        } else {
            reject(error);
        }
    }, 1000);
});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((data) => {
        console.log(data);
    });

console.log("--- END OF FILE ---");
