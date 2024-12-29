let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice;
  if (randomNumber < 1 / 3 && randomNumber >= 0) {
    computerChoice = "rock";
  } else if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
    computerChoice = "paper";
  } else if (randomNumber < 1 && randomNumber >= 2 / 3) {
    computerChoice = "scissors";
  }

  return computerChoice;

}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt("Type 1 of the 3 choices - Rock, Paper, or Scissors ");
  return humanChoice;
}

// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {

}