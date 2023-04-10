var randomNumber = Math.floor(Math.random() * 100) + 1;

var guessInput = document.getElementById("guessInput");
var guessButton = document.getElementById("guessButton");
var result = document.getElementById("result");

guessButton.addEventListener("click", function() {
  var guess = parseInt(guessInput.value);
  if (guess === randomNumber) {
    result.textContent = "Congratulations! You guessed the number!";
  } else if (guess > randomNumber) {
    result.textContent = "Too high! Try again.";
  } else {
    result.textContent = "Too low! Try again.";
  }
});
