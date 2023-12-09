'use strict';

const runOnce = function(){
    console.log(`This function should run once`);
}

runOnce();

// Immediately Invoked Function Expression
(function(){
    console.log(`This function only run ONCE`);
}());

(() => console.log(`This function also only run ONCE`))();