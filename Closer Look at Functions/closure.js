'use strict';

// const countStudents = function(){
//     let student = 0;

//     return function(){
//         student++
//         console.log(`${student} student registered`)
//     }
// }

// console.dir(countStudents)
// // Look for [[scope]] in console

// const registrar = countStudents();

// registrar();
// registrar();
// registrar();

// console.dir(registrar);
// // Look for [[scope]] in console


// ------------------- CONTINUATION -------------------

let f;

const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}


const h = function(){
    const b = 123;
    f = function(){
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function

h();
f();
console.dir(f);

// Example 2 ------

const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(180, 3);