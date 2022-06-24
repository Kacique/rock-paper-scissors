let playerScore = 0;
let computerScore = 0;

let playerSelection;
let computerSelection;

let result;

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
    switch (computerChoice) {
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
    switch (computerChoice) {
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
  letsPlayAGame(playerSelection, computerPlay());
  console.log(result);
  console.log(`Current score is You:${playerScore} Computer:${computerScore}`);
  if (playerScore == 5 || computerScore == 5) {
    console.log("Game Over");
    playerScore = 0;
    computerScore = 0;
  }
}

/**
 * In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. 

Add an event listener to the buttons that call your playRound 
function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

Add a div for displaying results and change all of your console.logs into DOM methods.

Display the running score, and announce a winner of the game once one player reaches 5 points.

You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
That’s OK! Reworking old code is an important part of a programmer’s life.

Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
 */
