function calculate() {
    const billInput = document.getElementById('bill');
    const bill = parseFloat(billInput.value);
  
    if (isNaN(bill)) {
      console.log("Invalid input. Please enter a number.");
      return;
    }
  
    const tipAmount = bill * 0.15;
    const totalAmount = bill + tipAmount;
  
    console.log(`Tip: $${tipAmount.toFixed(2)}. Total: $${totalAmount.toFixed(2)}.`);
  }
  