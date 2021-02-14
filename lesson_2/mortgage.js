// mortgage.js

// Ask for the loan amount - loanAmount
// Ask for the Annual Percentage Rate (APR) - annualInterestRate
// Ask for the loan duration - loanYears

// Using annualInt, Calculate monthly interest rate - monthlyInterestRate
// Using loanYears, calculate loan duration in months - loanMonths
// Calculate and show the monthly payment using the formula:
// monthlyPay = loanAmount *
//              (monthlyInterestRate /
//              (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))))

const readline = require('readline-sync');

function prompt(message) {
  console.log(`>> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

function checkDuration(number) {
  return number.trim() === '' ||
         Number(number) < 1   ||
         Number.isNaN(Number(number));
}

// User Inputs
prompt("Welcome to the Loan Payments Calculator!");

while (true) {
  prompt('What is the total loan amount, for example: 2500 ?');
  let loanAmount = readline.question();
  while (invalidNumber(loanAmount)) {
    prompt('Please enter a positive number.');
    loanAmount = readline.question();
  }

  prompt('What is the Annual Percentage Rate (APR), for example: 6.18 ?');
  let annualInterestRate = readline.question();
  while (invalidNumber(annualInterestRate)) {
    prompt('Please enter a positive number.');
    annualInterestRate = readline.question();
  }

  prompt('What is the loan duration in Years, for example: 10 ?');
  let loanYears = readline.question();
  while (checkDuration(loanYears)) {
    prompt('Please enter a positive number.');
    loanYears = readline.question();
  }

  // Calculations
  let monthlyInterestRate = Number(annualInterestRate) / 12 / 100;
  let loanMonths = Number(loanYears) * 12;

  let monthlyPay;
  if (loanAmount === 0) {
    monthlyPay = 0;
  } else if (monthlyInterestRate === 0) {
    monthlyPay = loanAmount / loanMonths;
  } else {
    monthlyPay = Number(loanAmount) *
                (monthlyInterestRate /
                (1 - Math.pow((1 + monthlyInterestRate), -Number(loanMonths))));
  }

  // Result
  console.clear();
  prompt(`Your monthly payment is $${monthlyPay.toFixed(2)}`);

  prompt('====================');
  prompt('Another calculation (yes/no)?');
  let doAgain = readline.question();

  if (doAgain === '' || doAgain[0].toLowerCase() !== 'y') {
    prompt('Goodbye!');
    break;
  }
}

