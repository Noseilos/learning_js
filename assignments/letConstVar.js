'use strict';

let isIsland = true;
let language = 'Tagalog';
let population = 113900000;
const country = 'Philippines';

console.log('Is Island: ' + isIsland);
console.log('Population: ' + population);
console.log('Country: ' + country);
console.log('Language: ' + language);

country = 'Canada';
console.log('Country: ' + country); 
/* letConstVar.js:11 Uncaught TypeError: Assignment to constant variable.
at letConstVar.js:11:9 */