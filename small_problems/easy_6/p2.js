function isLetter(char) {
  char = char.toLowerCase();
  return char.toLowerCase() > 'a' && char.toLowerCase() < 'z'; 
}


function doubleConsonants(text) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newText = '';

  for (let i = 0; i < text.length; i += 1) {
    let el = text[i];
   if (isLetter(el) && !(vowels.includes(el.toLowerCase()))) {
     newText += el + el;
   } else {
     newText += el;
   }
  }

  return console.log(newText);
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""