'use strict';

const flight = 'KH123';
const jonas = {
    name: 'Jonas Eguiron',
    passport: 1234557678
}

const checkIn = function(flightNum, passenger){
    flightNum = 'AH123';
    passenger.name = 'Mr.' + passenger.name;

    if (passenger.passport === 1234557678) {
        alert('Check In')
    } else {
        alert('Wrong passport')
    }
}

checkIn(flight, jonas);
console.log(flight, jonas);


const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000)
}

newPassport(jonas);
checkIn(flight, jonas);

