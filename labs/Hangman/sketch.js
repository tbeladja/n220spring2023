// List of words to guess
const words = [  'javascript',  'computer',  'programming',  'algorithm',  'internet',  'software',  'hardware',  'keyboard',  'monitor',  'mouse'];

let word; // The word to guess
let hiddenWord; // The word to display to user
let incorrectGuesses; // The number of incorrect guesses made
let gameOver; // Boolean indicating if game is over
let win; // Boolean indicating if user won the game

const canvasWidth = 400;
const canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  // Select a random word
  word = words[Math.floor(Math.random() * words.length)];
  hiddenWord = '_'.repeat(word.length);

  // Create buttons for each letter of the alphabet
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const buttonsDiv = document.getElementById('buttons');
  for (let letter of alphabet) {
    const btn = document.createElement('button');
    btn.innerHTML = letter;
    btn.addEventListener('click', () => {
      handleGuess(letter);
      btn.setAttribute('disabled', true);
    });
    buttonsDiv.appendChild(btn);
  }

  // Reset button
  const resetBtn = document.getElementById('reset');
  resetBtn.addEventListener('click', resetGame);

  // Initialize game state
  incorrectGuesses = 0;
  gameOver = false;
  win = false;
}

function draw() {
  // Draw the gallows
  background(220);
  strokeWeight(5);
  line(canvasWidth / 2 - 50, canvasHeight / 2 + 100, canvasWidth / 2 + 50, canvasHeight / 2 + 100);
  line(canvasWidth / 2 - 50, canvasHeight / 2 + 100, canvasWidth / 2 - 50, canvasHeight / 2 - 100);
  line(canvasWidth / 2 - 50, canvasHeight / 2 - 100, canvasWidth / 2 + 50, canvasHeight / 2 - 100);

  // Draw the man if there are incorrect guesses
  if (incorrectGuesses > 0) {
    noFill();
    strokeWeight(3);
    ellipse(canvasWidth / 2, canvasHeight / 2 - 80, 40, 40); // Head
  }
  if (incorrectGuesses > 1) {
    line(canvasWidth / 2, canvasHeight / 2 - 60, canvasWidth / 2, canvasHeight / 2 - 20); // Body
 
