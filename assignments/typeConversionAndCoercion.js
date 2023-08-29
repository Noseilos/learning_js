let firstEquation = '9' - '5'; // = 4 *correct
let secondEquation = '19' - '13' + '17'; // = 617 *correct
let thirdEquation = '19' - '13' + 17; // = 23 *correct
let fourthEquation = '123' < 57; // = NaN *false
let fifthEquation = 5 + 6 + '4' + 9 - 4 - 2; // = 1143 *correct

console.log(`1: ${firstEquation}`);
console.log(`2: ${secondEquation}`);
console.log(`3: ${thirdEquation}`);
console.log(`4: ${fourthEquation}`);
console.log(`5: ${fifthEquation}`);