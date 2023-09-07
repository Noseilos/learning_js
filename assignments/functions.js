'use strict';

let country;
let population;
let capitalCity;

function describeCountry(country, population, capitalCity){
    const nationState = `${country} has ${population} people and its capital city is ${capitalCity}`;
    return nationState;
}

const phState = describeCountry('Philippines', '119 million', 'Manila');
console.log(phState);

const chState = describeCountry('China', '100 million', 'Beijing');
console.log(chState);

const taState = describeCountry('Taiwan', '15 million', 'Taipei');
console.log(taState);