// Longest vowel chain
// The vowel substrings in the word codewarriors are o,e,a,io. The longest 
// of these has a length of 2. Given a lowercase string that has alphabetic 
// characters only and no spaces, return the length of the longest vowel 
// substring. Vowels are any of aeiou.

// p solve("codewarriors") == 2
// p solve("suoidea") == 3
// p solve("iuuvgheaae") == 4
// p solve("ultrarevolutionariees") == 3
// p solve("strengthlessnesses") == 1
// p solve("cuboideonavicuare") == 2
// p solve("chrononhotonthuooaos") == 5
// p solve("iiihoovaeaaaoougjyaw") == 8

// PEDA
/*
Problem: 
-Writing a function that takes a lowercase string
  -string contains alphabetic chars and no spaces
-Returning the length of the longest vowel substring
-Vowels are any of aeiou

Example: 
- solve("codewarriors") == 2 // io
Explicit Requrements
  --characters only and no spaces
Implicit requirements
-no numbers no special characters

Data Structure:
-Input: string
Output: Number (length of the longest vowel substring)

Algorithm: 
- write function with one parameter
-initialize variable with a value referencing an array of vowels ['a', 'e', 'i', 'o', 'u']
-initialize a variable with a value referencing the function arugment split into an array of substrings
-iterate through the array of substrings
-compare the substrings against the array of vowels
 - for every match, push the index of the element to a indexeArray
 
- iterate over the indexArray
 - initialize a count = 0
 - for every pair(a, b) if b - a === 1, increment a count variable
 
return count
*/

function solve(string) {
  let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
  let inputLetters = string.split('');
  
  let indexesOfVowels = [];
  inputLetters.forEach((letter, index) => {
    if (arrayOfVowels.includes(letter)) {
         indexesOfVowels.push(index);
    }
  });

  if (indexesOfVowels.length < 2) return indexesOfVowels.length;
  
  let subStringLengths = [];
  let count = 1;
  for (let index = 0; index < indexesOfVowels.length; index += 1) {
    if (index < 1) continue;

    if (indexesOfVowels[index] - indexesOfVowels[index - 1] !== 1) {
      subStringLengths.push(count);
      count = 1;
    } else {
      count += 1;
    }

    if (index === indexesOfVowels.length - 1) {
      subStringLengths.push(count);
    }
  }
  
  let result = 0;
  subStringLengths.forEach(length => {
    if (length > result) {
      result = length;
    }
  });
  
  return result;
}

console.log(solve("codewarriors") === 2);
console.log(solve("suoidea") === 3);
console.log(solve("iuuvgheaae") == 4);
console.log(solve("ultrarevolutionariees") == 3);
console.log(solve("strengthlessnesses") == 1);
console.log(solve("cuboideonavicuare") == 2);
console.log(solve("chrononhotonthuooaos") == 5);
console.log(solve("iiihoovaeaaaoougjyaw") == 8);