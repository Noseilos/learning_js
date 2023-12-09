'use strict';

const countStudents = function(){
    let student = 0;

    return function(){
        student++
        console.log(`${student} student registered`)
    }
}

console.dir(countStudents)
// Look for [[scope]] in console

const registrar = countStudents();

registrar();
registrar();
registrar();

console.dir(registrar);
// Look for [[scope]] in console
