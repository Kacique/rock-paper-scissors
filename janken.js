let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

let result;

function computerPlay() {
  let compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
    default:
      break;
  }

  //console.log("Computer choice: " + compChoice);
}

function letsPlayAGame(playerSelection, computerSelection) {
  playerSelection = prompt("Choose your weapon!: ");
  computerSelection = computerPlay();

  let choice = playerSelection.toUpperCase();

  if (choice == "ROCK") {
    switch (computerSelection) {
      case "ROCK":
        return (result = "It's a tie");
        break;
      case "PAPER":
        result = "You Lose! Paper beats Rock!";
        return (computerScore += 1);
        break;
      case "SCISSORS":
        result = "You Win! Rock beats Scissors!";
        return (playerScore += 1);
        break;
      default:
        break;
    }
  } else if (choice == "PAPER") {
    switch (computerSelection) {
      case "ROCK":
        result = "You win! Paper beats Rock!";
        return (playerScore += 1);
        break;
      case "PAPER":
        return (result = "It's a tie");
        break;
      case "SCISSORS":
        result = "You Lose! Scissors beat Paper!";
        return (computerScore += 1);
        break;
      default:
        break;
    }
  } else if (choice == "SCISSORS") {
    switch (computerSelection) {
      case "ROCK":
        result = "You lose! Rock beats Scissors!";
        return (computerScore += 1);
        break;
      case "PAPER":
        result = "You win! Scissors beat Paper!";
        return (playerScore += 1);
        break;
      case "SCISSORS":
        return (result = "It's a tie");
        break;
      default:
        break;
    }
  } else {
    return "Please choose Rock, Paper or Scissors";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    letsPlayAGame(playerSelection, computerSelection);
    console.log(result);
  }

  return `The final score is You:${playerScore} Computer:${computerScore}`;
}

console.log(game());
