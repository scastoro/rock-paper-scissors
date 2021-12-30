// Steps to solve the problem:
// Create function called computerPlay() that will randomly return rock, paper, or scissors
function computerPlay() {
    // Generate random number using let theRandomNumber = Math.floor(Math.random() * 3) + 1;
    // Look up how to set range from 1 - 3 or 0 - 2
    let theRandomNumber = Math.floor(Math.random() * 3) + 1;
    let selection;
    // Use if...else statements to assign random number to rock, paper or scissors
    if (theRandomNumber === 1){
        // Store text in variable
        selection = 'Rock'
    } else if (theRandomNumber === 2){
        selection = 'Paper'
    } else {
        selection = 'Scissors'
    }
    // Return variable
    return selection;

}

function capitalize(inputString){
    const firstLetter = inputString.charAt(0).toUpperCase();
    const restOfString = inputString.substring(1).toLowerCase();

    return firstLetter + restOfString;
}

// Create function playRound(playerSelection, computerSelection) that takes these two arguments
function playRound(playerSelection, computerSelection){
    // Convert playerSelection and computerSelection to lower case using the String.toLowerCase() method
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();
    let output;
    // Create if statement or switch statement that has all possible outcomes for all possible combinations of rock, paper, and scissors
    // Combinations: rock and rock, rock and scissors, rock and paper, scissors and scissors, scissors and paper, paper and paper
    // Can then go through all other cases and print out winner depending on selection
    // Consider using switch statement due to large amount of cases
    switch (true){
        case playerSelectionLower === 'rock' &&  computerSelectionLower === 'scissors':
            // case 1: rock and scissors, output: `You win! ${playerSelection} beats ${computerSelection}`
            output = `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
            break
        case playerSelectionLower === 'rock' &&  computerSelectionLower === 'paper':
            // case 2: rock and paper, output: `You lose... ${computerSlection} beats ${playerSelection}`
            output = `You lose... ${computerSelection} beats ${capitalize(playerSelection)}`;
            break
        case playerSelectionLower === 'scissors' &&  computerSelectionLower === 'rock':
            // case 3: scissors and rock, output: `You lose... ${computerSlection} beats ${playerSelection}`
            output = `You lose... ${computerSelection} beats ${capitalize(playerSelection)}`;
            break
        case playerSelectionLower === 'scissors' &&  computerSelectionLower === 'paper':
            // case 4: scissors and paper, output: `You win! ${playerSelection} beats ${computerSelection}`
            output = `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
            break
        case playerSelectionLower === 'paper' &&  computerSelectionLower === 'rock':
            // case 5: paper and rock, output: `You win! ${playerSelection} beats ${computerSelection}`
            output = `You win! ${capitalize(playerSelection)} beats ${computerSelection}`;
            break
        case playerSelectionLower === 'paper' &&  computerSelectionLower === 'scissors':
            // case 6: paper and scissors, output: `You lose... ${computerSlection} beats ${playerSelection}`
            output = `You lose... ${computerSelection} beats ${capitalize(playerSelection)}`;
            break
        default:
            // For same imputs: can check for equality and print out `Draw! ${playerSelection} is the same as ${computerSelection}!`
            output = `Draw! ${capitalize(playerSelection)} is the same as ${computerSelection}!`;
    }
    return output;
}
function gameWinner() {
    // Check score against each other
    // Check how many rounds left
    if (rounds < 4) {
        return `${5 - rounds} more rounds left!`
    } else if (rounds === 4) {
        return `1 more round left!`
    }
    // Report winner and loser at the end of function
    if (playerWins > computerWins) {
        return `Player wins The Game with ${playerWins} rounds won!!`
    } else if (computerWins > playerWins) {
        return `Computer wins The Game with ${computerWins} rounds won!!`
    } else {
        return `Draw! No one wins The Game. Player Wins: ${playerWins} is the same as Computer Wins: ${computerWins}`
    }
}

// Refactor game() function to accept input parameter and increment global variables
function game(outcome){
    rounds++
    if (outcome.includes('win')) {
        playerWins++
        console.log(`The Player Wins! Score: player ${playerWins} computer ${computerWins}`);
        return `The Player Wins! Score: player ${playerWins} computer ${computerWins}`
    } else if (outcome.includes('lose')) {
        computerWins++
        console.log(`The Computer Wins! Score: player ${playerWins} computer ${computerWins}`);
        return `The Computer Wins! Score: player ${playerWins} computer ${computerWins}`
    } else {
        console.log(`Draw! Score: player ${playerWins} computer ${computerWins}`)
        return `Draw! Score: player ${playerWins} computer ${computerWins}`
    }
}

// NEW GOAL: Add eventListeners to new buttons in the HTML document which call the playRound() function
// Make new global variables for player wins, computer wins, and total rounds played
let playerWins = 0;
let computerWins = 0;
let rounds = 0;
// Must call the function with correct parameters based on the text of the button
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener('click', () => {
    const outcome = playRound('rock', computerPlay());
    game(outcome);
    console.log(gameWinner());
});
paperBtn.addEventListener('click', () => {
    const outcome = playRound('paper', computerPlay());
    console.log(outcome);
    game(outcome);
    console.log(gameWinner());
});
scissorsBtn.addEventListener('click', () => {
    const outcome = playRound('scissors', computerPlay());
    console.log(outcome);
    game(outcome);
    console.log(gameWinner());
});