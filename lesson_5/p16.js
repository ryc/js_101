let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function makeObject(arr) {
  let result = {};
  arr.forEach(subArr => {
    result[subArr[0]] = subArr[1];
  });

  return result;
}

console.log(makeObject(arr));