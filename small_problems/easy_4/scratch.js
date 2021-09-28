function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let wordSize = wordsArray[idx].length;
    if (wordSize === 0) {
      continue;
    }

    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
    count[wordSize] += 1;
  }

  return count;
}

let res = wordSizes('Four     score and seven.');
res = Object.keys(res);
res.forEach(key => console.log(`${typeof key}:`, key));
// console.log(wordSizes('Four     score and seven.'));