console.log('Hello');
// Steps to solve the problem:
// Create function called computerPlay() that will randomly return rock, paper, or scissors
// Generate random number using let theRandomNumber = Math.floor(Math.random() * 3) + 1;
// Look up how to set range from 1 - 3 or 0 - 2
// Use if...else statements to assign random number to rock, paper or scissors
// Store text in variable
// Return variable

// Create function round(playerSelection, computerSelection) that takes these two arguments
// Convert playerSelection to lower case using the String.toLowerCase() method
// Create if statement or switch statement that has all possible outcomes for all possible combinations of rock, paper, and scissors
// Combinations: rock and rock, rock and scissors, rock and paper, scissors and scissors, scissors and paper, paper and paper
// For same imputs: can check first for equality and print out `Draw! ${playerSelection} is the same as ${computerSelection}!`
// Can then go through all other cases and print out winner depending on selection
// case 1: rock and scissors, output: `You win! ${playerSelection} beats ${computerSelection}`
// case 2: rock and paper, output: `You lose... ${computerSlection} beats ${playerSelection}`
// case 3: scissors and rock, output: `You lose... ${computerSlection} beats ${playerSelection}`
// case 4: scissors and paper, output: `You win! ${playerSelection} beats ${computerSelection}`
// case 5: paper and rock, output: `You win! ${playerSelection} beats ${computerSelection}`
// case 6: paper and scissors, output: `You lose... ${computerSlection} beats ${playerSelection}`
// Consider using switch statement due to large amount of cases

// Use prompt function to get input from user and store it in playerSelection
// Call computerPlay() function and store output in computerSelection
// Call round() with arguemnts playerSelection and computerSelection
