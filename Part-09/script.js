"use strict";
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address
  ) {
    console.log(
      `Order received!  ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole , 21",
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: "Via del sole , 21",
  // mainIndex: 2,
  starterIndex: 1,
});

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variable  :
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i ,, j] = nested;
// console.log(i,j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log("p,q,r : ", p, q, r);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
console.log(restaurant);

// Default Value :

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating Variable :

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects :

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/
// The Spread operator : Spread Operator – values ko phailata hai
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1,2, ...arr];
console.log(newArr);


console.log(...newArr);
console.log(1,2,7,8,9);

{
  const nameArr = 'Chandan';
 const myName = [...nameArr , "" , "Tiwari"]
 console.log(myName);
}

// Rest operator : Rest Operator – bachi hui values collect karta hai

{
  const arr = [1 ,2 , ...[3,4]];
  const [a, b, ...other] = [1,2,3,4,5];
  console.log(a,b,other);
}


// Use Any Data Type , Return Any Data Type , [ AND , OR , NOT , NULL];
// {&& , || , ! , ??} ;

 




// 🏆 Coding Challenge #01 : Football Betting App (Destructuring, Spread, Rest)

// Game object with teams, players, score, date and odds
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
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski' , 'Gnarby' , 'Lewandowski' , 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1 : players array ko destructure krna aur players1 & players2 banane
const [players1 , players2] = game.players;
console.log(players1 , players2);

// 2 : players1 ke andar se gk (goalkeeper) alag krna aur baki sare ko fieldPlayers array me rakhna
const[gk , ...fildPlayers] = players1;
console.log(`Players1 : ${gk} ${fildPlayers}`);

// 3 : dono team ke sare players ko ek array me combine krna (allPlayers)
const allPlayers = [...players1,...players2];
console.log(allPlayers);

// 4 : players1 ke sath 3 extra substitute players add krke playersFinal banana
const playersFinal = [ ...players1, 'Thiago', 'Coutinho' , 'Periscic'];

// 5 : odds object se team1, team2 aur draw (x) ko destructure krna
const {odds : {team1, x: draw, team2}}= game;
console.log(team1 ,draw ,team2);

// 6 :  printGoals function banaya jo unlimited players accept krke 
// unko print karega aur kitne goals hue wo count karega
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies','Muller','Lewandowski', 'Kimmich');
printGoals('Davies','Muller');
printGoals(...game.scored);

// 7 :  condition ke through check karna ki kaunsi team jeetne ke jyada chance hai 
// (jo odds value kam hogi uske jeetne ke chances jyada hote hain)
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 1 is more likely to win');


// Looping arrays : The for of loop
for(var i of players1){
  console.log(`Using var keyWord ${i}`);
}
for(let i of players1){
  console.log(`Using let keyWord ${i}`);
}

for(const i in players1){
  console.log(i.length);
}
// .entries() = array ke andar se index + value pair nikal ke deta h.

for(const item in players1.entries()){
  console.log(item);
}

// Enhanced object literals : short, clean aur dynamic tarika se object banate hai.

const player = "Messi";
const goals = 91;

const footballer = {
  player,      // shorthand
  goals,       // shorthand
  info() {     // method shorthand
    console.log(`${this.player} scored ${this.goals} goals in a season!`);
  },
  ["team" + "Name"]: "Barcelona",   // computed property
};

console.log(footballer);
/*
{
  player: 'Messi',
  goals: 91,
  info: [Function: info],
  teamName: 'Barcelona'
}
*/
/*
footballer.info(); 
// Messi scored 91 goals in a season!

//  optionalChaining : 

// Example object
const user = {
  name: "Chandan",
  job: {
    title: "Web Designer",
    skills: ["HTML", "CSS", "JS"],
  },
};

// 1️⃣ Normal property access
console.log(user.name); // ✅ Chandan

// 2️⃣ Nested property access safely
console.log(user.job?.title);   // ✅ Web Designer
console.log(user.address?.city); // ✅ undefined (error nahi aayega)

// 3️⃣ Array ke sath optional chaining
console.log(user.job.skills?.[0]); // ✅ HTML
console.log(user.job.hobbies?.[1]); // ✅ undefined

// 4️⃣ Optional methods
const admin = {
  greet() {
    console.log("Hello Admin 👋");
  },
};

admin.greet?.();  // ✅ "Hello Admin 👋"
admin.logout?.(); // ✅ undefined (error nahi)

// 5️⃣ Real life use case (API ya dynamic data)
const apiResponse = {
  user: {
    profile: {
      email: "chandan@example.com"
    }
  }
};

console.log(apiResponse.user?.profile?.email);  // ✅ chandan@example.com
console.log(apiResponse.user?.account?.upi);    // ✅ undefined (safe)


// Looping object :  Objects Keys, Value, And Entries : 

// Object.keys()  sirf keys (property names) deta hai
// Object.values()  sirf values deta hai
// Object.entries()  key + value pair deta hai
*/

//  loopingObjects.js
/*
// Example object
const user = {
  name: "Chandan",
  age: 23,
  job: "Web Designer",
};

// 1️⃣ Object.keys()  -> keys return karega
console.log("Object.keys:");
console.log(Object.keys(user));  
// [ 'name', 'age', 'job' ]

for (const key of Object.keys(user)) {
  console.log(key);
}
*/
/*
name
age
job
*/
/*
// 2️ Object.values()  -> values return karega
console.log("\n Object.values:");
console.log(Object.values(user));  
// [ 'Chandan', 23, 'Web Designer' ]

for (const value of Object.values(user)) {
  console.log(value);
}
/*
Chandan
23
Web Designer


// 3️ Object.entries()  -> [key, value] pair return karega
console.log("\n Object.entries:");
console.log(Object.entries(user));
/*
[
  [ 'name', 'Chandan' ],
  [ 'age', 23 ],
  [ 'job', 'Web Designer' ]
]

for (const [key, value] of Object.entries(user)) {
  console.log(`${key} : ${value}`);
}

name : Chandan
age : 23
job : Web Designer


//  Coding Challenge #02 :

// Game object with teams, players, score, date and odds
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1 :
for (const [i, player] of game.scored.entries()) {
  console.log(`Gole  ${i + 1} : ${player}`);
}

// 2 :
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//  3 :
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team , odd);
  const teamStr = team === "x" ? "drow" : `victory ${game[team]}`;
  console.log(`Odd  of ${teamStr} ${odd}`);
}

// Set :

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(new Set("Jonas"));
console.log(ordersSet.size);
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
console.log(ordersSet[0]);

for (const order of ordersSet) console.log(order);

// Example  :

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("jonasschmedtmann").size);


// Maps-Fundamental :

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze , Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);

console.log(rest.size);
console.log(rest);

console.log(rest.get(arr));

// MAPS : ITERATION

const quection = new Map([
  ["quection", "What is the best promming language in the world..?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);

console.log(quection);

// convert object to map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

for(const [key, value] of quection){
  if(typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(quection.get('correct') === answer);

// convert map to array 

console.log([...quection]);

*/

// Coding Challenge #03


const gameEvents = new Map([
  [17 , 'GOAL'],
  [36 , 'Substitution'],
  [47 , 'GOAL'],
  [61 , 'Substitution'],
  [64 , 'Yellow card'],
  [69 , 'Red card'],
  [70 , 'Substitution'],
  [72 , 'Substitution'],
  [76 , 'GOAL'],
  [80 , 'GOAL'],
  [92 , 'Yellow card'],
]);

// 1 : 
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2 : 
gameEvents.delete(64);

// 3 ;
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4 : 
const time = [...gameEvents.keys()].pop();
console.log(time);
// 5 : 
for(const [min, event] of gameEvents){
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min} : ${event}`);
}

// Working with String  : Part 01 

const airline = `TAP Air Portugal`;
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));


console.log(airline.slice(4));
console.log(airline.slice(4 , 7));



console.log(airline.slice(0 , airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1 , -1));

const checkMiddleSeat = function (seat) {
  // B AND E ARE MIDDLE SEATS
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') console.log('You get the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('118');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));


console.log(typeof new String('jonas').slice(1));

// more string method ;



// Coding Challenge : 04 ;

