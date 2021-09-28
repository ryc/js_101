function wordSizes(text) {
  let wordCounts = {};
  // if (text.length === 0) return wordCounts;

  let words = text.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    let size = word.length;

    if (size === 0) continue;

    if (wordCounts[size]) {
      wordCounts[size] += 1;
    } else {
      wordCounts[size] = 1;
    }
  }
  
  // words.forEach(word => {
  //   let size = word.length;
  //   if (size !== 0) {
  //     if (wordCounts.hasOwnProperty(size)) {
  //       wordCounts[size] += 1;
  //     } else {
  //       wordCounts[size] = 1;
  //     }
  //   }  
  // });

  return wordCounts;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}