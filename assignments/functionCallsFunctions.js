'use strict';

function percentageOfWorld(population){
    return (population / 7009000000) * 100 + '%';
};

function describePopulation(country, population){
    const populationPercent = percentageOfWorld(population);
    return `${country} has ${population} people which is about ${populationPercent}`;
};

console.log(describePopulation('Philippines', 109400000));
console.log(describePopulation('USA', 329064917));
console.log(describePopulation('Russia', 146200000));
