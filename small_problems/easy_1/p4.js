/* PEDAC
Problem: Get length and width of a room from the user and log the area.
- input: length and width of the room
- output: area of the room
- explicit reqs: 
  - ask for the length and width in meters
  - log the are in both sq.meters and sqft.
  - 1 square meter = 10.7639 square feet
  - limit the decimal value for sqft to 2 decimals

Examples:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Data Structures: none

Algorithm:
- Ask the user for length
- Store it in a variable called length
- Ask the user for width
- Store it in a variable called width
- Calculate the area as length * width and store it in a variable called area
- Log the area in both sqm and sqft, limited to 2 decimals.

*/

let readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639

console.log('Enter the length of the room in meters: ');
let length = parseInt(readline.prompt(), 10);

console.log('Enter the width of the room in meters: ');
let width = parseInt(readline.prompt(), 10);

let areaSqm = (length * width);
let areaSft = (areaSqm * SQMETERS_TO_SQFEET);

console.log(`The area of the room is ${areaSqm.toFixed(2)} square meters (${areaSft.toFixed(2)} square feet).`);
