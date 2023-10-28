'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery: function({ time = '22:00', address, mainIndex = 0, starterIndex = 3 }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  }
};

 const {name, openingHours, categories} = restaurant;
 console.log(name, openingHours, categories);

 const { 
  name: restaurant_name, 
  openingHours: hours, 
  categories: tags 
} = restaurant;

console.log( restaurant_name, hours, tags );

// --- Default values ---
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log( menu, starters );

// --- Mutating variables --- 
let a = 111;
let b = 222; 
const obj = { a: 23, b: 14, c: 13 };
({ a, b } = obj);
console.log(a, b);

// --- Nested Objects --- 
const { sat: { open: op, close: cl } } = openingHours;
console.log(op, cl);

restaurant.orderDelivery({
  time: '20:30',
  address: 'Central Bicutan, Block 152',
  mainIndex: 1,
  starterIndex: 1,
});

restaurant.orderDelivery({
  address: 'Central Bicutan, Block 152',
  mainIndex: 1,
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// // --- Switching Variables ---
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // --- Receive 2 return values from a function ---
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 3, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);

// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// // --- Default values --- 
// const [p = 1, q = 2, r = 3] = [8, 9];
// console.log(p, q, r);