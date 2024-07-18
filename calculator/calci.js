const currdisplay = document.querySelector(".curr-display");
const prevdisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".btn");
const operands = document.querySelectorAll(".operation");
const clearbtn = document.querySelector(".clear");
const delbtn = document.querySelector(".delete");
const equalbtn = document.querySelector(".equal");
let operation;

function appendNumber(number) {
    if (number === "." && currdisplay.innerText.includes(".")) return;
    currdisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currdisplay.innerText === "") return;
    if (prevdisplay.innerText !== "") {
        compute(); 
    }
    operation = operand;
    prevdisplay.innerText = `${currdisplay.innerText} ${operand}`;
    currdisplay.innerText = "";
}

function clearDisplay() {
    currdisplay.innerText = "";
    prevdisplay.innerText = "";
}

function compute() {
    let result;
    const previousValue = parseFloat(prevdisplay.innerText.split(" ")[0]);
    const currentValue = parseFloat(currdisplay.innerText);
    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        case "%":
            result = previousValue * (currentValue / 100); 
            break;
        default:
            return;
    }

    currdisplay.innerText = result;
}


numbers.forEach(number => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});


operands.forEach(operand => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});


clearbtn.addEventListener("click", () => {
    clearDisplay();
});


equalbtn.addEventListener("click", () => {
    if (prevdisplay.innerText === "") return;
    prevdisplay.innerText += ` ${currdisplay.innerText}`;
    compute();
    prevdisplay.innerText = " ";
});


delbtn.addEventListener("click", () => {
    currdisplay.innerText = currdisplay.innerText.slice(0, -1);
});
