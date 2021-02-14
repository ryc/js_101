// variables
const readline = require('readline-sync');
const CHOICES = {
  ro: 'rock',
  pa: 'paper',
  sc: 'scissors',
  li: 'lizard',
  sp: 'spock'
};
const VALID_CHOICES = Object.keys(CHOICES);
const WINNING_COMBOS = {
  ro: ['sc', 'li'],
  pa: ['ro', 'sp'],
  sc: ['pa', 'li'],
  li: ['pa', 'sp'],
  sp: ['ro', 'sc']
};

// functions
function prompt(message) {
  console.log(`>> ${message}`);
}

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You win');
  } else if (choice === computerChoice) {
    prompt("It's a tie.");
  } else {
    prompt('Computer wins!');
  }
}

function displayChoices() {
  prompt('-------');
  Object.entries(CHOICES).forEach(pair => {
    console.log(`${pair[0]}: ${pair[1]}`);
  });
  prompt('-------');
}

// main
let playerScore = 0;
let computerScore = 0;

while (true) {
  console.clear();
  prompt('Choose one, (for example: ro for rock):');
  displayChoices();
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  displayWinner(choice, computerChoice);

  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
  } else if (playerWins(computerChoice, choice)) {
    computerScore += 1;
  }

  prompt('-------');
  prompt(`Your score: ${playerScore}`);
  prompt(`Computer's score: ${computerScore}`);
  prompt('-------');

  if (playerScore === 5) {
    prompt('Congratulations. You won the Best of 5!');
    break;
  } else if (computerScore === 5) {
    prompt('The computer wins the Best of 5.');
    break;
  }

  prompt('Play again (y/n)?');
  let playAgain = readline.question();

  while (playAgain[0] !== 'n' && playAgain[0] !== 'y') {
    prompt('Please say "y" or "n".');
    playAgain = readline.question();
  }

  if (playAgain !== 'y') break;
}
