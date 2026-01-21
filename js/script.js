let randomNumber = Math.floor(Math.random() * 100) + 1;
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const guesses = document.querySelector('.enter__guess');
const lastResult = document.querySelector('.last__result');
const lowOrHi = document.querySelector('.low__or__high');
const gameContainer = document.querySelector('.game__container')
let guessCount = 1;

function checkGuess() {
  var userGuess = Number(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = "Введённые числа: "
  }
  guesses.textContent += userGuess + "  ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Поздравляю, ты выиграл!";
    lastResult.style.background = "green"
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 7) {
    lastResult.textContent = "ИГРА ОКОНЧЕНА!!! Ты проиграл!"
    setGameOver();
  } else {
    lastResult.textContent = "Неправильно!";
    lastResult.style.background = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Нужно число больше"
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Нужно число меньше"
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus()
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Начать новую игру"
  gameContainer.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  var reset = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < reset.length; i++) {
    reset[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.background = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}