const jsonstr =
    '[{"name": "John Doe", "age": 31, "address": "123 Main St."}, {"name": "Jane Doe", "age": 29, "address": "456 Main St."}]';

const people = JSON.parse(jsonstr);
console.log(people);
console.log(JSON.stringify(people));

const peopleFilterwd = people.filter((person) => person.age > 30);
console.log(peopleFilterwd);

const names = people.map((person) => person.name);
console.log(names);
