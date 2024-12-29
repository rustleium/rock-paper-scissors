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
  humanChoice = prompt("Type 1 of the 3 choices - Rock, Paper, or Scissors ").toLowerCase();
  return humanChoice;
}

// console.log(getHumanChoice())


function playGame() {
  function playRound(humanChoice, computerChoice) {
  
    if(humanChoice === computerChoice) {
      console.log(`You both picked ${computerChoice}. It's a Tie!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You win.`);
      
    } else {
      computerScore += 1;
      console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. Computer wins.`)
    }
    console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
  }
  
  playRound(getHumanChoice(), getComputerChoice());

}

for(let i = 1; i <= 5; i++) {
  playGame();
}
console.log(`FINAL SCORE - Your Score: ${humanScore} | Computer Score: ${computerScore}`)

if(humanScore > computerScore) {
  console.log(`You Won!`);
} else if (humanScore === computerScore) {
  console.log(`Game Tied.`)
} else {
  console.log(`Computer Won`)
}
