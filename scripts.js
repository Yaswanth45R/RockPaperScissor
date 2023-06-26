// Rock Paper Scissor Played from the console
const humanScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");
const draw = document.querySelector(".draw");
const btns = document.querySelectorAll("button");
let player = 0;
let computer = 0;
btns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    let playerSelection = this.value;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result == "computer") {
      computer++;
      computerScore.textContent = `Computer Score : ${computer}`;
      console.log("COMPUTER has won this Round");
      draw.textContent = ``;
    } else if (result == "player") {
      player++;
      humanScore.textContent = `Human Score : ${player}`;
      console.log("PLAYER has won this Round");
      draw.textContent = ``;
    } else if (result == "draw") {
      draw.textContent = `It's a DRAW continue playing`;
      console.log("It's a DRAW play again");
    }

    if (player == 5) {
      draw.textContent = `Player has WON the game`;
      computer = 0;
      player = 0;
      computerScore.textContent = `Computer Score : ${computer}`;
      humanScore.textContent = `Human Score : ${player}`;
    } else if (computer == 5) {
      draw.textContent = `Computer has WON the game`;
      computer = 0;
      player = 0;
      computerScore.textContent = `Computer Score : ${computer}`;
      humanScore.textContent = `Human Score : ${player}`;
    }
  })
);

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
  } else if (playerSelection == computerSelection) {
    return "draw";
  }
}
//
//
//
//function that plays 5 rounds and declare the winner
// function game() {
//   let player = 0;
//   let computer = 0;
//   for (let i = 0; i < 5; i++) {
//     //let playerSelection = prompt("Enter your sign (rock,paper,scissor)");
//     let computerSelection = getComputerChoice();
//     console.log(
//       `computers choice is ${computerSelection}, players choice is ${playerSelection}`
//     );
//     let result = playRound(playerSelection, computerSelection);

//     if (result == "player") {
//       player++;
//       console.log(player);
//     } else if (result == "computer") {
//       computer++;
//       console.log(computer);
//     }
//   }
//   if (player > computer) {
//     console.log("Player Is the winner");
//   } else if (player == computer) {
//     console.log("It's A draw play again");
//   } else {
//     console.log("Computer is the winner");
//   }
// }

//game();
