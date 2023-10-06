'use strict';

// for(let rep = 1 ; rep <=10 ; rep++){
//     console.log(`Lifting repition ${rep}`);
// };

// let rep = 1;

// while(rep <= 10){
//     console.log(`Lifting repition ${rep}`);
//     rep++;
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6){
//         console.log(`You rolled a ${dice}! Loop ends`);
//     }
// }

/* 
LECTURE: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

const populations = [109400000, 146200000, 1410000, 5893518];
const percentages3 = [];
const percentages2 = [];

const percentageOfWorld1 = function(population){
    return `${((population / 7009000000) * 100).toFixed(2)}%`;
};

let i = 0;
while(i < populations.length){
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages3);