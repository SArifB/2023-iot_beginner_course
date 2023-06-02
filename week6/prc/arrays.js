const numArray = [1, 2, 3];
const strArray = ["One", "two", "three"];
const arr = new Array(1, 2, 3);

console.log(numArray[0]); // 1
console.log(numArray[1]); // 2
console.log(numArray[2]); // 3
console.log(numArray[3], "\n"); // undefined

console.log("strArray size: ", strArray.length);

strArray.push("four");
console.log("strArray size: ", strArray.length);
console.log(strArray);

const str = strArray.pop();
console.log(strArray);

strArray.unshift("zero");
console.log(strArray);

strArray.shift();
console.log(strArray, "\n");

for (let i = 0; i < strArray.length; i++) {
    const x = strArray[i];
    console.log(x);
}
console.log();

for (const str of strArray) {
    console.log(str);
}
console.log();

strArray.forEach((item) => console.log(item));
console.log();

strArray.forEach(function (item) {
    console.log(item);
});
console.log();

const doubledArray = numArray.map((item) => {
    return item * 2;
});
console.log(doubledArray);
console.log();

const people = [
    { name: "John Wayne", job: "Actor" },
    { name: "Steve Jobs", job: "Innovation" },
    { name: "Teemu Selanne", job: "Ice hockey player" },
];

for (let i = 0; i < people.length; i++) {
    const x = people[i];
    console.log(x);
}
console.log();

people.forEach((person) => console.log(person));
