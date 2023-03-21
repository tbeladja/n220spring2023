//select the button element by its ID using the `document.getElementById()` method,
//store it in a variable called `button`.
const button = document.getElementById('myButton');

//initialize a variable called clickCount to keep track of how many times the button has been clicked.
let clickCount = 0;

//add an event listener to the button using the addEventListener() method.
//listener is triggered whenever the button is clicked.
button.addEventListener('click', () => {

//inside the listener,increment the `clickCount` variable by 1 using the increment operator (`++`).
clickCount ++;

//if clickcount eqauals 5, change the button's text to show the number of times it is clicked 
  if (clickCount === 5) {
    button.textContent = `Clicked ${clickCount} times`;
  }
});
