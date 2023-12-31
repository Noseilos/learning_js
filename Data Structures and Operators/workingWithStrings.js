'use strict';

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0])
// console.log(plane.length)
// console.log(airline.length)
// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4))
// console.log(airline.slice(4, 7))

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1))

// console.log(airline.slice(1, -1))

// const checkMiddleSeat = function(seat){
//     // B and E are middle seats

//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('You got the middle seat');
//     } else {
//         console.log('You got lucky')
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('1C');
// checkMiddleSeat('4E');


// --------------------------- PART 2 ---------------------------

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())

// // fix capitalization in name

// const passenger = 'doRaEMon';

// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // compairing email

// const email = 'hello@jeers.com';
// const loginEmail = 'HellO@jeers.com \n'

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail);

// const normalizeEmail = loginEmail.toLowerCase().trim()
// console.log(normalizeEmail);

// console.log(email === normalizeEmail);

// // replacing

// const pricePH = '₱288,987';
// const priceUS = pricePH.replace('₱', '$').replace(',', '.')
// console.log(priceUS)

// const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replaceAll(/door/g, 'gate'));

// // booleans 

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')){
//     console.log('Part of the Airbus family')
// }

// // practice exercise

// const checkBaggage = function(items){
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knife') || baggage.includes('gun')) {
//         console.log('You are not allowed on board')
//     } else {
//         console.log('Welcome aboard!')
//     }
// }

// checkBaggage('I have a laptop a Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and gun for protection');

// --------------------------- PART 3 ---------------------------

// split and join
console.log('a+very+nice+day'.split('+'));

const [firstName, lastName] = 'Jonas Eguiron'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName);

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];

    for(const n of names){
        namesUpper.push(n[0].toUpperCase() + n.slice(1))
    }

    console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas joseph serra eguiron');

// padding

const message = 'go to gate 25';
console.log(message.padStart(25, '+').padEnd(30, '+'));


const maskCreditCart = function(number){
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCart(3455672341));
console.log(maskCreditCart('3446671298'));

// repeat

const messageWeather = 'Bad weather, all departures are delayed... ';
console.log(messageWeather.repeat(5))

const planesInLine = function(n){
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(3);
planesInLine(7);