function calculate() {
    const numbersInput = document.getElementById("numbers-input").value;
    const numbersArray = numbersInput.split(",");
    const numbers = numbersArray.map(Number);
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average = sum / numbers.length;
  
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("average").innerHTML = average.toFixed(2);
  
    document.getElementById("numbers-input").value = "";
  }
  