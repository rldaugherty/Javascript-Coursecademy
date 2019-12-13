let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => console.log(Math.floor(Math.random() * Math.floor(10)));
const compareGuesses = (userGuess, computerGuess, secretNumber) =>{
// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
    let userMargin = 0;
    // Make this a switch statement
    if (userGuess <= secretNumber){
        userMargin = secretNumber - userGuess;
    } else if (userGuess > secretNumber){
        userMargin = userGuess - secretNumber;
    }
// Return true if the human player wins, and false if the computer player wins.

}; 