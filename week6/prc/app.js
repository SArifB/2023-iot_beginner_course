const student = {
    fullname: "Arif",
    lastname: "Basharyar",
    studentNumber: 223470,
    email: "arif.basharyar@tuni.fi",
};

function Student(name, surname, number, email) {
    this.fullname = name;
    this.lastname = surname;
    this.studentNumber = number;
    this.email = email;
}

const student1 = new Student("John", "Wayne", 2342343, "john.wayne@gmail.com");

// The properties are key value pairs
const obj = {
    key: "value",
};

console.log(student, "\n");
console.log(student1, "\n");

const myObj = new Object();
myObj.key = "value1";
console.log(myObj, "\n");

const person = {};
person.name = "Sanna";
person.email = "sanna.laura@gmail.com";
console.log(person);

person.email = "sanna.elisa@gmail.com";
console.log(person);

person["email"] = "sanna.jotain@tuni.fi";
console.log(person, "\n");

const myObj1 = {};
Object.assign(myObj1, { email: "john.wayne@gogo.fi" });
console.log(myObj1, "\n");

console.log("Name: " + person.name);
console.log("Email: " + person.email);
console.log("Name: " + person["name"]);
console.log("Email: " + person["email"], "\n");

console.log(Object.values(person));
console.log(Object.keys(person), "\n");

const newPerson = {
    name: "John",
    sayHello: function () {
        console.log("Hello " + this.name);
    },
    sayGoodbye: () => {
        console.log("Goodbye " + this.name);
    },
    sayGoodbye1: (name) => {
        console.log("Goodbye " + name);
    },
};

newPerson.sayHello();
newPerson.sayGoodbye();
newPerson.sayGoodbye1("Peter");
console.log("\n");

const anotherObj = {
    name: "John",
    address: {
        number: 10,
        city: "Tampere",
    },
};

console.log(anotherObj.name);
console.log(anotherObj["address"]["city"]);

delete anotherObj.name;
console.log(anotherObj);
