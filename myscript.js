let inputA = 0;
let inputB = 0;

// Get buttons from page
const addBtn = document.getElementById('addBtn')
const subtractBtn = document.getElementById('subtractBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const divideBtn = document.getElementById('divideBtn')
const sumBtn = document.getElementById('sumBtn')

// Wait for numpad buttons to be pressed, assign full number to screenValue, display on screen
function readInputs() {
  // inputA = ;
  // inputB = ;
}

// Function for if + pressed, do handleOperatorPress(plus)
addBtn.onclick = () => handleOperatorPress('add')
subtractBtn.onclick = () => handleOperatorPress('subtract')
multiplyBtn.onclick = () => handleOperatorPress('multiply')
divideBtn.onclick = () => handleOperatorPress('divide')
sumBtn.onclick = () => handleOperatorPress('sum', inputA, inputB)

// function to handle num button presses, using current screen value
function handleOperatorPress(operator, inputA, inputB) {
  // If any OPERATOR button pressed, save current screenValue as variable A. When next num is pressed, wipe screen and display new number. 
  // When = is pressed, save screenValue as variable B, use add function with value A and B, replace screenvalue

  // Function to send screenValue to the screen
}

function add(a, b) {
	return (a + b);
};

function subtract(a, b) {
	return (a - b);
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

function multiply(array) {
	return array.reduce((total, current) => total * current);
};

const power = function(a, b) {
  // return (a)^b;
  return Math.pow(a, b);
};

const factorial = function(n) {
// if number is 0
if (n === 0) {
    return 1;
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
};


// Run
readInputs();

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };