let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }

  return computerChoice;

}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanChoice;

  humanChoice = prompt("Type one of these - rock, paper, or scissors");
  while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors"){
    humanChoice = prompt("Invalid input. Type one of these - rock, paper, or scissors");
  }

  return humanChoice;
}

// console.log(getHumanChoice())

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

function playGame() {
  
  for(let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound(getHumanChoice(), getComputerChoice());  
    console.log("=================================")
  }
}

playGame();

console.log(`FINAL SCORE - Your Score: ${humanScore} | Computer Score: ${computerScore}`)

if(humanScore > computerScore) {
  console.log(`You Won!`);
} else if (humanScore === computerScore) {
  console.log(`Game Tied.`)
} else {
  console.log(`Computer Won`)
}
