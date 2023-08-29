let language = 'Tagalog';
let population = 113900000;
const country = 'Philippines';
let continent = 'Asia';

let halfPopulation = population / 2;

console.log('Half Population: ' + halfPopulation);

population += 1;
console.log('Half Population + 1: ' + population);

let finlandPopulation = 6000000;
console.log('Philippines have more people than Finland: ' + (population > finlandPopulation));

let averageCountryPopulation = 33000000;
console.log('Philippines have less people than the average country: ' + (population < averageCountryPopulation));

let description = country +' is in '+ continent +' and its '+ population +' people speaks '+ language;
console.log(description);