// Define a person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main Street",
        city: "Anytown",
        state: "CA",
        postalCode: "12345",
    },
    hobbies: ["reading", "traveling", "photography"],
    sayHello: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
};

// Access properties of the person object
console.log(person.firstName); // Output: "John"
console.log(person.age); // Output: 30
console.log(person['hobbies']); // Output: ["reading", "traveling", "photography"]

// const exception in object
person.firstName = "Jane";
console.log(person.firstName); // Output: "Jane"

console.log(person)
person.sayHello()