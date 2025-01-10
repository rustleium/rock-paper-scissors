let humanScore = 0;
let computerScore = 0;
let roundNo = 0;

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
  roundNo ++;
  round.textContent = `Round ${roundNo}`;
  const result = determineWinner(humanChoice, computerChoice);
  
  if(result === 'tie') {
    picks.textContent = `You both picked ${computerChoice}. It's a Tie!`;
  } else if (result === "human") {
    humanScore += 1;
    picks.textContent = `You picked ${humanChoice}. Computer picked ${computerChoice}. You win.`;
    
  } else {
    computerScore += 1;
    picks.textContent = `You picked ${humanChoice}. Computer picked ${computerChoice}. Computer wins.`;
  }
  score.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const score = document.querySelector(".score");
const round = document.querySelector(".round");
const picks = document.querySelector(".picks");

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));
