let munstersDescription = "The Munsters are creepy and spooky.";

let result = [];
let letters = munstersDescription.split('');

letters.forEach(letter => {  
    if (letter === letter.toLowerCase()) {
      result.push(letter.toUpperCase());
    } else {
      result.push(letter.toLowerCase());
    }
});

console.log(munstersDescription);
console.log(result.join(''));