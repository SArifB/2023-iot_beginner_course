console.log("--- START OF FILE ---");

function promiseReturningFunction() {
    return new Promise((resolve, reject) => {
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
}

// async function asynFunction() {
const fetchData = async () => {
    try {
        const result = await promiseReturningFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// asynFunction();
fetchData();

console.log("--- END OF FILE ---");
