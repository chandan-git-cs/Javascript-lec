// Template litter
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// I'm Jonas a 46 year old teacher !
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

const jonasNew = `I'm ${firstName}, a  ${year - birthYear} year old ${job} !`;
console.log(jonasNew);

console.log('Jusst a ragular string..');

console.log('String \n\multiple \n\line');
console.log(`String 
multiple
line`);