function stringToInteger(string) {
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
    9: 9
  }

  let arrayOfDigits = string.split('').map(char => DIGITS[char]);
  let value = 0;

  arrayOfDigits.forEach(digit => {
    value = (10 * value) + digit;
  });

  return value;
}

function stringToSignedInteger(string) {
  let sign = string[0];
  if (Number.isNaN(+sign)) {
    string = string.slice(1);
  }

  let result = stringToInteger(string);

  if (sign === '-') {
    return -result;
  } else {
    return result;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
/* Bob Rodes
function stringToSignedInteger(string) {
  let theInteger = stringToInteger(string.replace(/^[+-]/, ''));
  return string[0] === '-' ? -theInteger : theInteger;
}

I used String.prototype.replace to send the input to stringToInteger with any unary operators stripped off. Then a ternary operator to test the first character of the input, negating the result of the call to stringToInteger if the first character of the input was a '-' character. This test takes advantage of the fact that a + at the beginning of the string can be treated the same way as no unary operator at all.
*/