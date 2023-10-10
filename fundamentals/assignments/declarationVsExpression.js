'use strict';

//function declaration

const philippines = percentageOfWorld1(113900000);
const china = percentageOfWorld1(1412000000);
const usa = percentageOfWorld1(331900000);

function percentageOfWorld1(population){
    return (population / 7009000000) * 100 + '%';
};

console.log(philippines);
console.log(china);
console.log(usa);

//function expression

const percentageOfWorld2 = function (population){
    return (population / 7009000000) * 100 + '%';
};

const philippines2 = percentageOfWorld2(113900000);
const china2 = percentageOfWorld2(1412000000);
const usa2 = percentageOfWorld2(331900000);

console.log(`PH2: ${philippines2}`);
console.log(`CH2: ${china2}`);
console.log(`US2: ${usa2}`);
