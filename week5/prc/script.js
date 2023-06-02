/*
// alert('Alert from the external file');
console.log('Log from external file');

const myString = 'Hello';
console.log(typeof myString);

const myBoolTrue = true;
const myBoolFalse = false;
console.log(typeof myBoolTrue, typeof myBoolFalse);

const x = 10;
const y = 10.555555;
console.log(typeof x, typeof y);

let a;
console.log(typeof a);

const b = null;
console.log(b);

let person = {
	firstName: "John",
	lastName: "Wayne",
};
console.log(person);
console.log(typeof person);

const testString = "Hello";
console.log(testString[5]);

const hello = "Hello";
const world = "world";
const helloWorld = hello + ", " + world + " " + (x + y);
console.log(helloWorld);

const newHelloWorld = helloWorld.replace('Hello', 'Cheers');
console.log(newHelloWorld.toUpperCase());

// replace
// slice
// substring
// toLowerCase
// toUpperCase

// Template strings
const templateString = `This is a ${hello} ${world} application`;
console.log(templateString);

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

let v = 10;
console.log(v += 5);

console.log(10 == 10);
console.log(10 == '10');
console.log(10 === '10');
console.log(10 != 11);

console.log(null == undefined);
console.log(null === undefined);

if (x > 10) {
	console.log('Its bigger than 10');
} else {
	console.log('Its not bigger than 10');
}

let myOtherString = ''
for (let i = 0; i < 10; i++){
	myOtherString = myOtherString + ' ' + i;
}
console.log(myOtherString);

let s = 0;
while (s != 5) {
	console.log('cool world');
	s++;
}
*/

function sayHello(name, friend) {
	console.log(`Hello ${name} and ${friend} !!!`);
}

sayHello('Arif', 150);

function square(x) {
	return x * x;
}
console.log(square(3));

const add = function(a, b) {
	return a + b;
}

console.log(add(5, 10));
console.log(typeof add);
console.log(typeof add());

function callback(fn, a, b) {
	return fn(a, b);
}

console.log(callback(add, 3, 10));
console.log(callback(square, 3, 10));

function sum1(a, b) {
	return a + b;
}

const sum2 = (a, b) => {
	return a + b;
}

const sum3 = (a, b) => a + b;

console.log(sum1(5, 10));
console.log(sum2(5, 10));
console.log(sum3(5, 10));

console.log(callback((a, b)=>{a + b}, 3, 10));
