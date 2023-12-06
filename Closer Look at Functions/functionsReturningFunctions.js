'use strict';

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Joseph');

greet('Hello')('Jansen');

const greet2 = greeting => name => console.log(`${greeting} ${name}`)
const greeterTwo = greet2('Heya');
greeterTwo('Jerry');