'use strict';

// let age = 30;
// let oldAge = age;
// // old age is not affected of reassigning of value
// age = 31;

// console.log(age);
// console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 21,
};

// friend variable points at the same address as object me
const friend = me;
// friend variable makes changes to the same address me points to
friend.age = 32;

console.log(`Friend: ${friend.age}`);
// me object is affected of the change of age
console.log(`Me: ${me.age}`);