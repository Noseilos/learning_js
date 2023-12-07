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

// Call method
book.call(eurowings, 235, 'Williams');
console.log(eurowings)

const flightData = [129, 'James'];
// Apply method
book.apply(lufthansa, flightData);


book.call(eurowings, ...flightData)