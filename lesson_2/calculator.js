// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./Calculator_messages.json');

function messages(message, lang='en') {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' ||
         Number.isNaN(Number(number));
}

prompt(messages('welcome', 'es'));

let answer = 'yes';
while (answer === 'yes') {
  prompt(messages('firstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('badNumber'));
    number1 = readline.question();
  }

  prompt(messages('secondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('badNumber'));
    number2 = readline.question();
  }

  prompt(messages('whatOperation?'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('mustChoose'));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is ${output}`);

  prompt(messages('separator'));
  prompt(messages('anotherOne?'));
  answer = readline.question();
}