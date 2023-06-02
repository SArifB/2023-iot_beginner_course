console.log("--- START OF SCRIPT ---");
function logger(value) {
    console.log("Value is:", value);
}

function sumCalculator(num1, num2, callback) {
    const sum = num1 + num2;
    callback(sum);
}

function timeoutCallback() {
    sumCalculator(5, 7, logger);
}
setTimeout(timeoutCallback, 2000);

console.log("--- END OF SCRIPT ---");
