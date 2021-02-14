/* PEDAC
Problem:
- input: a year(number)
- output: true/false
- explicit reqs/rules: 
  - prior to 1752:
    - if year is divisible by 4 - leapyear
  - 1752(inclusive) onwards
    - if year is divisible by 4 & !divisible by 100 - leapyear
    - if year is divisible by 100 & divisible by 400 - leapyear

Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

Data Structures: none

Algorithm:

*/

function isLeapYear(year) {
  if (year <= 1752) {
    return year % 4 === 0;
  } else {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return year % 4 === 0;
    }
  }
}

console.log(isLeapYear(2016) === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === true);      // true
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === true);       // true
console.log(isLeapYear(400) === true);       // true