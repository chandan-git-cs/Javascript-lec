/*

'use strict';

let hasDriversLincense = false;
const passTest = true;

if(passTest) hasDriversLincense = true;


if(hasDriversLincense) console.log('I can try');

// myName = "abcd";
// console.log(myName); // myName is not defined


let myname = "mnop";
console.log(myname);



// Function: A block of code designed to perform a specific task, can be reused


function logger() {
    console.log('My name is Jonas');
}

// Calling the function

logger();
logger();
logger();

function fruitProcessor(apples , oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}
// fruitProcessor(5,8);
const appleJuice = fruitProcessor (10,8);
console.log(appleJuice);

const appleOreageJuice = fruitProcessor(9,7);
console.log(appleOreageJuice);


// Function Declaration

function calcAge1(birthYeah){
    return 2037 - birthYeah;
}


// Function Expression: function ko variable me store krke use krna


const age1 = calcAge1(1991);
console.log(age1);

const calcAge2 = function(birthYeah){
    return 2037 - birthYeah;
}

const age2 = calcAge2(1991);

console.log(age1,age2);



// Arrow Function: A shorter way to write functions using =>, does not have its own 'this' keyword


const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = birthYeah => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991 , 'Jonas'));
console.log(yearsUntilRetirement(1980 , 'Bob'));


// Function Calling Other Function


function cutFruitPieces(fruit){
    return fruit * 4 ;
}
function fruitProcessor(apples , oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
    return juice;
}
console.log(fruitProcessor(2,4));


// Reviewing Function

 const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
 }


const yearsUntilRetirement = function (birthYeah , firstName) {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;

   if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
   }else{
       console.log(`${firstName} has already retired`);
    return -1;
 }
}
 console.log(yearsUntilRetirement(1991 , 'Jonas'));
 console.log(yearsUntilRetirement(1970 , 'Mike'));

 

// Coding - Challing : 01
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 01
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

*/

/*
// Array: ek list jisme multiple items ek hi variable me store hote h, index se access krte h (0 se start)

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "piter";

const friends = ["Michael" , "Steven" , "Peter"];
console.log(friends);

const y = new Array(1991 , 1984 , 2008 , 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends.length-1);
console.log(friends[friends.length-1]);

friends[2] = "jay";
console.log(friends);

const firstName = 'Jonas';

const josan = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher' , friends];

console.log(josan);
console.log(josan.length);


// Exercise

const calcAge = function(birthYeah){
    return 2037 - birthYeah;
}

const years = [ 1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years));

 const age1 = calcAge(years[0]);
 const age2 = calcAge(years[1]);
 const age3 = calcAge(years[years.length-1]);

 console.log(age1 , age2 , age3);

 const ages = [calcAge(years[0]),calcAge(years[1]), calcAge(years[years.length-1])];

 console.log(ages);


 

 // Basic Array Operations

const friends = ["Michael" , "Steven" , "Peter"];

// Add element

console.log(friends);
const newLength = friends.push('lastElement');
console.log(newLength);

friends.unshift('firstElement');
console.log(friends);

// Remove Element

friends.pop(); // Remove array of the last element
console.log(friends);

const popped = friends.pop(); // Remove array of the last element and show remove element
console.log("popped : ",popped);
console.log(friends);

friends.shift()  // Remove first element in array 
console.log(friends);


// index of element

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bod'));


friends.push(23);
console.log(friends);
console.log(friends.includes('Steven')); // Search method in a array
console.log(friends.includes('Bob'));
console.log(friends.includes(23));
 
if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}

// Coding - Challing : 02

const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [ 125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1], calcTip(bills[2]))];

const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]];

console.log(bills , tips , totals);


// Objects: key-value ka group, jisme ek cheez ke saare info store kr skte h

// key in objecrt
const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ["Michael" , "Steven" , "Peter"]
]

console.log(jonasArray);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job : 'teacher',
    friends: ["Michael" , "Steven" , "Peter"]
};

console.log(jonas);
console.log(Object.keys(jonas));
console.log(Object.values(jonas));

const s1 =  console.log(jonas.age);// Dot notation cannot access keys with spaces (use bracket notation instead)

const s2 =  console.log(jonas['age']);// Bracket notation can access keys with spaces or special characters

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want do know about Jonas? Choose between firstName, lasrName, age, job, and friends');

if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lasrName, age, job, and friends');
}
 

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


// object method
{
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job : 'teacher',
    friends: ["Michael" , "Steven" , "Peter"],
    hasDriversLicense: true,

    calcAge: function(birthYeah){
        console.log(this);
        return 2037 - this.birthYeah;
    }
};


console.log(jonas.calcAge(1991));
console.log(jonas['calcAge'](1991));



}



// Coding - Challing : 03

const mark = {
    fullName : "Mark Miller",
    mass: 70,
    height: 1.69,
    calaBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};


const john = {
     fullName : "John Smith",
    mass: 92,
    height: 1.95,
    calaBMI: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calaBMI();
john.calaBMI();

console.log(mark.bmi , john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher then (${john.fullName}'s BMI (${john.bmi}))`);
}else if(john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher then (${mark.fullName}'s BMI (${mark.bmi}))`);
}

// Loop statement: Repeats a block of code multiple times until a condition is false


console.log("Lifting weights repetition - 01");
console.log("Lifting weights repetition - 02");
console.log("Lifting weights repetition - 03");
console.log("Lifting weights repetition - 04");
console.log("Lifting weights repetition - 05");
console.log("Lifting weights repetition - 06");
console.log("Lifting weights repetition - 07");
console.log("Lifting weights repetition - 08");
console.log("Lifting weights repetition - 09");

for(let rep = 1; rep <= 100; rep++){
    console.log(`Lifting weights repetition ${rep}`);
}


const jonasArray = [
    'Jonas',
    'Schmedtman',
    2037-1991,
    'teacher',
    ["Michael" , "Steven" , "Peter"],
    true
];
const types = [];
for(let i = 0; i < jonasArray.length; i++){
    console.log(jonasArray[i]);
    console.log("type of  : ",jonasArray[i], typeof jonasArray[i]);

    types.push(typeof jonasArray[i]);
}
console.log(types);
// console.log(typeof jonasArray);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}
console.log(ages);


// continue and break statement 

console.log('---ONLY STRINGS ---');

for(let i = 0; i<jonasArray.length; i++){
   if(typeof jonasArray[i] !== 'string') continue;
   console.log(jonasArray[i],  typeof jonasArray[i]);
   }

console.log('---BREAK WITH NUMBER ---');

for(let i = 0; i<jonasArray.length; i++){
   if(typeof jonasArray[i] === 'number') break;
   console.log(jonasArray[i],  typeof jonasArray[i]);
   }


// Looping backword

const jonas = [
  'Jonas',
  'Schmedtman',
  2037 - 1991,
  'teacher',
  ["Michael", "Steven", "Peter"],
  true
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i,"----",jonas[i]); // Access array element
}


for(let exercise = 1; exercise < 4; exercise++){
    console.log(`------------Stating exercise ${exercise}`);
    for(let rep = 1; rep < 6; rep++){
        console.log(rep);
    }
}


// While Loop
let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep}`);
     rep++;
}

// random number

let dice = Math.trunc(Math.random()*6) + 1;
console.log(dice);

// console.log(Math.trunc(Math.random()*6));
// console.log(Math.trunc(Math.random()*6));

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) + 1;
    if(dice === 6){
        console.log(`Loop is about to end...`);
    }
}

*/

// Coding - Challing : 04


// Bill ke hisaab se tip calculate karne ka function
const calcTip = function(bill) {
    // Agar bill 50 se 300 ke beech hai → 15% tip, warna 20% tip
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// Bills ka array
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Empty arrays tip aur total store karne ke liye
const tips = [];
const totals = [];

// Har bill ka tip aur total (bill+tip) nikalna
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);    // Tip calculate karo
    tips.push(tip);                   // Tip array me store karo
    totals.push(tip + bills[i]);      // Bill + Tip ka total store karo
}

// Bills, Tips aur Totals print karna
console.log(bills, tips, totals);

// Array ka average nikalne ka function
const calcAverage = function(arr) {
    let sum = 0;                      // Sum start me 0 h
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];                // Har element ko sum me add karo
    }
    return sum / arr.length;          // Total ko length se divide karke average
}

// Example: [2,3,7] ka average
console.log(calcAverage([2, 3, 7]));

// Total amounts ka average
console.log(calcAverage(totals));

// Tips ka average
console.log(calcAverage(tips));
