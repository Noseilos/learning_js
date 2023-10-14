'use strict';

// ---------------- START Selecting and Manipulating Elements ---------------- //

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉🎉 Correct Answer 🎉🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

// ---------------- END Selecting and Manipulating Elements ---------------- // 

// ---------------- START Handling Click Events ---------------- //

const showGuessValue = function(){
    let guess = Number(document.querySelector('.guess').value)

    if(!guess){
        console.log(`⛔⛔ No Number ⛔⛔`);
    } else {
        console.log(`Value: ${guess}\nType: ${typeof(guess)}`);
    }

}

document.querySelector('.check').addEventListener('click', showGuessValue);

// ---------------- END Handling Click Events ---------------- //
