function crunch(string) {
  let chars = string.split('');
  let result = [];
  result.push(chars[0]);
  
  for (let i = 1; i < chars.length; i += 1) {
    if (result[result.length - 1] === chars[i]) continue;
    result.push(chars[i]);
  }
  
  return result.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""