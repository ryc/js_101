function hexadecimalToInteger(string) {
  let DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }

  let arrayOfDigits = string.split('').map(char => DIGITS[char.toLowerCase()]);
  let value = 0;

  arrayOfDigits.forEach(digit => {
    value = (16 * value) + digit;
  });

  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871); // logs true
console.log(hexadecimalToInteger("23A") === 570); // logs true

/*
Other answers

// David Pocsai
let stringToInteger = (str) => +str;
let stringToInteger = (str) => str * 1;

// Bob Rodes
Using Array.prototype.reduce and String.prototype.charCodeAt:

function stringToInteger(string) {
  const ZERO_OFFSET = '0'.charCodeAt();

  return string.split('').reverse().reduce( (acc, char, index) => {
    return acc + (char.charCodeAt() - ZERO_OFFSET) * 10**index;    
  }, 0);
}
Interestingly, Arabic is written right-to-left, but the language does numbers the same way that we do. This is because Arabic writes numbers the same way we do, but since the rest of the language is right-to-left, Arabic starts numbers with the least significant bit rather than the most significant bit as we do. So, from their perception, they actually do numbers "backwards" from the way that we do them.

This can facilitate some types of calculation, and this is an example of that. Here, reversing the numbers before iterating through them allows the index to function directly as an exponent when accumulating each digit, rather than having to loop backwards through the number and subtract the index plus one from the length of the item being iterated.

Further exploration
Using charCodeAt doesn't work very well for hex values, because the gap in the ASCII values between letters and numbers will make the code pretty obscure. Using the solution's idea of an object might be a better idea all around, but it's certainly a better idea here.


function hexToInteger(string) {
  const HEX_TO_DECIMAL = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
    A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
  }

  return string.split('').reverse().reduce( (acc, char, index) => {
    return acc + HEX_TO_DECIMAL[char.toUpperCase()] * 16**index;
  }, 0);
}
Array.prototype.reduce works the same way here. The only change, besides using HEX_TO_DECIMAL, is to change the base from 10 to 16.

*/