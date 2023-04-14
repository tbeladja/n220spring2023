document.addEventListener('DOMContentLoaded', () => {
    const colorDiv = document.querySelector('#color-div');
    const rgbDiv = document.querySelector('#rgb-div');
    let redValue = 0;
    let greenValue = 0;
    let blueValue = 0;
  
    const updateColor = () => {
      const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
      colorDiv.style.backgroundColor = color;
      rgbDiv.textContent = color;
    };
  
    const updateValue = (color, amount) => {
      switch (color) {
        case 'red':
          redValue += parseInt(amount);
          redValue = Math.max(0, Math.min(255, redValue));
          break;
        case 'green':
          greenValue += parseInt(amount);
          greenValue = Math.max(0, Math.min(255, greenValue));
          break;
        case 'blue':
          blueValue += parseInt(amount);
          blueValue = Math.max(0, Math.min(255, blueValue));
          break;
      }
      updateColor();
    };
  
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      const color = button.dataset.color;
      const amount = button.dataset.amount;
      button.addEventListener('click', () => updateValue(color, amount));
    });
  
    updateColor();
  });
  