function isPalindromicNumber(num) {
  let str = String(num);
  return str === str.split('').reverse().join('');
}

console.log(isPalindromicNumber(0345430));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true