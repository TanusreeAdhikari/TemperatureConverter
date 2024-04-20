function convert() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var selectUnit = document.getElementById('selectUnit').value;
    var resultElement = document.getElementById('result');
    
    if (isNaN(inputTemp)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
    
    var convertedTemp;
    if (selectUnit === 'celsius') {
      convertedTemp = (inputTemp - 32) * (5 / 9);
      resultElement.textContent = inputTemp + '°F is ' + convertedTemp.toFixed(2) + '°C';
    } else if (selectUnit === 'fahrenheit') {
      convertedTemp = (inputTemp * (9 / 5)) + 32;
      resultElement.textContent = inputTemp + '°C is ' + convertedTemp.toFixed(2) + '°F';
    }
  }
  