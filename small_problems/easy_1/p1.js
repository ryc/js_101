/* PEDAC
Problem: To write a function

- Input: 1 integer argument to the function
- Output: true/false
- Explicit reqs: 
  - input will be one integer
  - number can be positive, negative or 0
  - the input integer's absolute value needs to be checked for even/odd
- Rules: 
  - there will always be 1 valid integer provided as an argument to the function

Examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

Data Structure:
- number primitive

Algorithm:
- Find the absolute value of the given number - num
- Compare (num remainder 2) with 1 and return the result
*/

function isOdd(num) {
  return ( (Math.abs(num) % 2) === 1 );
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true