const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// 2037 - 1991 > 2037 - 2018;
// 46 > 19; true;
console.log(now - 1991 > now - 2018); 
// Left to Right
console.log(25 - 10 - 5);

let x,y ;
x = y = 25 - 10 - 5; // x = y = 10;
console.log(x);
console.log(y);

{
console.log(ageJonas , ageSarah);
// 46/2 + 19/2
const averageAge  = ageJonas + ageSarah / 2;
console.log(averageAge); 
}
const averageAge  = ( ageJonas + ageSarah ) / 2;
console.log(averageAge); 
