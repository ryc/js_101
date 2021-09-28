function runningTotal(arr) {
  if (arr.length < 2) return arr;

  return arr.map((el, idx) => {
    if (idx === 0) return el;
    return arr.slice(0, idx + 1).reduce((sum, current) => sum + current);
  })
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

/* rodes
function runningTotal(array) {
  let total = 0;
  return array.map( (num) => total += num);
}
*/