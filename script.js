const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
}

function handleCorrectGuess() {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = true;

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
}

function handleWrongGuess(message) {
  if (score > 0) {
    document.querySelector('.message').textContent = message;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '😢 You lost the game!';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'red';
  }
}

document.querySelector('.again').addEventListener('click', resetGame);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    handleCorrectGuess();
  } else if (Math.abs(guess - secretNumber) <= 5) {
    handleWrongGuess(
      guess > secretNumber ? '🔥 Hot! Guess Lower' : '🔥 Hot! Guess Higher'
    );
  } else if (Math.abs(guess - secretNumber) <= 10) {
    handleWrongGuess(
      guess > secretNumber ? '🥵 Warm! Guess Lower' : '🥵 Warm! Guess Higher'
    );
  } else if (Math.abs(guess - secretNumber) <= 15) {
    handleWrongGuess(
      guess > secretNumber ? '😅 Cool! Guess Lower' : '😅 Cool! Guess Higher'
    );
  } else if (Math.abs(guess - secretNumber) <= 20) {
    handleWrongGuess(
      guess > secretNumber ? '🧊 Cold! Guess Lower' : '🧊 Cold! Guess Higher'
    );
  }
});
