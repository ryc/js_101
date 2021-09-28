/* PEDAC
Problem:
- Input: 
  - array
  - delimiter string(defaults to ', ')
  - joining word(defaults to 'or')
- Output: a string
- Rules:
  - An empty array will return an empty string
  - An array with a single element will return a string version of the element
  
Examples:
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"

Data Structures:
- an array

Algorithm:
- if input array is empty, return an empty string
- if input array has one element only, return a string version of the element
- if input array has 2 elements, return the two elements separated by the joining word - no delimiter
- if input array has more than 2 elements:
  - make a copy of the input array, called newArray
  - replace the last element in newArray with its string version prepended with the joining word and a space
  - return all the elements of the newArray separated by the delimiter
*/

function joinOr(array, delimiter = ', ', joinWord = 'or') {
  let string = '';

  if (array.length < 2) {
    string = array.join();
  } else if (array.length === 2) {
    string = `${array[0]} ${joinWord} ${array[1]}`;
  } else {
    let newArray = array.slice();
    let lastIndex = newArray.length - 1;
    newArray[lastIndex] = joinWord + ' ' + newArray[lastIndex];
    string = newArray.join(delimiter);
  }

  return string;
}

console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"