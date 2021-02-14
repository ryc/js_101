/* PEDAC
Problem:
- input: a string
- output: number(ascii value of the string)
- explicit reqs:
  - a string will be provided
  - ascii value o f a string is the sum of ascii values of all the characters of the string
  - String.prototype.charCodeAt() can be used to determine the ascii value of a character

Examples:
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0

Data Structures: array for string characters

Algorithm:
- Set sum to 0
- For each letter in the string:
    1. Calculate the ascii value and increment sum by this value
- Return sum

*/

function asciiValue(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0