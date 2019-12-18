let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    randomNumber = Math.floor(Math.random() * Math.floor(10));
    return randomNumber;
};
const compareGuesses = (userGuess, computerGuess, secretNumber) =>{
// Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
    let userMargin = 0;
    // Make this a switch statement
    switch(true){
        case userGuess <= secretNumber:
            userMargin = secretNumber - userGuess;
            break;
        default:
            userMargin = userGuess - secretNumber;
    };
    switch(true){
        case computerGuess <= secretNumber:
            computerMargin = secretNumber - computerGuess;
            break;
        default:
            computerMargin = computerGuess - secretNumber;
    };
    // Return true if the human player wins, and false if the computer player wins.
    switch(true){
        case computerMargin < userMargin:
            result = false;
            break;
        default:
            result = true;

    };
    return result;
}; 
const updateScore = (resultString) =>{
    switch(true){
        case resultString =="human":
            humanScore+=1;
            break;
        default:
            computerScore+=1; 
    };

};
const advanceRound = () =>{
    currentRoundNumber+=1;
}
