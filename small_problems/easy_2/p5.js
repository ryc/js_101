let readline = require('readline-sync');

function prompt(text) {
  console.log(`===> ${text}`);
}

let num1 = readline.question('===> Enter the first number:\n');
let num2 = readline.question('===> Enter the second number:\n');

num1 = Number(num1);
num2 = Number(num2);

prompt(`${num1} + ${num2} = ${num1 + num2}`);
prompt(`${num1} - ${num2} = ${num1 - num2}`);
prompt(`${num1} * ${num2} = ${num1 * num2}`);
prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
prompt(`${num1} % ${num2} = ${num1 % num2}`);
prompt(`${num1} ** ${num2} = ${num1 ** num2}`);