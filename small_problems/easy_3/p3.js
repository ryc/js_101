function stringy(int) {
  if (int === 1) return 1;
  
  let pattern = '10';
  if (int % 2 !== 0) {
    return pattern.repeat(int / 2) + '1';
  } else {
    return pattern.repeat(int / 2);
  }
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"