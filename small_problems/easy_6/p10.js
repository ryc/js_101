function reverseWords(text) {
  let wordsArray = text.split(' ');
  let newArray = wordsArray.map(word => {
    if (word.length < 5) return word;
    return word.split('').reverse().join('');
  });

  return newArray.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"