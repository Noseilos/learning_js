'use strict';

// let age = 30;
// let oldAge = age;
// // old age is not affected of reassigning of value
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Jonas',
//     age: 21,
// };

// // friend variable points at the same address as object me
// const friend = me;
// // friend variable makes changes to the same address me points to
// friend.age = 32;

// console.log(`Friend: ${friend.age}`);
// // me object is affected of the change of age
// console.log(`Me: ${me.age}`);

// --- Primitive types ---
let lastName = 'Momoa';
let oldLastName = lastName;
lastName = 'Davidson';

console.log(`Last name: ${lastName}\nOld last name: ${oldLastName}`);

// --- Reference types ---
const jessica = {
    firstName: 'Jessica',
    lastName: 'Lawfer',
    age: 32,
}

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage: `, jessica);
console.log(`Married: `, marriedJessica);


// --- Copying objects ---

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Lawfer',
    age: 32,
    family: ['Alma', 'Greyner'],
}

// new object (shallow copy) is created in the heap stack and jessicaCopy points to that object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

// jessicaCopy and jessica2 still points at the same object property because object.assign only works on first level
jessicaCopy.family.push('Maria');

console.log(`Before marriage: `, jessica2);
console.log(`Married: `, jessicaCopy);

