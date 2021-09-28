function isSmallLetter(char) {
  return (char >= 'a' && char <='z');
}

function isCapitalLetter(char) {
  return (char >= 'A' && char <= 'Z');
}

function wordSizes(text) {
  let wordCounts = {};
  // if (text.length === 0) return wordCounts;

  let words = text.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    let letterArray = words[i].split('');
    // word = word.replace(/[^a-zA-Z]/g, '');
    let cleanWord = '';
    letterArray.forEach(char => {
      if (isSmallLetter(char) || isCapitalLetter(char)) {
        cleanWord += char;
      }
    });

    let size = cleanWord.length;

    if (size === 0) continue;

    if (wordCounts[size]) {
      wordCounts[size] += 1;
    } else {
      wordCounts[size] = 1;
    }
  }
  return console.log(wordCounts);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}