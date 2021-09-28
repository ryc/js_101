function xor(arg1, arg2) {
  return (Boolean(arg1) !== Boolean(arg2));
}

// function xor(arg1, arg2) {
//   let falsyValues = [0, '', false, undefined, null, NaN];
//   if (falsyValues.includes(arg1) && falsyValues.includes(arg2)) return false;
//   if (!falsyValues.includes(arg1) && !falsyValues.includes(arg2)) return false;
  
//   return true;
// }

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);