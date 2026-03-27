const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// const divide = (a, b) => (b === 0 ? NaN : a / b);
const divide = (a, b) => a / b;


function operate(num1, num2, operator) {
  switch(operator) {
    case '+':
      return add(num1, num2);
      break;
    case '-':
      return subtract(num1, num2);
      break;
    case '×':
      return multiply(num1, num2);
      break;
    case '÷':
      return divide(num1, num2);
      break;
  }
}


let num1 = null;
let num2 = null;
let op = null;


const numbers = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector("#equal-btn");
const display = document.querySelector("#display-content");


numbers.forEach(number => {
  number.addEventListener("click", () => {
    display.textContent += number.value;
  });
});


operators.forEach(operator => {
  operator.addEventListener("click", () => {
    num1 = Number(display.textContent);
    display.textContent += operator.textContent;
    op = operator.value;
  });
});

equalBtn.addEventListener("click", () => {
  let fullDisplay = display.textContent;
  num2 = Number(fullDisplay.split(op)[1]);
  let result = operate(num1, num2, op);
  display.textContent = result.toPrecision(3);
});