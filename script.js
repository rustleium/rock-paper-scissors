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


// console.log(getHumanChoice())

function determineWinner(humanChoice, computerChoice) {
  
  if(humanChoice === computerChoice) return "tie";
  
  if(
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    return 'human';
  } else {
    return 'computer';
  }
}

function playRound(humanChoice, computerChoice) {
  
  const result = determineWinner(humanChoice, computerChoice);
  
  if(result === 'tie') {
    console.log(`You both picked ${computerChoice}. It's a Tie!`);
  } else if (result === "human") {
    humanScore += 1;
    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. You win.`);
    
  } else {
    computerScore += 1;
    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}. Computer wins.`)
  }
  console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}`);
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
