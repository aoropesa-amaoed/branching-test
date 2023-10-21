const listOfNames = ["JM", "Ivan", "Estella", "Peter"];
//                     0 ,   1,       2,        3,   -> index
const functionArray = [function () { }, function () { }];
// -> Estella
console.log(listOfNames[2]); // -> this is how we access an element in array (arrayName[index])

console.log('------------ before modifying array ------------')
console.log(listOfNames);

listOfNames[2] = "Darrell"; // -> this is how we MODIFY an element in array
console.log('------------ after modifying array ------------')
console.log(listOfNames);

// 3 methods (length, push, pop)
console.log('------------ length ------------')
console.log(listOfNames.length); // -> length of array
console.log(listOfNames[listOfNames.length - 1]) // -> last element of array

console.log('------------ push ------------')
listOfNames.push("Virginia", "Blanche", "Harriet"); // -> add element to the end of array
console.log(listOfNames); // -> ["JM", "Ivan", "Darrell", "Peter", "Virginia", "Blanche", "Harriet"]

console.log('------------ pop ------------')
listOfNames.pop(); // -> remove last element of array
console.log(listOfNames); // -> ["JM", "Ivan", "Darrell", "Peter", "Virginia", "Blanche"]

console.log('------------- iteration -------------')
// for loop
for (const name of listOfNames) {
    console.log(name);
}

const listOfNumbers = [2, 3, 4, 5, "JM"]
const squareOfNumbers = []

for (const number of listOfNumbers) {
    squareOfNumbers.push(number * number)
}

console.log("squareOfNumbers: ", squareOfNumbers);

// scenario for gilbert
const demographic = [88, 12, 58, 42, 33, 67, 99, 1, 20, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number of demographic) {
    if (number === 20) {
        console.log('im here')
    }
}

const demographicTwo = [["gilbert", 18], ["JM", 16], ["Kimmy", 20]]

for (const person of demographicTwo) {
    for (const info of person) {
        if (info === 20) {
            console.log(person)
        }
    }
}

for (let i = 0; i < 3; i++) {
    console.log(demographic[i])
}

console.log('------------- while loop -------------')

let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}

console.log("Loop finished.");

console.log('------------- array operations -------------')

console.log('-------------- find --------------')
const myArray = [1, 2, 3, 4, 5, 6];
const targetElement = 3;

const foundElement = myArray.find(element => element === targetElement / 2);

if (foundElement !== undefined) {
    const index = myArray.indexOf(foundElement);
    console.log(`Element ${targetElement} found at index ${index}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}


console.log('------------- sort -------------')
const numbers = [5, 1, 3, 2, 4]
numbers.sort((a, b) => a - b);
// if a should be sorted before b, should return negative number
// if b should be sorted before a,  should return positive number

console.log(numbers); // Output: [1, 2, 3, 4, 5]

console.log('------------- filter -------------')
const words = ["apple", "banana", "cherry", "date", "grape"];

// Filter words that contain the substring "an"
const filteredWords = words.filter(word => word.includes("ap"));

console.log(filteredWords); // Output: ["apple", "grape"]