'use strict';

function calcAge(birthYear) {
    const age = 2023 - birthYear;

    // variable lookup --
    // console.log(firstName);

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        
        if(birthYear >= 1981 && birthYear <= 1996){
            // firstName from global scope will not be read--
            const firstName = 'Steven';
            var millenial = true;
            const str = `\nYou are a millenial, ${firstName}`;
            console.log(str)

            function addition(a, b){
                return a + b;
            }
        } else {
            // firstName from global scope will not be read--
            const firstName = 'Steven';
            var millenial = false;
            const str = `You are a not millenial, ${firstName}`;
            console.log(str)
            output = 'Reassigned output variable';
        }

        // Cannot access const or let variable, they are block scope--
        // console.log(str)
        // Can access var type variable, as long as its inside same function--
        console.log(`Millenial: ${millenial}`);

        // Reassigned output value, works because it is not redeclared--
        console.log(output);
        
        // Cannot access addition function, it is a block scope--
        // console.log(`Addition: ${addition(2, 3)}`);
    }
    printAge();

    return age;
}

const firstName = "Jonas"
calcAge(2002);
// Outer scope cannot access variable inside inner scope, only vice versa--
// console.log(age);
// printAge();
