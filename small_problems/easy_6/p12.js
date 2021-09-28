 function isBalanced(text) {
   let parenthArray = text.split('').filter(char => {
     return char === '(' || char === ')';
   });
   let paLength = parenthArray.length; 
   if (paLength === 0) return true;
   if (parenthArray[0] !== '(' || 
       parenthArray[paLength - 1] !== ')') return false;

   let openCount = 0;
   let closeCount = 0;
   for (let i = 0; i < paLength; i += 1) {
     if (parenthArray[i] === '(') {
       openCount += 1;
     } else if (parenthArray[i] === ')') {
       closeCount += 1;
     }
   }

   return openCount === closeCount;
 }

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("Hey!())(()") === false); // this special test case I made broke my solution - another reason why I need to be patient with my own pEDAC before I code - this made me realize I have just retrofit a solution to the given usecases instead of thinking through the pattern mathematically and solving for it - I used the LS solution for further exploration

/* Further exploration - modified the LS solution
function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(" || 
        string[idx] === '{' ||
        string[idx] === '[') {
      parens += 1;
    } else if (string[idx] === ")" ||
               string[idx] === '}' ||
               string[idx] === ']') {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}
*/