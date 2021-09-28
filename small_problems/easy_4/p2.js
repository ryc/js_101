
const readline = require('readline-sync');

let numbers = [];
numbers.push(Number(readline.question('Enter the 1st number: ')));
numbers.push(Number(readline.question('Enter the 2nd number: ')));
numbers.push(Number(readline.question('Enter the 3rd number: ')));
numbers.push(Number(readline.question('Enter the 4th number: ')));
numbers.push(Number(readline.question('Enter the 5th number: ')));

let lastNum = (Number(readline.question('Enter the last number: ')));

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers}.`);
}