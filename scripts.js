// Rock Paper Scissor Played from the console

//function to generate a computer choice

function getComputerChoice() {
  let num = Math.floor(Math.random() * 100);

  if ((num > 0) & (num < 33)) {
    return "rock";
  } else if ((num >= 33) & (num < 66)) {
    return "paper";
  } else {
    return "scissor";
  }
}

//
//
//
// function that plays one round

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if ((playerSelection == "paper") & (computerSelection == "rock")) {
    return "player";
  } else if ((playerSelection == "paper") & (computerSelection == "scissor")) {
    return "computer";
  } else if ((playerSelection == "scissor") & (computerSelection == "rock")) {
    return "computer";
  } else if ((playerSelection == "scissor") & (computerSelection == "paper")) {
    return "player";
  } else if ((playerSelection == "rock") & (computerSelection == "scissor")) {
    return "player";
  } else if ((playerSelection == "rock") & (computerSelection == "paper")) {
    return "computer";
  }
}
//
//
//
//function that plays 5 rounds and declare the winner
function game() {
  let player = 0;
  let computer = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your sign (rock,paper,scissor)");
    let computerSelection = getComputerChoice();
    console.log(
      `computers choice is ${computerSelection}, players choice is ${playerSelection}`
    );
    let result = playRound(playerSelection, computerSelection);

    if (result == "player") {
      player++;
    } else if (result == "computer") {
      computer++;
    }
  }
  if (player > computer) {
    console.log("Player Is the winner");
  } else if (player == computer) {
    console.log("It's A draw play again");
  } else {
    console.log("Computer is the winner");
  }
}

game();
