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
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngerdients){
    console.log(mainIngredient);
    console.log(otherIngerdients);
  },
};

// use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas' );

// --- Practical example ---
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'pasta');

// // 1) Destructuring

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza);
// console.log(risotto);
// console.log(otherFood);

// // --- Objects --- 
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function(...numbers){
//   let sum = 0;

//   for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }

//   console.log(sum);
// }
// add(2, 3);
// add(5, 6, 7, 8, 9);
// add(1, 3, 5, 3, 7, 8, 1);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
// console.log(...restaurant.mainMenu);

// // --- Copy array --- 
// const mainMenuCopy = [...restaurant.mainMenu];

// // --- join 2 arrays ---
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // --- Real word example --- 
// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [prompt(`Let's make pasta! Ingredient 1: `), prompt(`Ingredient 2: `), prompt(`Ingredient 3: `)];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // --- Objects --- 
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Giuseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log(`${...str} Schmedtmann`);

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const { 
//   name: restaurant_name, 
//   openingHours: hours, 
//   categories: tags 
// } = restaurant;

// console.log( restaurant_name, hours, tags );

// // --- Default values ---
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log( menu, starters );

// // --- Mutating variables --- 
// let a = 111;
// let b = 222; 
// const obj = { a: 23, b: 14, c: 13 };
// ({ a, b } = obj);
// console.log(a, b);

// // --- Nested Objects --- 
// const { sat: { open: op, close: cl } } = openingHours;
// console.log(op, cl);

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Central Bicutan, Block 152',
//   mainIndex: 1,
//   starterIndex: 1,
// });

// restaurant.orderDelivery({
//   address: 'Central Bicutan, Block 152',
//   mainIndex: 1,
// });

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