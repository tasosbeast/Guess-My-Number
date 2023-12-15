// 'use strict';

// // Selecting elements

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// Handling again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});

// Handling click events
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    if (score > 0) {
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
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (Math.abs(guess - secretNumber) <= 5) {
    if (score > 0) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '🔥 Hot! Guess Lower';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '🔥 Hot! Guess Higher';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (Math.abs(guess - secretNumber) <= 10) {
    if (score > 0) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '🥵 Warm! Guess Lower';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '🥵 Warm! Guess Higher';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (Math.abs(guess - secretNumber) <= 15) {
    if (score > 0) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '😅 Cool! Guess Lower';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '😅 Cool! Guess Higher';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (Math.abs(guess - secretNumber) <= 20) {
    if (score > 0) {
      if (guess > secretNumber) {
        document.querySelector('.message').textContent = '🧊 Cold! Guess Lower';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '🧊 Cold! Guess Higher';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
