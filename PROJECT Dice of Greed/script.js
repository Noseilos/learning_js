'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Roll dice function
btnRoll.addEventListener('click', function(){
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;

    // Check if rolled 1: if true 
    if(dice !== 1){
        // add dice to current score
        currentScore += dice;
        currentScore0El.textContent = currentScore;

    } else {
        // switch to next player
        currentScore = 0;
        currentScore0El.textContent = currentScore;

    }
})