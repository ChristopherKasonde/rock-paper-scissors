// Rock Paper Scissors Game
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  choice = prompt("Please enter rock, paper, or scissors:");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();

/*
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const validChoices = ["rock", "paper", "scissors"];
  const choice = prompt("Please enter rock, paper, or scissors:")
    ?.toLowerCase()
    .trim();

  if (!validChoices.includes(choice)) {
    console.log("Invalid input! Defaulting to rock.");
    return "rock";
  }
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "tie";
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  )
    return "human";
  return "computer";
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "tie") {
      console.log(`Round ${i + 1}: It's a tie! Both chose ${humanChoice}.`);
    } else if (result === "human") {
      humanScore++;
      console.log(
        `Round ${i + 1}: You win! ${humanChoice} beats ${computerChoice}.`,
      );
    } else {
      computerScore++;
      console.log(
        `Round ${i + 1}: You lose! ${computerChoice} beats ${humanChoice}.`,
      );
    }
  }

  console.log(`\nFinal Score — You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) console.log("You win the game!");
  else if (computerScore > humanScore)
    console.log("Computer wins the game!");
  else console.log("It's a draw!");
}

playGame();
*/
