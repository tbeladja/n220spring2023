// Initialize variables for score and move options
let playerScore = 0;
let computerScore = 0;
const moves = ['rock', 'paper', 'scissors', 'guard'];
let buttons = [];
let scoreDisplay;

function setup() {
  createCanvas(400, 400);
  
  // Create buttons for move options
  for (let i = 0; i < moves.length; i++) {
    let button = createButton(moves[i]);
    button.position((i+1)*width/(moves.length+1) - 50, height/2 - 25);
    button.mousePressed(() => {
      playRound(moves[i]);
    });
    buttons.push(button);
  }
  
  // Create score display
  scoreDisplay = createElement('h2', `Player: ${playerScore} | Computer: ${computerScore}`);
  scoreDisplay.position(width/2 - 50, height/2 + 50);
}

function draw() {
  background(220);
}

function playRound(playerMove) {
  let computerMove = moves[Math.floor(Math.random()*moves.length)];
  
  // If player chose guard, subtract half point from score
  if (playerMove === 'guard') {
    playerScore -= 0.5;
  } else {
    // Otherwise, run RPS logic
    if (playerMove === 'rock' && computerMove === 'scissors' ||
        playerMove === 'paper' && computerMove === 'rock' ||
        playerMove === 'scissors' && computerMove === 'paper') {
      playerScore++;
    } else if (playerMove === 'rock' && computerMove === 'paper' ||
               playerMove === 'paper' && computerMove === 'scissors' ||
               playerMove === 'scissors' && computerMove === 'rock') {
      computerScore++;
    }
  }
  
  // Update score display
  scoreDisplay.html(`Player: ${playerScore} | Computer: ${computerScore}`);
  
  // Show results of round
  console.log(`You chose ${playerMove}, computer chose ${computerMove}.`);
}
