'use strict';

const bookings = []

const createBooking = function(flightNum = 'KH123', numPassengers = 1, price = 200 * numPassengers) {

    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 1;
    // flightNum = flightNum || 1;

    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('JG123', 2)
createBooking(undefined, 2)
