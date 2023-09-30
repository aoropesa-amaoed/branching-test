const keys = document.querySelectorAll(".key");
const displayInput = document.querySelector(".display .input");
const displayOutput = document.querySelector(".display .output");


let input = "";

for (const key of keys) {
    const value = key.dataset.key;
    key.addEventListener("click", function () {
        if (value === "clear") {
            input = "";
            displayInput.innerHTML = "";
            displayOutput.innerHTML = "";
        } else if (value === "=") {
            const result = eval(prepareInput(input))
            displayOutput.innerHTML = result;
        }

        else if (value === "brackets") {
            if (input.indexOf("(") === -1 ||
                input.indexOf("(") !== - 1 &&
                input.indexOf(")") !== -1 &&
                input.lastIndexOf("(") < input.lastIndexOf(")")) {
                input += "("
            } else if (
                input.indexOf("(") !== -1 &&
                input.indexOf(")") === -1 ||
                input.indexOf("(") !== -1 &&
                input.indexOf(")") !== -1 &&
                input.lastIndexOf("(") > input.lastIndexOf(")")) {
                input += ")";
            }

            displayInput.innerHTML = cleanInput(input)
        }
        else {
            if (validateInput(value)) {
                input += value;
                displayInput.innerHTML = cleanInput(input);
            }
        }
    })
}


function validateInput(value) {
    const operators = ["+", "-", "*", "/"];
    const decimalCount = (input.match(/\./g) || []).length;


    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (operators.includes(value) && operators.includes(char)) {
            return false;
        } else if (value === "." && decimalCount >= 1 || value === "." && (i < input.length - 1 && input[i + 1] === ".")) {
            return false;
        }
    }

    return true;
}


function cleanInput(input) {
    const inputArr = input.split("")
    const inputArrLength = inputArr.length;

    for (let i = 0; i < inputArrLength; i++) {
        if (inputArr[i] == "*") {
            inputArr[i] = `<span class="operator">x</span>`
        } else if (inputArr[i] == "/") {
            inputArr[i] = `<span class="operator">/</span>`
        } else if (inputArr[i] == "+") {
            inputArr[i] = `<span class="operator">+</span>`
        } else if (inputArr[i] == "-") {
            inputArr[i] = `<span class="operator">-</span>`
        } else if (inputArr[i] == "(") {
            inputArr[i] = `<span class="brackets">(</span>`
        } else if (inputArr[i] == ")") {
            inputArr[i] = `<span class="brackets">)</span>`
        } else if (inputArr[i] == "%") {
            inputArr[i] = `<span class="percent">%</span>`
        }
    }

    return inputArr.join("");
}

function prepareInput(input) {
    const inputArr = input.split("");

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] === "%") {
            inputArr[i] = "/100";
        }
    }

    return inputArr.join("");
}