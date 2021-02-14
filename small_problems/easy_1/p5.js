/* PEDAC
Problem: 
- input: bill amount and tip rate (numbers)
- output: tip and total bill(numbers)
- explicit reqs:
  - input will be numbers, no need to validate
  - display tip on a separate line
  - display total on a separate line

Examples:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Data Structures: none

Algorithm:
- Ask the user for bill amount and store it in billAmount(allow decimals)
- Ask the user for tip percentage and store it in tipPercentage(allow decimals)
- Calculate the tipAmount
- Calculate the totalBill
- Display tipAmount on its own line
- Display totalBill on its own line

*/

let readline = require('readline-sync');

let billAmount = parseFloat(readline.question('What is the bill? '));
let tipPercentage = parseFloat(readline.question('What is the tip percentage? '));

let tipAmount = billAmount * (tipPercentage / 100);
let totalBill = (billAmount + tipAmount);

console.log();
console.log(`The tip is: $${tipAmount.toFixed(2)}`);
console.log(`The total is: $${totalBill.toFixed(2)}`);
