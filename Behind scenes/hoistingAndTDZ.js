'use strict';

// TDZ = Temporal Dead Zone, a zone where a variable is not accessible before declaration. (Upper part of the code before declaration of a variable)

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'techer';
const year = 1991

// Functions
console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b){
    return a + b;
}

const addExpr = function(a, b){
    return a + b;
}

const addArrow = (a, b) => a + b;

// Example
console.log(`numproducts var: ${numProducts}`)
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(){
    console.log('All products have been deleted!')
}

var x = 1;
let y = 1;
const z = 1;

console.log(`variable x: ${x === window.x}`);
console.log(`variable y: ${y === window.y}`);
console.log(`variable z: ${z === window.z}`);