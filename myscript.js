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
let operationComplete = false; // Variable to track if operation is complete
let decimalPlaced = false; // New variable to track decimal point placement



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
// negative
const negativeBtn = document.getElementById('negative')


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
    operator.addEventListener('click', () => {
      handleOperator(operator.id);
    // inputA = screenValue; //test
    });
  });
  
  // Clear
  clearBtn.addEventListener('click', () => clear());
  // Equals
  sumBtn.addEventListener('click', () => {
    operate(operator, inputA, inputB)
    // TEST
    operationComplete = true;
  });
  // negative
  negativeBtn.addEventListener('click', () => {
    screenValue = screenValue * -1;
    screen.innerHTML = screenValue;
    // handleDigit(screenValue);
  });

}

function clear() {
  screenValue = 0;
  screen.innerHTML = screenValue;
  readyStatus = false;
  operationComplete = false;
  console.log("Clear");
  operator = '0';
  inputA = 0;
  inputB = 0;
}

// digits pressed, check ready state and if ready, if not, update Input A.
// When an operator is pressed, add "Ready" state and we save operator variable.
// When next digit is input, check ready state and if ready, wipe screen and update InputB
// When = sign pressed, use input A, operator, and input B to determine sum. Wipe screen and display sum.
// Sum now becomes input A as well, ready state stays on.
// If cleared, ready state turns off and all variables reset to zero.


//Creates InputA and InputB
function handleDigit(digit) {

  // Do not allow user to add digits to sums
  if (operationComplete) {
    screenValue = '';
    inputB = 0;
    inputA = 0;
    operationComplete = false;
  }
  
  // Check if = sign pressed so we know to reset if it has.
  if (!readyStatus) {
    // Add digit to end of screen value, unless its 0, then replace the zero
    if (screenValue === 0) {
      screenValue = digit;
    } else {
      screenValue = screenValue + digit;
    }
    inputA = screenValue;
    screen.innerHTML = screenValue;

  } else if (readyStatus) {
    if (screenValue === 0) {
      screenValue = digit;
    } else {
      screenValue = screenValue + digit;
    }
    inputB = screenValue;
    screen.innerHTML = screenValue;
  }

  console.log(`inputA: ${inputA}`);
  console.log(`inputB: ${inputB}`);

}

// Creates operator variable, changes ready status
function handleOperator(newOperator) {
  if (newOperator == 'sumBtn') {
    return
  }

  // if A and B both have values, operate
  // This is so pressing an operator with 2 digits already in will spit out sum for you
  if (inputA && inputB) {
    operate(operator, inputA, inputB);
  }

  readyStatus = true;
  inputA = screenValue;
  screenValue = '';
  operator = newOperator;

  // Add In-line CSS to make operator button glow when active
}

// creates a sum from all 3 parts using operator functions
function operate(operator, inputA, inputB) {
  inputA = parseFloat(inputA);
  inputB = parseFloat(inputB);

  // console.log(`inputA: ${inputA}`);
  // console.log(`inputB: ${inputB}`);

  // Add
  if (operator == 'addBtn') {
    sum = add(inputA, inputB);
  } else if (operator == 'subtractBtn') {
    sum = subtract(inputA, inputB);
  } else if (operator == 'multiplyBtn') {
    sum = multiply(inputA, inputB);
  } else if (operator == 'divideBtn') {
    sum = divide(inputA, inputB);
  } else {
    sum = inputA;
  }

  // Handle Sum, make it the new inputA, limit what screen will show
  inputA = sum;
  //Round size
  screenValue = +(Math.round(sum + "e" + 6) + "e-" + 6);
  screen.innerHTML = screenValue;
}

function add(a, b) {
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

function roundToX(num, decimals) {
  return +(Math.round(num + "e" + decimals) + "e-" + decimal);
}


readInputs();