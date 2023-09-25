// USE CASE FOR EQUALITY OPERATOR
// 1. To check if two values are equal
// 2. To check if two values are not equal
// 3. To check if two values are strictly equal
// 4. To check if two values are not strictly equal
// 5. To check if one value is greater than another -> >
// 6. To check if one value is less than another -> <
// 7. To check if one value is greater than or equal to another -> >=
// 8. To check if one value is less than or equal to another -> <=

const value = 1;
const anotherValue = 1;
console.log('------ loose equality ------')
if (value == anotherValue) {
    console.log('value and anotherValue are equal (loose)');
}
console.log('------ strict equality ------')
if (value === anotherValue) {
    console.log('value and anotherValue are equal (strict)');
}
