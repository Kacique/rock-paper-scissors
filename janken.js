let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

const resultDiv = document.querySelector(".resultDiv");
const h2 = document.createElement("h2");
h2.textContent = "Start";
resultDiv.appendChild(h2);

const humanScore = document.querySelector("#human");

const machineScore = document.querySelector("#machine");

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;

    game();
  });
});

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
}

function letsPlayAGame(playerChoice, computerChoice) {
  let choice = playerChoice;

  if (choice == "ROCK") {
    switch (computerChoice) {
      case "ROCK":
        return (h2.textContent = "It's a tie"); //(result = "It's a tie");
        break;
      case "PAPER":
        h2.textContent = "You Lose! Paper beats Rock!";
        return (computerScore += 1);
        break;
      case "SCISSORS":
        h2.textContent = "You Win! Rock beats Scissors!";
        return (playerScore += 1);
        break;
      default:
        break;
    }
  } else if (choice == "PAPER") {
    switch (computerChoice) {
      case "ROCK":
        h2.textContent = "You win! Paper beats Rock!";
        return (playerScore += 1);
        break;
      case "PAPER":
        return (h2.textContent = "It's a tie");
        break;
      case "SCISSORS":
        h2.textContent = "You Lose! Scissors beat Paper!";
        return (computerScore += 1);
        break;
      default:
        break;
    }
  } else if (choice == "SCISSORS") {
    switch (computerChoice) {
      case "ROCK":
        h2.textContent = "You lose! Rock beats Scissors!";
        return (computerScore += 1);
        break;
      case "PAPER":
        h2.textContent = "You win! Scissors beat Paper!";
        return (playerScore += 1);
        break;
      case "SCISSORS":
        return (h2.textContent = "It's a tie");
        break;
      default:
        break;
    }
  } else {
    return (h2.textContent = "Please choose Rock, Paper or Scissors");
  }
}

function game() {
  letsPlayAGame(playerSelection, computerPlay());

  humanScore.textContent = playerScore;
  machineScore.textContent = computerScore;

  console.log(`Current score is You:${playerScore} Computer:${computerScore}`);

  if (playerScore == 5) {
    console.log("Game Over");
    h2.textContent = "Game Over. You Win!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("Game Over");
    h2.textContent = "Game Over. You Lost!";
    playerScore = 0;
    computerScore = 0;
  }
}
