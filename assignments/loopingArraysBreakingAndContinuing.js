'use strict';

// const jonasArray = [
//     'Jonas',
//     'Eguiron',
//     21,
//     'student',
//     ['Aivy', 'Guia', 'Jiselle', 'Joshua'],
// ];
// const types = [];
// const year = [1979, 1981, 2002, 2003];
// const age = [];

// for(let i = 0 ; i < jonasArray.length ; i++){
//     // reading jonasArray
//     console.log(jonasArray[i]);

//     // filling types array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i])
// };

// for(let i = 0; i < year.length ; i++){
//     age.push(2023 - year[i]);
// };

// // continue and break
// console.log('--------------STRINGS ONLY--------------')
// for(let i = 0 ; i < jonasArray.length ; i++){
//     if (typeof jonasArray[i] !== 'string') continue;
//     console.log(jonasArray[i]);
// };

// // break
// console.log('--------------BREAK WITH NUMBER--------------')
// for(let i = 0 ; i < jonasArray.length ; i++){
//     if (typeof jonasArray[i] === 'number') continue;
//     console.log(jonasArray[i]);
// };

// console.log(types);
// console.log(age);

/*  
LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is
*/

const populations = [109400000, 146200000, 1410000, 5893518];
const percentages2 = [];

const percentageOfWorld1 = function(population){
    return `${((population / 7009000000) * 100).toFixed(2)}%`;
};

for(let i = 0 ; i < populations.length ; i++){
    percentages2.push(percentageOfWorld1(populations[i]));
};

console.log(percentages2);