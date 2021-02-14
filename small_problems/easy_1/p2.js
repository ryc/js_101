/* PEDAC for Further Exploration
Problem: Get 2 positive numbers from the user and Log a list of odd numbers between the provided numbers, each on a separate line.
- input: 
  - 2 positive numbers
- output:
  - list of odd numbers
- explicit reqs: 
  - inputs will always be positive integers
  - first input will be lower then the second
  - print all odd numbers between the provided numbers, including the provided numbers

- rules: each number to be logged on a separate line

Examples: 
input: 1 and 5
output: 
1
3
5

Data Structure: numbers, arrays

Algorithm:
- Ask the user for a number
- Store it in a variable called lowNumber
- Validate that lowNumber is a number

- Ask the user for another number
- Store it in a variable called highNumber
- Validate that highNumber is a number 
- Validate that highNumber is higher than lowNumber

- Using a while loop 
  - while lowNumber <= highNumber:
    - print lowNumber if it is odd
    - increment lowNumber by 1

*/

let rlsync = require('readline-sync');

console.log('Please enter a positive number: ');
let lowNumber = Math.abs(Number(rlsync.question()));

while (isNaN(lowNumber)) {
  console.log('Please enter a valid number: ');
  lowNumber = Math.abs(Number(rlsync.question()));
}

console.log('Please enter a number higher than the previous one: ');
let highNumber = Math.abs(Number(rlsync.question()));

while (isNaN(highNumber)) {
  console.log('Please enter a valid number: ');
  highNumber = Math.abs(Number(rlsync.question()));
}

while (highNumber <= lowNumber) {
  console.log(`Please enter a number higher than ${lowNumber}: `);
  highNumber = Math.abs(Number(rlsync.question()));
}

console.log(`The following are all the odd numbers from ${lowNumber} to ${highNumber}`);

while (lowNumber <= highNumber) {  
  if (lowNumber % 2 === 1) {
    console.log(lowNumber);
  }
  lowNumber += 1;
}