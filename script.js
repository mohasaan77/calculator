const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b === 0 ? NaN : a / b);


function operate(a, b, op) {
  switch(op) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '×':
      return multiply(a, b);
      break;
    case '÷':
      return divide(a, b);
      break;
  }
}


function calculate() {
  num2 = Number(currentInput);
  const result = operate(num1, num2, op);

  if (result.toString().length >= 8) {
    display.textContent = formatNumber(result).toPrecision(3);    
  } else {
    display.textContent = formatNumber(result);    
  }

  num1 = null;
  num2 = null;
  op = null;
  currentInput = result.toString();
}


function formatNumber(num, digits = 2) {
  return Number.isInteger(num) ? num : parseFloat(num.toFixed(digits));
}


const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector("#equal-btn");
const clearBtn = document.querySelector("#clear-btn");
const backspaceBtn = document.querySelector("#backspace-btn");
const percentageBtn = document.querySelector("#percentage-btn");
const negationBtn = document.querySelector("#negation-btn");
const display = document.querySelector("#display-content");


let num1 = null;
let num2 = null;
let op = null;
let currentInput = "";
display.textContent = "0";


numbers.forEach(button => {
  button.addEventListener("click", () => {
    if (display.textContent === "0" && button.value !== ".") display.textContent = "";
    if (button.value === "." && currentInput.includes(".")) return;
    if (display.textContent.length === 8 && op !== null) return;

    currentInput += button.value;
    display.textContent = currentInput;
  });
});


operators.forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput === "") return;
    if (op !== null && num2 === null) calculate();
    if (op !== null && num2 !== null) return;

    num1 = Number(currentInput);
    op = button.value;
    display.textContent += button.value;
    currentInput = "";
  });
});


equalBtn.addEventListener("click", () => calculate());


clearBtn.addEventListener("click", () => {
  display.textContent = "0";
  num1 = null;
  num2 = null;
  op = null;
  currentInput = "";
});


backspaceBtn.addEventListener("click", () => {
  if (currentInput !== "") {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
    return;
  }

  if (op !== null) {
    op = null;
    display.textContent = display.textContent.slice(0, -1);
    currentInput = display.textContent;
    return;
  }
});


negationBtn.addEventListener("click", () => {
  if (currentInput.includes("-")) {
    currentInput = currentInput.slice(1);
    display.textContent = currentInput;
  } else {
    currentInput = "-" + currentInput;
    display.textContent = currentInput;
  }
});