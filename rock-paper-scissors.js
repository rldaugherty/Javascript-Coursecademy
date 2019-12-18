function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    switch (true) {
        case userInput === 'rock':
        case userInput === 'paper':
        case userInput === 'scissors':
        case userInput === 'bomb':
            userChoice = userInput.toLowerCase();
            return userChoice;
            break;
        default:
        console.log('Please choose either Rock, Paper or Scissors');
    };
};
  function getComputerChoice() {
    randNum = Math.floor(Math.random() * Math.floor(3));
    switch (randNum){
        case 1:
          computerChoice='paper';
          return computerChoice;
          break;
        case 2:
          computerChoice='scissors';
          return computerChoice;
          break;
        default:
          computerChoice='rock';
          return computerChoice;
          break;
    };
  }

  function determineWinner(userChoice, computerChoice){
    switch (userChoice !== computerChoice) {
        case true:
            switch(true) {
                case userChoice === 'bomb':
                        console.log("You automatically win!");
                        break;
                case userChoice === 'rock' && computerChoice === 'scissors':
                case userChoice === 'paper' && computerChoice === 'rock':
                case userChoice === 'scissors' && computerChoice === 'paper':
                    console.log("You win!");
                    break;
                default:
                    console.log("You lose!");
                    break;
            };
            break;
        default:
            console.log("It's a tie!");
            break;
    };
  };

  function playGame(){
    userChoice = getUserChoice('bomb');
    computerChoice = (getComputerChoice());
    console.log('User choice: ' + userChoice)
    console.log('Computer choice: ' + computerChoice)
    determineWinner(userChoice, computerChoice)
  };

  playGame()