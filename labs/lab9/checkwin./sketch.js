function checkWin() {
    let input = document.getElementById("input").value;
    let values = input.split(",");
    let consecutiveOnes = 0;
    
    for (let i = 0; i < values.length; i++) {
      if (values[i] === "1") {
        consecutiveOnes++;
        if (consecutiveOnes === 3) {
          document.getElementById("result").innerText = "Winner";
          return;
        }
      } else {
        consecutiveOnes = 0;
      }
    }
    
    document.getElementById("result").innerText = "Not winner";
  }
  