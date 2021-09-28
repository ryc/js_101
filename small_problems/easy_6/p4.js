function centerOf(text) {
  if (text.length % 2 === 0) {
    let center = text.length / 2;
    return text.slice(center - 1, center + 1);
  } else {
    let center = Math.floor(text.length / 2);
    return text[center];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

/* pocsai
let centerOf = (str) => {
  let half = Math.ceil(str.length / 2) - 1;
  return str.length % 2 === 0
    ? str.slice(half, half + 2)
    : str.slice(half, half + 1);
};
*/