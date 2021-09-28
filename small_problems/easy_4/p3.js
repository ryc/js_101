const readline = require('readline-sync');

let age = readline.questionInt('What is your age? ');
let retireAge = readline.questionInt('At what age would you like to retire? ');
let diff = retireAge - age;

let today = new Date();
let currentYear = today.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + diff}.`);
console.log(`You only have ${diff} years of work to go.`);