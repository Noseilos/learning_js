'use strict';

// ---------------- START Selecting and Manipulating Elements ---------------- //

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉🎉 Correct Answer 🎉🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);

// ---------------- END Selecting and Manipulating Elements ---------------- //