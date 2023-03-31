function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
  }
  
  function handleClick() {
    const randomNumber = generateRandomNumber();
    document.getElementById("result").textContent = `Random number: ${randomNumber}`;
  }
  
  document.getElementById("generate-button").addEventListener("click", handleClick);
  