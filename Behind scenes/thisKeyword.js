'use strict';

// Logs the window, a global object
console.log(this);

// const calcAge = function(birthYear){
//     console.log(2023 - birthYear);
//     // logs undefined because the call of functions does not belong to any object
//     console.log(this);
// }

// calcAge(2002);

// const calcAge = birthYear => {
//     console.log(2023 - birthYear);
//     // logs window because arrow function does not have 'this' keyword and uses parent 'this' keyword
//     console.log(this);
// }

// calcAge(2003);

const jonas = {
    birthYear: 2002,
    calcAge: function(){
        // 'this' keyword now belongs to the object that calls the function
        console.log(this);
        console.log(2050 - this.birthYear);
    }
}

// jonas.calcAge();

const grace = {
    birthYear: 2000,
}

// method borrowing
grace.calcAge = jonas.calcAge;

grace.calcAge();

const f = jonas.calcAge;
// regular function call and does not belong to any object
f();