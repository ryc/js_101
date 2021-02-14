/* PEDAC
Problem:
- input: 2 strings
- output: a string
- explicit reqs: 2 strings of different lengths will be provided

Examples:
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

Data Structures: none

Algorithm:
- Create a function that takes 2 string arguments:
  - If s1 is shorter than s2:
    - Log 's1s2s1'
  - otherwise:
    - log 's2s1s2'

*/

function shortLongShort(s1, s2) {
  if (s1.length < s2.length) {
    console.log(s1 + s2 + s1);
  } else {
    console.log(s2 + s1 + s2);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"