// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Utility function to get and parse input values
function getInputValues() {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  return [number1, number2];
}

// Utility function to display result
function displayResult(result) {
  document.getElementById("calculation-result").textContent = result;
}

// Event listeners for buttons
document.getElementById("add").addEventListener("click", function () {
  const [n1, n2] = getInputValues();
  displayResult(add(n1, n2));
});

document.getElementById("subtract").addEventListener("click", function () {
  const [n1, n2] = getInputValues();
  displayResult(subtract(n1, n2));
});

document.getElementById("multiply").addEventListener("click", function () {
  const [n1, n2] = getInputValues();
  displayResult(multiply(n1, n2));
});

document.getElementById("divide").addEventListener("click", function () {
  const [n1, n2] = getInputValues();
  displayResult(divide(n1, n2));
});
