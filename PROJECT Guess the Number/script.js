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

// const showGuessValue = function(){
//     let guess = Number(document.querySelector('.guess').value)

//     if(!guess){
//         console.log(`⛔⛔ No Number ⛔⛔`);
//     } else {
//         console.log(`Value: ${guess}\nType: ${typeof(guess)}`);
//     }

// }

// document.querySelector('.check').addEventListener('click', showGuessValue);

// ---------------- END Handling Click Events ---------------- //

// ---------------- START Implementing the Game Logic ---------------- //

// let newNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// const evaluateGuess = function(){
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, newNumber);

//     if (!guess || guess === 0) {

//         document.querySelector('.message').textContent = `⛔⛔ Enter Number ⛔⛔`;
//         score--;
//         document.querySelector('.score').textContent = score;
//         if (score === 0){
//             document.querySelector('.message').textContent = `You Lost 🥲`;
//         } else {
            
//         }

//     } else if (guess < newNumber){

//         if(newNumber - guess >= 5){
//             if (score === 0){
//                 document.querySelector('.message').textContent = `You Lost 🥲`;
//             } else {
//                 document.querySelector('.message').textContent = `Too Low! Guess Higher`;
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//         } else {
//             if (score === 0){
//                 document.querySelector('.message').textContent = `You Lost 🥲`;
//             } else {
//                 document.querySelector('.message').textContent = `Guess Higher`;
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//         }
        

//     } else if (guess > newNumber) {

//         if(guess - newNumber >= 5){
//             if (score === 0){
//                 document.querySelector('.message').textContent = `You Lost 🥲`;
//             } else {
//                 document.querySelector('.message').textContent = `Too High! Guess Lower`;
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//         } else {
//             if (score === 0){
//                 document.querySelector('.message').textContent = `You Lost 🥲`;
//             } else {
//                 document.querySelector('.message').textContent = `Guess Lower`;
//                 score--;
//                 document.querySelector('.score').textContent = score;
//             }
//         }

//     } else if (guess === newNumber) {

//         document.querySelector('.message').textContent = `🎉🎉 You Guessed It! 🎉🎉`;
//         document.querySelector('.number').textContent = newNumber;

//     }
// }

// document.querySelector('.check').addEventListener('click', evaluateGuess);

// ---------------- END Implementing the Game Logic ---------------- //

// ---------------- START Manipulating CSS Styles ---------------- //

let newNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setBackgroundColor = function(color) {
    document.querySelector('body').style.backgroundColor = color
}

const setMessage = function(message){
    document.querySelector('.message').textContent = message;
}

const setScore = function(sc){
    document.querySelector('.score').textContent = sc;
}

const evaluateGuess = function(){
    const guess = Number(document.querySelector('.guess').value);

    if(score == 0){

        setMessage(`Click Again to Restart`);
        setBackgroundColor('#4a0a0a');
        console.log(guess, newNumber);

    } else {

        if (!guess || guess === 0) {

            setMessage(`⛔⛔ Enter Number ⛔⛔`);
            score--;
            setScore(score);

        } else if (guess !== newNumber){

            if (guess < newNumber){
                if(newNumber - guess >= 5){
                    if (score === 0){
                        setMessage(`You Lost 🥲`);
                    } else {
                        setMessage(`Too Low! Guess Higher`);
                        score--;
                        setScore(score);
                    }
                } else {
                    if (score === 0){
                        setMessage(`You Lost 🥲`);
                    } else {
                        setMessage(`Guess Higher`);
                        score--;
                        setScore(score);
                    }
                }
            }

            if (guess > newNumber){
                if(guess - newNumber >= 5){
                    if (score === 0){
                        setMessage(`You Lost 🥲`);
                    } else {
                        setMessage(`Too High! Guess Lower`);
                        score--;
                        setScore(score);
                    }
                } else {
                    if (score === 0){
                        setMessage(`You Lost 🥲`);
                    } else {
                        setMessage(`Guess Lower`);
                        score--;
                        setScore(score);
                    }
                }
            }

        } else if (guess === newNumber) {

            setBackgroundColor('#64CCC5');
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').style.borderRadius = '20%';
            setMessage`🎉🎉 You Guessed It! 🎉🎉`;
            document.querySelector('.number').textContent = newNumber;

            if (score > highScore){
                highScore = score
                document.querySelector('.highscore').textContent = highScore;
            }
        }
    }
}

const restart = function() {
    newNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    setBackgroundColor('#222');
    document.querySelector('.number').style.borderRadius = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    setMessage('Start guessing...');
    setScore(score);
    document.querySelector('.guess').value = '';
}

document.querySelector('.check').addEventListener('click', evaluateGuess);
document.querySelector('.again').addEventListener('click', restart)

// ---------------- END Manipulating CSS Styles ---------------- //
