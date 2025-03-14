'use strict';

 document.querySelector('.message').textContent = 'game world';
// document.querySelector('.number').textContent = 2;
// document.querySelector('.score').textContent = 90;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
 let score = 20;
//  console.log(number);
 document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    // if (score > 1) 
    // score++;
    // document.querySelector('.score').textContent = score;

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
 
