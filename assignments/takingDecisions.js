let language = 'Tagalog';
let population = 113900000;
const country = 'Philippines';
let continent = 'Asia';
let averageCountryPopulation = 33000000;
let populationDifference;

if (population > averageCountryPopulation){
    console.log(`${country}' population is above average`);
} else {
    populationDifference = averageCountryPopulation - population;
    console.log(`${country}' population is ${populationDifference} below average`);
}