// longest vowel chain

/* PEDAC
Problem: Given an alphabetic string, write a function that calculate the length of longest vowel substring.

- input: an alphabetic string
- output: length of the longest vowel substring(number)
- explicit reqs: 
  - input will always be an alphabetic string of lowercase characters
  - vowels are one of a,e,i,o,u

Examples:
console.log(solve('realroad')) // => 2

Data Structures:
- array for storing letters of the string

Algorithm:
- Create an array called letters containing the individual letters from the input string
- Set curCount to 0
- Set max count to 0

- While iterating through the letters array:
  - Check if the current letter is a vowel:
    1. Yes - increment cuCount by 1
    2. No - rest curCount to 0
  - Check if curCount > 1:
    - 1. Yes - set maxCount to curCount

- Return the value of maxCount

*/
function solve(str) {
  let letters = Array.from(str); 
  let curCount = 0;
  let maxCount = 0;

  for (let i = 0; i < letters.length; i += 1) {
    if ('aeiou'.includes(letters[i])) {
      curCount += 1;
    } else {
      curCount = 0;
    }

    if (curCount > 1) {
      maxCount = curCount;
    }
  }

  return maxCount;
}


console.log(solve('bwwwwwwwwwwwwwwwwedasapararoeoaiw'));