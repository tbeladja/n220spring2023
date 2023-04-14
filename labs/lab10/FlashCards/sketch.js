const answerDiv = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

function displayAnswer(event) {
  const answer = event.target.getAttribute("data-answer");
  answerDiv.textContent = `Your answer is: ${answer}`;
}

for (let button of buttons) {
  button.addEventListener("click", displayAnswer);
}
