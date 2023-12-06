'use strict';

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

// higher order function
const transformer = function(str, fn){
    console.log(`Original String: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Method called: ${fn.name}`)
}

transformer('jonas eguiron', upperFirstWord);
transformer('jonas eguiron', oneWord);

const highFive = function(){
    console.log('🤚');
}

document.body.addEventListener('click', highFive);

['Jonas', 'Joshua', 'Aivy'].forEach(highFive)