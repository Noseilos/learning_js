'use strict';

// const jonasArray = [
//     'Jonas',
//     'Eguiron',
//     21,
//     'student',
//     ['Aivy', 'Guia', 'Jiselle', 'Joshua'],
// ];

// for(let i = jonasArray.length ; i >= 0 ; i--){
//     // reading jonasArray
//     console.log(jonasArray[i]);
// };

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`Starting exercise ${exercise}`)
//     for(let rep = 1; rep < 6; rep++){
//         console.log(`repitition ${rep}`)
//     }
// }

/*
LECTURE: Looping Backwards and Loops in Loops
1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire 
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
worry if it's too difficult for you! But you can still try to figure this out anyway � 
*/

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for(let country = 0; country < listOfNeighbours.length; country++){
    console.log(`Country: ${country + 1}`);
    for(let neighbour = 0; neighbour < listOfNeighbours[country].length; neighbour++){
        console.log(`Neighbour: ${listOfNeighbours[country][neighbour]}`);
    };
};