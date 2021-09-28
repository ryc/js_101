const readline = require('readline-sync');

let name = readline.question('What is your name? ');
if (name[name.length - 1] === '!') {
  let noBangName = name.slice(0, (name.length - 1));
  console.log(`HELLO ${noBangName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}

