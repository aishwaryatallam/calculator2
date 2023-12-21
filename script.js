let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    let result = eval(displayValue);
    if (Number.isNaN(result) || !Number.isFinite(result)) {
      throw 'Invalid Input';
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
  } catch (error) {
    displayValue = '';
    document.getElementById('display').value = 'Error';
  }
}