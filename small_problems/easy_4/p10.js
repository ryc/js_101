
function swap(text) {
  let words = text.split(' ');
  let swapText = words.map(word => {
    if (word.length === 1) return word;

    return word[word.length - 1] + word.slice(1, -1) + word[0];
  })

  return console.log(swapText.join(' '));
}

/* rodes
function swap(string) {
  return string.split(' ').map(word => {
    if (word.length === 1) return word;
    return word.slice(-1) + word.slice(1, -1) + word[0];
  }).join(' ');
}
*/

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"