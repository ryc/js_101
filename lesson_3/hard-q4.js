function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return (number >= 0 && number <= 255);
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return 'Not a valid IP';
      }
    }

    return 'That is a valid IP';
  } else {
    return 'Not a valid IP';
  }

}

console.log(isDotSeparatedIpAddress('1.2.3.1'));