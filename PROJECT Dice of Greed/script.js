'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');


// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');
    
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}
init();

const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Roll dice function
btnRoll.addEventListener('click', function(){
    if(playing){
        // Generate random number
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `./images/dice-${dice}.png`;

        // Check if rolled 1: if true 
        if(dice !== 1){
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // switch to next player
            switchPlayer();

        }
        console.log(`Active: ${activePlayer}`)
    }
});

// Hold points function
btnHold.addEventListener('click', function(){
    if(playing){
        // Add score to active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // Check if score is >= 100
        if(scores[activePlayer] >= 10){
            // finish the game
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init)