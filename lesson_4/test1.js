function palindromeSubstrings(str) {
  let result = [];
  let substringArr = substrings(str);

  substringArr.forEach(substr => {
    if (isPalindrome(substr)) {
      result.push(substr);
    }
  });

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function substrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length - 1; idx += 1) {
    let numChars = 2;
    while (numChars <= str.length - idx) {
      result.push(str.slice(idx, idx + numChars));
      numChars += 1;
    }
  }

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
console.log(palindromeSubstrings("palindrome"))
// should log: []
//
console.log(palindromeSubstrings(""))
// should log: []

/*
while iterating over the letters of the string:
  generate substrings of length atleast 2 and append them to the results array
*/