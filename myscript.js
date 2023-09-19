const DEFAULT_INPUT_A = 0;
const DEFAULT_INPUT_B = 0;
const DEFAULT_OPERATOR = '0';
const DEFAULT_SCREEN = 0;

let inputA = DEFAULT_INPUT_A;
let inputB = DEFAULT_INPUT_B;
let operator = DEFAULT_OPERATOR;
let screenValue = DEFAULT_SCREEN;
let readyStatus = false;
let sum = undefined;



// Get buttons from page
const addBtn = document.getElementById('addBtn')
const subtractBtn = document.getElementById('subtractBtn')
const multiplyBtn = document.getElementById('multiplyBtn')
const divideBtn = document.getElementById('divideBtn')
// Sum
const sumBtn = document.getElementById('sumBtn')
const screen = document.getElementById('screen')
// clear
const clearBtn = document.getElementById('clear')


// Wait for numpad buttons to be pressed, assign full number to screenValue, display on screen
function readInputs() {
  // Get all the buttons by their class name
  const digits = document.querySelectorAll('.numpad button');
  const operators = document.querySelectorAll('.operators button');
  // Add a click event listener to each digit button
  digits.forEach(digit => {
    digit.addEventListener('click', () => handleDigit(digit.value));
  });
  // Add a click event listener to each operator button
  operators.forEach(operator => {
    operator.addEventListener('click', () => handleOperator(operator.id));
  });
  // Clear
  clearBtn.addEventListener('click', () => clear());
  // Equals
  sumBtn.addEventListener('click', () => operate(operator, inputA, inputB));
}

function clear() {
  screenValue = '0';
  screen.innerHTML = screenValue;
  readyStatus = false;
  console.log("Clear");
}

// digits pressed, check ready state and if ready, if not, update Input A.
// When an operator is pressed, add "Ready" state and we save operator variable.
// When next digit is input, check ready state and if ready, wipe screen and update InputB
// When = sign pressed, use input A, operator, and input B to determine sum. Wipe screen and display sum.
// Sum now becomes input A as well, ready state stays on.
// If cleared, ready state turns off and all variables reset to zero.


//Creates InputA and InputB
function handleDigit(digit) {
  if (!readyStatus) {
    // Add digit to end of screen value, unless its 0, then replace the zero
    if (screenValue === '0') {
      screenValue = digit;
    } else {
      screenValue = screenValue + digit;
    }
    inputA = screenValue
    screen.innerHTML = screenValue;

  } else if (readyStatus) {
    if (screenValue === '0') {
      screenValue = digit;
    } else {
      screenValue = screenValue + digit;
    }
    inputB = screenValue
    screen.innerHTML = screenValue;
  }
}

// Creates operator variable, changes ready status
function handleOperator(newOperator) {
  if (newOperator == 'sumBtn') {
    return
  }
  readyStatus = true;
  screenValue = '';
  operator = newOperator;
}

// creates a sum from all 3 parts using operator functions
function operate(operator, inputA, inputB) {
  inputA = parseInt(inputA);
  inputB = parseInt(inputB);
  // Add
  if (operator == 'addBtn') {
    sum = add(inputA, inputB);
  } else if (operator == 'subtractBtn') {
    sum = subtract(inputA, inputB);
  } else if (operator == 'multiplyBtn') {
    sum = multiply(inputA, inputB);
  } else if (operator == 'divideBtn') {
    sum = divide(inputA, inputB);
  }

  // Handle Sum
  // inputA = sum;
  screenValue = sum;
  screen.innerHTML = screenValue;
  inputA = screenValue;
  console.log(`inputA: ${inputA}`);
  console.log(`Sum: ${sum}`);

}

function add(a, b) {
	// return (parseInt(a) + parseInt(b));
  return (a + b);
};

function subtract(a, b) {
	return (a - b);
};

function multiply(a, b) {
  return (a * b)
};

function divide(a, b) {
  return (a / b)
};

function power(a, b) {
  // return (a)^b;
  return Math.pow(a, b);
};

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




// // Function for if + pressed, do handleOperatorPress(plus)
// addBtn.onclick = () => handleOperatorPress('add')
// subtractBtn.onclick = () => handleOperatorPress('subtract')
// multiplyBtn.onclick = () => handleOperatorPress('multiply')
// divideBtn.onclick = () => handleOperatorPress('divide')
// sumBtn.onclick = () => handleOperatorPress('sum', inputA, inputB)

// // function to handle num button presses, using current screen value
// function handleOperatorPress(operator, inputA, inputB) {
//   // If any OPERATOR button pressed, save current screenValue as variable A. When next num is pressed, wipe screen and display new number. 
//   // When = is pressed, save screenValue as variable B, use add function with value A and B, replace screenvalue

//   // Function to send screenValue to the screen
// }