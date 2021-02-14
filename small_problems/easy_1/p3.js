/* PEDAC
Problem: Log all even numbers from 1 to 99, inclusive.
- input: none
- output: even number from 1 to 99
- explicit reqs: 
  - log each number on a separate line
  - include 1 and 99

Examples:
1
3
...
99

Data Structure: none

Algotithm:
- While iterating over the numbers from 1 to 99:
  - print only even numbers, one at a time


*/

for (let i = 1; i < 100; i += 1) {
  if (i % 2 === 0) {
    console.log(i + 1);
  }
}