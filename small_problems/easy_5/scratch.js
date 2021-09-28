
function interleave (array1, array2) {
  return array1.reduce((zipped, el, idx) => {
    zipped.push(el, array2[idx]);
    return zipped;
  }, []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));