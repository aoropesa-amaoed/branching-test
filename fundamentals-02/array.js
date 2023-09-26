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