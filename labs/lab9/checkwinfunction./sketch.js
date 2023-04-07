function checkWin() {
    let input = document.getElementById("input").value;
    let values = input.split(",");
    
    if (hasWin(values)) {
      document.getElementById("result").innerText = "Winner";
    } else {
      document.getElementById("result").innerText = "Not winner";
    }
  }
  
  function hasWin(values) {
    let consecutiveOnes = 0;
    
    for (let i = 0; i < values.length; i++) {
      if (values[i] === "1") {
        consecutiveOnes++;
        if (consecutiveOnes === 3) {
          return true;
        }
      } else {
        consecutiveOnes = 0;
      }
    }
    
    return false;
  }
  