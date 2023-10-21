const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log('name :', name)
console.log('age : ', age)

console.log('-----------array destructuring --------------')
const colors = ['red', 'green', 'blue'];
const [firstColor, secondColor, thirdColor] = colors;
console.log('firstColor :', firstColor);
console.log('secondColor :', secondColor);
console.log('thirdColor :', thirdColor);

console.log('--------- Renaming Variables in Object Destructuring ----------')
const student = { firstName: 'Alice', lastName: 'Smith' };
const { firstName: first, lastName: last } = student;
console.log(first); // 'Alice'
console.log(last);  // 'Smith'

console.log('----------- nested destructuring -----------')
const user = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'

    }
};
let { name: userName, address: { city, country } } = user;

console.log(city);    // 'New York'
console.log(country); // 'USA'

console.log('----- Function Parameter Handling -----')
function printPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

printPerson(person);