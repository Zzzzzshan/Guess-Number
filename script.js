'use strict';
/*
//DOM : structured representation of html documents allows javascript to access html elements and style to manipulate them. change attributes in html and styles through javascript. DOm is the connection between the javascript and html.
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
*/
/*
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
//Working on the check button
document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value); Here we logged the value siply to the console

  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    // if we get no value from the user like an empty string, then if will check and show the message in the message section and we will do by selcting through the class.textContent in it and we will assign it different message
    displayMessage('⛔ No Number');

    //When Player Wins
  } else if (guess === secNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  /*
    //Don't Repeat Yourself formula:
    else if (guess !== secNumber) {
      if (score > 1) {
        document.querySelector('highscore').textContent =
          guess > secNumber ? 'Too High 📈' : 'Too Low 📉';
        score--;
        displayScore = score;
      } else {
        displayMessage (' 💥You Lost the Game !!');
        displayScore = 0;
      }
      if (guess > 20) {
        displayMessage ('⛔ Not a Valid Number');
      }
    }
    */

  //When guess is tooo high
  else if (guess > secNumber) {
    if (score > 1) {
      displayMessage('Too High 📈');
      score--;
      displayScore(score);
    } else {
      displayMessage(' 💥You Lost the Game !!');
      displayScore(0);
    }
    if (guess > 20) {
      displayMessage('⛔ Not a Valid Number');
    }

    // When guess is to low
  } else if (guess < secNumber) {
    if (score > 1) {
      displayMessage('Too Low 📉');
      score--;
      displayScore(score);
    } else {
      displayMessage(' You Lost the Game💥 !');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;

  displayMessage('Start Guessing ...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
