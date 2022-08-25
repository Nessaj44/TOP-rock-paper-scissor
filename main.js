function compterChoice() {
  const weapons = ['rock', 'paper', 'scissor'];
  return weapons[Math.floor(Math.random() * weapons.length)]
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    draw++;
    console.log(`${playerSelection} ties ${computerSelection}`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`) 
  } else if (playerSelection=== 'rock' && computerSelection === 'paper') {
    computerScore++;
    console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
    computerScore++;
    console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
    computerScore++;
    console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  for(let i = 0; i < 3; i++) {
    let playerChoice = prompt('Rock Paper Scissor').toLowerCase();
    let computerChoice = compterChoice();
    console.log(playRound(playerChoice, computerChoice));
  }
}

let computerScore = 0;
let playerScore = 0;
let draw = 0;
function checkWinner() {
  if(playerScore > computerScore) {
    console.log('You won!');
  } else if (computerScore < playerScore) {
    console.log('You Lost!');
  } else {
    console.log('draw');
  }
}

game();
console.log(`computer score: ${computerScore} \nplayer score: ${playerScore}`)
checkWinner();
