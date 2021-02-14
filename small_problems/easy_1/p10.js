/* PEDAC
Problem:
- input: a number
- output: sum of a list of numbers
- explicit reqs:
  - a number > 1 will be provided as target
  - only add the unique multiples of 3 and 5 between 1 and the target number
  - the target must be included in the sum

- mentalmodel:
  - For a given target number, make a list of mjltiples of 3 and 5 that fall between 1 and the target. Add each multiple to the list only if it is not already in the list. Finally, compute the sum of all the numbers in the list and log it.

Examples:
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Data Structures: array for the list of multiples

Algorithm:
- Write a function multisum that has one parameter called target:
  - Create an empty array called multiples
  - Create another array called factors consisiting of 3 and 5
  - For each factor in factors:
      1. Assign current_multiple to factor
      2. While current_multiple < target:
            Is current_multiple NOT in multiples?
              1. Yes - append it to multiples
              2. No - do nothing
              3. Add factor to current_multiple
  - Compute the sum of multiples and log it
- END multisum

*/

function multisum(target) {
  let multiples = [];
  let factors = [3, 5];

  factors.forEach(function(factor) {
    let current_multiple = factor;

    while (current_multiple <= target) {
      if (!multiples.includes(current_multiple)) {
        multiples.push(current_multiple);
      }
      current_multiple += factors;
    }
  });

  return multiples.reduce(function(sum, multiple) {
    return sum + multiple;
  }, 0);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168