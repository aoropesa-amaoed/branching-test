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
        } else {
            if (validateInput(value)) {
                input += value;
                displayInput.innerHTML = cleanInput(input);
            }
        }
    })
}

function validateInput(value) {
    let lastInput = input.slice(-1)
    const operators = ["+", "-", "*", "/"];

    if (value == "." && lastInput == ".") {
        return false;
    }

    if (operators.includes(value)) {
        if (operators.includes(lastInput)) {
            return false;
        } else {
            return true;
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