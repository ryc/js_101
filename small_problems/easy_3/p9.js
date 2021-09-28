function cleanUp(text) {
  // text = text.replace(/[^a-z]/gi, ' ').replace(/\s+/g, ' ');
  let cleanText = '';
  for (let i = 0; i < text.length; i+= 1) {
    if (isSmallLetter(text[i]) || isCapitalLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
        cleanText += ' ';
      }
  }

  return cleanText;
}

function isSmallLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isCapitalLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "