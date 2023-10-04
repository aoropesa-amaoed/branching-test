function sayHello() { } // -> standard/regular way of defining functions
const greet = () => { } // -> how we write arrow functions

const addNumbers = (a, b) => {
    return a + b;
}

console.log(addNumbers(10, 20))

// DEFAULT PARAMETER
const greetV2 = (name = 'Code Runners') => console.log(`Good morning!, ${name}`)

console.log('------- you give a name to the greetV2 function')
greetV2('Josh')

console.log('--------- you dont give a name to the greetV2 function')
greetV2()