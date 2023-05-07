let answer;
let attemptsLeft = 5;

function startGame() {
  // get user input
  const userInput = document.getElementById("userInput").value;

  // check if input is valid
  if (userInput < 1 || userInput > 100) {
    document.getElementById("result").innerHTML = "Please enter a number between 1 and 100.";
    return;
  }

  // set answer
  answer = userInput;

  // reset attempts
  attemptsLeft = 5;

  // start guessing
  guessNumber();
}

function guessNumber() {
  // get computer guess
  const guess = Math.floor(Math.random() * 100) + 1;

  // decrement attempts
  attemptsLeft--;

  // print computer's guess
  document.getElementById("result").innerHTML += `Attempt ${5-attemptsLeft}: Computer guessed ${guess}.<br>`;

  // check if computer guessed correctly
  if (guess == answer) {
    document.getElementById("result").innerHTML += "Computer guessed the number correctly.<br><br> Computer wins!";
    return;
  }

  // check if computer ran out of attempts
  if (attemptsLeft <= 0) {
    document.getElementById("result").innerHTML += `Computer ran out of attempts.  The answer was ${answer}.<br><br><b>User wins!</b>`;
    return;
  }

  // guess again
  setTimeout(guessNumber, 1000);
}
var index = 0;

function changeColors(){
    var colors = ["red","blue","yellow","aqua","black"];

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if(index > colors.length-1)
    index=0;
    }