'use strict';

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Eguiron',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

//     calcAge: function(){
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     }
// }

// if(jonas.hasDriversLicense){
//     console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has a drivers license`);
// } else {
//     console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has no drivers license`);
// }

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method 
will log a string to the console, similar to the string logged in the previous 
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This 
method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if 
there are. Use the ternary operator to set the property.
*/

const myCountry = {
    country: 'Philippines',
    capital: 'Manila',
    language: 'Tagalog',
    population: 109040000,
    neighbours: ['China', 'USA', 'Taiwan'],

    describe: function(){
        return `${this.country} has ${this.population} ${this.language}-speaking people, ${this.neighbours.length > 0 ? 'has ' + this.neighbours.length + ' neighbouring countries' : 'is an island' } and a capital called ${this.capital}`
    }
};

console.log(myCountry.describe());