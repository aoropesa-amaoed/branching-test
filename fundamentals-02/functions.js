
const randomSentence = "held gun nobody noon order review grandfather note sister soap wing describe friend put lips sign leader mind machine raise rocket none tail serious"

function add(num1, num2) {
    console.log('-------- inside add function --------')
    console.log("randomSenetence : ", randomSentence)
    return num1 + num2;
}

function greet() {
    console.log('-------- inside greet function --------')
    console.log("randomSenetence : ", randomSentence)
    console.log('Hello World!');
}

greet();
const sum = add(6, 6)
console.log('sum :', sum)

function isLastDigitEven(sum) {
    const lastDigit = sum % 10;

    if (lastDigit % 2 === 0) {
        console.log(`The last digit (${lastDigit}) of ${sum} is even.`);
        return true;
    } else {
        console.log(`The last digit (${lastDigit}) of ${sum} is not even.`);
        return false;
    }
}

isLastDigitEven(sum);