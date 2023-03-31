function isDivisibleBySeven(number) {
    return number % 7 === 0;
  }
  
  function handleClick() {
    const number = parseInt(document.getElementById("number-input").value);
    const resultDiv = document.getElementById("result");
    
    if (isDivisibleBySeven(number)) {
      resultDiv.textContent = `${number} is divisible by 7.`;
    } else {
      resultDiv.textContent = `${number} is not divisible by 7.`;
    }
  }
  
  document.getElementById("check-button").addEventListener("click", handleClick);
  