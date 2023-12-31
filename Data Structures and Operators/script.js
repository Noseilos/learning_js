'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[2 + 4]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ time = '22:00', address, mainIndex = 0, starterIndex = 3 }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
  },

  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngerdients){
    console.log(mainIngredient);
    console.log(otherIngerdients);
  },
};

const game = {

  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer', 
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witzel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  data: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map 
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`)
};

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

// const restaurantMap = new Map();
// restaurantMap.set('name', 'Classico Italiano');
// restaurantMap.set(1, 'Firenze, Italy');
// console.log(restaurantMap.set(2, 'Lisbon, Portugal'));

// restaurantMap.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(restaurantMap.get('name'));
// console.log(restaurantMap.get(true));
// console.log(restaurantMap.get(1));

// const time = 21;
// console.log(restaurantMap.get(time < restaurantMap.get('close') && time >= restaurantMap.get('open')));

// console.log(restaurantMap.has('categories'));
// restaurantMap.delete(2);
// console.log(restaurantMap);
// // restaurantMap.clear();
// console.log(restaurantMap.size);

// const arr = [1, 2];
// restaurantMap.set(arr, 'Test');
// restaurantMap.set(document.querySelector('h1'), 'Heading');
// console.log(restaurantMap);

// const ordersSet = new Set([
//                             'Pasta', 
//                             'Pizza', 
//                             'Pizza', 
//                             'Risotto', 
//                             'Pasta', 
//                             'Pizza']);
// console.log(ordersSet);
// console.log(new Set('Jonas'))
// console.log(ordersSet.size);
// console.log(ordersSet.has('Bread'));
// console.log(ordersSet.has('Pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // ordersSet.clear();
// // console.log(ordersSet);

// for(const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const uniqueStaff = [...new Set(staff)];
// console.log(uniqueStaff);
// console.log(new Set(staff).size);
// console.log(new Set('jonaseguiron').size)

// ---------------- CODING CHALLENGE #2 ----------------
/* 

1. Loop over the game.score array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console.
3. Print 3 odds to the console, in a nice formatted way, exactly like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for
"draw"). HINT: Note how the odds and the game object have the same property names

BONUS: Create an object called 'scorers' which contains the name of the players
who scored as properties, and number of goals as the value. In this game it will
look like this.
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2,
      }


*/

// // ------------- SOLUTION -------------
// // 1. )
// for(const [i, element] of game.scored.entries()){
//   console.log(`Goal ${i + 1}: ${element}`);
// }

// // 2. )
// let average = 0;
// const odds = Object.values(game.odds);
// for(const odd of odds){
//   average += odd
// }

// average /= odds.length
// console.log(average);

// // 3. )
// for( const[team, odd] of Object.entries(game.odds) ){
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamStr}: ${odd}`);
// }

// console.log('--------- ITEM 1 ---------');
// for(const [i, element] of game.scored.entries()){
//   console.log(`Goal ${i + 1}: ${element}`);
// }

// const gameOdds = Object.entries(game.odds);

// console.log('\n--------- ITEM 2 ---------');
// let sum = 0;
// for(const [key, odd] of gameOdds){
//   sum += odd;
// }
// console.log(`Average odd: ${sum / gameOdds.length}`);

// console.log('\n--------- ITEM 3 ---------');
// for(const [key, odd] of gameOdds){
//   console.log(`Odd of ${game[key] ? 'victory ' + game[key] : 'draw'}: ${odd}`)
// }

// console.log('\n--------- BONUS ---------');
// const scorers = {};
// for(const [i, element] of game.scored.entries()){
//   scorers[element] = scorers[element] ? scorers[element] + 1 : 1;
// }

// console.log(scorers);


// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `

// for(const day of properties){
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for(const [key, { open, close }] of entries){
//   console.log( `On ${key}, we are open at ${open} and will close at ${close}` );
// }

// if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if(restaurant.openingHours.thu) console.log(restaurant.openingHours.thu.open);

// // with OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open); 
// console.log(restaurant.openingHours?.sat?.open);

// // EXAMPLE
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for(const day of days){
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we are open at ${open}`);
// }

// // Methods
// console.log( restaurant.order?.(0, 1) ?? 'Method does not exist' );
// console.log( restaurant.orderRisoto?.(0, 1) ?? 'Method does not exist' );

// // Arrays
// const users = [
//   {
//     name: 'Jonas',
//     email: 'jonas@email.io',
//   },
//   {
//     name: 'Grischuk',
//     email: 'grish@email.io',
//   }
// ]

// console.log(users[2]?.name ?? 'User array empty');

/* 

CODING CHALLENGE 

We're building a football betting app 

Suppose we get data from a web service about a certain game. In this challenge
we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players.
   For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one 
   array ('fieldPlayers') with all the remaining 10 field players.
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array 
   ('playersFinal') containing all the original team1 players plus 'Thiago', 'Coutinho' and
   'Perisic'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw'
   'team2').
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT
   an array) and prints each of them to the console, along with the number of goals who were
   scored (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more
   likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then call the
                 function again with the players from game.scored

*/

// const game = {

//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer', 
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witzel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   data: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// };

// const menu = [ ...restaurant.starterMenu, ...restaurant.mainMenu ];
// console.log(menu);

// for(const item of menu) console.log(item);

// for(const [i, element] of menu.entries()) console.log(`${i + 1}: ${element}`);

// // ------------ SOLUTION ------------
// // 1.)
// const [ players1, players2 ] = game.players;
// console.log(players1, players2);

// // 2.)
// const [ gk, ...fieldPlayers ] = players1;
// console.log(fieldPlayers);
// console.log(gk);

// // 3.)
// const allPlayers = [ ...players1, ...players2 ];
// console.log(allPlayers);

// // 4.)
// const players1Final = [ ...players1, 'Thiago', 'Coutinho', 'Perisic' ];
// console.log(players1Final);

// // 5.)
// const { odds: {team1, x: draw, team2} } = game;
// console.log( team1, draw, team2);

// // 6.)
// const printGoals = function(...players){
//   console.log(players.length);
// }

// printGoals(...game.scored);

// // 7.)
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

// const [ players1, players2 ] = [ game.players[0], game.players[1] ];
// console.log(`Team 1: `, players1); 
// console.log(`Team 2: `, players2); 

// const gk  = players1[0];
// const [ , ...fieldPlayers] = [ ...players1 ]
// console.log( 'Goal Keeper: ', gk);
// console.log( 'Field Players: ', fieldPlayers);

// const allPlayers = [ ...players1, ...players2 ];
// console.log( 'All Players: ', allPlayers);

// const playersFinal = [ ...players1, 'Thiago', 'Countinho', 'Perisic' ];
// console.log( 'Final Players: ', playersFinal);

// const { team1, x: draw, team2 } = game.odds;
// console.log( 'Game odds: ', team1, draw, team2);

// const printGoals = function(playerNames){

//   for(let i = 0; i < playerNames; i++) console.log(game.scored[i]);
//   console.log(playerNames);

// };

// printGoals(game.scored.length);

// console.log( (game.odds.team2 < game.odds.x) && (game.odds.team2 < game.odds.team1) && 'Team 2 wins' || 
//              (game.odds.x < game.odds.team1) && (game.odds.x < game.odds.team2) && 'Draw' ||
//              (game.odds.team1 < game.odds.x) && (game.odds.team1 < game.odds.team2) && 'Team 1 wins');

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 11;
// // rest2.numGuests ||= 11;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 11;
// rest2.numGuests ??= 11;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// // Nullish: null or undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----- AND -----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas' );

// // --- Practical example ---
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'pasta');

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