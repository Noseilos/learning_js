'use strict';

var firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    birthYear: 2002,

    calcAge: function(){
        // console.log(this);
        // console.log(2037 - this.year);

        // ---Solution 1---
        // // setting 'this' keyword to a variable for scope chain, can be used by another function 
        // const self = this;
        // const isMillenial = function(){
        //     // 'this' keyword does not belong to any object and is just a regular function call
        //     // console.log(`Millenial: ${this.birthYear >= 1981 && this.birthYear <= 1996}`);

        //     // used self variable pointing to the object jonas
        //     console.log(`Millenial: ${self.birthYear >= 1981 && self.birthYear <= 1996}`);
        // }
        // isMillenial();

        // ---Solution 2---
        const isMillenial = () => {
            // arrow function inherits 'this' keyword from parent scope
            console.log(`Millenial: ${this.birthYear >= 1981 && this.birthYear <= 1996}`);
        }
        isMillenial();
    },

    // Arrow function does not have its own 'this' keyword
    greet: () => {
        console.log(`Hello I am ${this.firstName}`);
        console.log(this);
    },
}

jonas.greet();
// Similar to upper code--
console.log(this.firstName);

jonas.calcAge();

// --- Arguments keyword --- 

const addExpr = function(a, b){
    console.log(arguments);
    return a + b;
}

addExpr(2, 3, 4 ,6, 8);

const addArrow = (a, b) => {
    // arrow functions does not get an 'arguments' keyword
    console.log(arguments)
    return a + b;
};
