/* my first solution
function interleave(arr1, arr2) {
  let result = [];
  let resLength = arr1.length * 2;

  for (let i = 0; i < resLength; i += 1) {
    if (i % 2 === 0) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result;
}
*/

/* Further exploration 1
function interleave(arr1, arr2) {
  let result = [];
  arr1.forEach((el, idx) => result.push(el, arr2[idx]));

  return result;
}
*/

/* Further exploration 2
function interleave(arr1, arr2) {
  return arr1.map((el, idx) => [el, arr2[idx]]).flat();
}
*/

// Further exploration 3
function interleave(arr1, arr2) {
  return arr1.reduce((intleavArr, cv, idx) => {
    intleavArr.push(cv, arr2[idx]);
    return intleavArr;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

