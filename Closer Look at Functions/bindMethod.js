'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flighNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`)
        this.bookings.push({flight: `${this.iataCode}${flighNum}`, name})
    }
}

lufthansa.book(234, 'Jason');
lufthansa.book(443, 'Smith');
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

const book = lufthansa.book;

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(201, 'Stef');

const bookEW292 = book.bind(eurowings, 292);
bookEW292('Jarred');
bookEW292('Harry');
bookEW292('Specter');

// With event listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100))

// Using functions returning functions

const addTax2 = rate => value => console.log(value + value * rate)
const addTaxFn = addTax2(0.21);
addTaxFn(100)

const addTax3 = function(rate){
    return function(value){
        console.log(value + value * rate)
    }
}
const addTaxFn2 = addTax2(0.15);
addTaxFn2(100)

