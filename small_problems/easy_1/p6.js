/* PEDAC
Problem: 
- input: a number and a letter
- output: sum or product of numbers (based on user choice)
- explicit reqs: 
  - input number will be > 0
  - sum or product will be specified
  - the user provided number must be included in your calculation

Examples:
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Data Structures: none

Algorithm:
- Ask the user for a positive integer and store it in limit.
- Validate that limit is a number and re-prompt if necessary
- Ask the user whether he wants sum or product and store his response in operation
- Validate that operation is either 's' or 'p' and re-prompt if necessary

- If operation is sum:
  - Compute the sum of numbers from 1 through limit and display the result
- otherwise:
  - compute the product of numbers from 1 thru limit and display the result.

*/

let readline = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let limit = parseInt(readline.prompt(), 10);

while (isNaN(limit) || limit < 1) {
  limit = parseInt(readline.question('Please enter a valid number: '));
}

console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
let operation = readline.prompt();

while (!'sp'.includes(operation) || operation === '') {
  operation = readline.question('Please enter "s" or "p": ');
}

let sum = 0;
let product = 1;
if (operation === 's') {
  for (let i = 1; i <= limit; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${limit} is ${sum}.`)
} else {
  for (let j = 1; j <= limit; j += 1) {
    product *= j;
  }
  console.log(`The product of the integers between 1 and ${limit} is ${product}.`)
}

