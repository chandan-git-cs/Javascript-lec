// 'use strict';

/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear; // 'age' ka scope: calcAge function (function scope)
  console.log(firstName); // ReferenceError milega, kyunki 'firstName' abhi declare
  // hi nahi hua function ke andar (lexical scope me global
  // wala hoga, but wo neeche declare hua h)

  function printAge() {
    //  'printAge' function: calcAge ke andar define hua h
    // iska scope = calcAge ke andar (lexical scope)

    let outPut = `You are ${age}, born in ${birthYear}`;
    //  'outPut' ka scope: printAge function (function scope)
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //  'var' ka scope = pure printAge function (function scope),
      // block se bahar bhi accessible hoga.

      const firstName = "Steven";
      //  'const firstName' ka scope: sirf IF block (block scope)

      outPut = "NEW OUTPUT";
      // allowed, kyunki 'outPut' upar printAge me hi declare h

      const str = `Oh and you're a millenial, ${firstName}`;
      //  'str' ka scope: IF block (block scope)
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      //  'add' function: block ke andar declare hua h
      // 'use strict' mode me sirf block scope me available h
    }
    // console.log(str); //  error, kyunki 'str' block scope me tha

    console.log(millenial); //  accessible, kyunki 'var' function scope me h
    console.log(outPut); //  accessible, kyunki 'outPut' printAge ke function scope me h
    console.log(add(2, 3)); //  Error strict mode me, kyunki 'add' IF block scope tak limited h
  }

  printAge(); //  calcAge ke andar call hua h
  return age; //  'age' return karega
}

const firstName = "Jonas"; // 'firstName' ka scope = Global
calcAge(1991);



// Variables hoisting test
console.log(me); // undefined
// console.log(job);  // ReferenceError
// console.log(year); // ReferenceError

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions hoisting test
console.log(addDecl(2, 4)); //  works
// console.log(addExpr(2,4)); //  TypeError
// console.log(addArrow(2,4)); //  TypeError

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example of var hoisting in condition
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log("All products delete!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);




// This keyword :

// 'use strict';

// 1. Global Scope
console.log(this); 
// Browser me → Window
// Node.js me (strict) → {}

// 2. Normal function (standalone)
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined (in strict mode), window (non-strict browser)
};
calcAge(1991);

// 3. Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); 
  // Arrow function apna `this` nahi rakhta
  // Yaha lexical `this` = global this (Window ya {})
};
calcAgeArrow(1988);

// 4. Method inside object
const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Jonas object
    console.log(2037 - this.year); // 46
  },
};
Jonas.calcAge();

// 5. Method Borrowing
const matilda = {
  year: 2017,
};
matilda.calcAge = Jonas.calcAge; // Method copy
matilda.calcAge(); // this = matilda, output = 20

// 6. Detached function (lost this)
const f = Jonas.calcAge;
f(); 
// Regular function call again → this = undefined (strict mode)
// Agar non-strict hota → this = window


var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  great: () => console.log(`Hey ${this.firstName}`),
  great: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.great();

// console.log(this.jonas); // undefine

*/


let age = 30;
let oldAge  = age;
age  = 31;
console.log(age);
console.log(oldAge); 

const me  =  {
  name:'Jonas',
  age:30,
};
const friend  = me;
friend.age = 27;
console.log('Friend:' , friend);
console.log('Me', me);


// primtive - VALUE  : 

// Primitive tipe : 
let  lastName  = "Williams";
let oldLastName  = lastName;
lastName = 'Davis';
console.log(`Davis : ${lastName} and  Williams : ${oldLastName}`);

// Reference type : 
const jessica = {
  firstName: 'jessica',
  lastName:"Williams",
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(`Before marriage : ${jessica}`);
console.log(`After marriage : ${marriedJessica}`);

// marriedJessica = {};

