const age = 21;
// Code Structure of if-else statement
// if (condition) {
// Code to execute if the condition is true
//   } else {
// Code to execute if the condition is false
//   }

// if (age >= 18) {
//     console.log("You can vote!");
// } else {
//     console.log('You can not vote!')
// }

console.log('-------------- Ternary Operator --------------')
// Code Structure of ternary operator
// condition ? expressionIfTrue : expressionIfFalse;
const canVote = age >= 18 ? "Yes" : "No";
console.log("canVote: ", canVote);