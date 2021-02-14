const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock')    ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    return ('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper')      ||
            (choice === 'paper' && computerChoice === 'scissors') ||
            (choice === 'scissors' && computerChoice === 'rock')) {
    return ('Computer wins!');
  } else {
    return ("It's a tie!");
  }
}

function prompt(message) {
  console.log(`>> ${message}`);
}

let playAgain = 'y';
while (playAgain[0] === 'y') {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(displayWinner(choice, computerChoice));

  prompt('Do you want to play again (y/n)?');
  playAgain = readline.question().toLowerCase();
  while (playAgain[0] !== 'y' && playAgain[0] !== 'n') {
    prompt('Please enter "y" or "n"');
    playAgain = readline.question().toLowerCase();
  }
}