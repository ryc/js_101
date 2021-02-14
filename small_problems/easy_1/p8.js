/* PEDAC
Problem:
- input: a year(number)
- output: true/false
- explicit reqs: 
  - if year is divisible by 4 & !divisible by 100 - leapyear
  - if year is divisible by 100 & divisible by 400 - leapyear

Examples:
console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

Data Structures: none

Algorithm:
1. Write a function isLeapYear that takes a number as an argument:
  1. Is the number divisible by 100:
    1. Yes - 
      1. Is the number divisible by 400:
        1. Yes - return true
        2. No - return false
    2. No - 
      1. Is the number divisible by 4:
        1. Yes - return true
        2. No - return false

*/

/*function isLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
}*/

// further exploration
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return (year % 400 === 0);
    } else {
      return true;
    }
  } else {
    return false;
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
console.log(isLeapYear(1700) === false);      // false
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === false);       // false
console.log(isLeapYear(400) === true);       // true