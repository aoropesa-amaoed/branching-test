// ... -> rest/spread operators

function sum(...numbers) {
    console.log(numbers) // -> [1,2,3]
    let tempSum = 0;
    for (const number of numbers) {
        tempSum += number
    }
    return tempSum;
}

console.log(sum(1, 2, 3))

console.log('----------- spread operator ---------')
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

// const combineArr = (a, b) => {
//     return [...b, ...a]
// }

// console.log(combineArr(arr1, arr2))

const arr3 = [7, ...arr1, 8, ...arr2, 9]
console.log(arr3)

const obj1 = { name: 'JM', age: 21 }
const obj2 = { profession: 'Software Engineer', level: 'Senior', ...obj1 }

// another way
console.log('obj2 : ', obj2)

// one way to do it
obj1.occupation = { ...obj2 }
console.log(obj1)