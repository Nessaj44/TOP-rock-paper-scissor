let computerScore = 0;
let playerScore = 0;
let draw = 0;
const startGameShowHide = document.getElementById('startGame');
const playAgainShowHide = document.getElementById('playAgain');

function computerChoice() {
  const weapons = ['Rock', 'Paper', 'Scissor'];
  let cWeapon = weapons[Math.floor(Math.random() * weapons.length)];
  return document.getElementById('computerChoice').innerHTML = cWeapon;
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    draw++;
    document.getElementById('result').innerHTML = 'tie';
    document.getElementById('winner').innerHTML = 'draw';
  } else if(
    (playerSelection === 'Rock' && computerSelection === 'Scissor') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissor' && computerSelection === 'Paper')
  ){
    playerScore++;
    document.getElementById('result').innerHTML = 'Beats';
    document.getElementById('winner').innerHTML = 'You win';
    document.getElementById('playerScore').innerHTML = `Player score: ${playerScore}`;
    console.log(playerScore);
  } else {
    computerScore++;
    document.getElementById('result').innerHTML = 'Lost to';
    document.getElementById('winner').innerHTML = 'You lose';
    document.getElementById('computerScore').innerHTML = `Computer score: ${computerScore}`;
    console.log(computerScore);
  }
  if(playerScore === 5) {
    document.getElementById('gameWinner').innerHTML = 'Congrats';
    playAgainShowHide.style.display = 'block';
    startGameShowHide.style.visibility = 'hidden';
  } else if (computerScore === 5) {
    document.getElementById('gameWinner').innerHTML = 'Better luck next time';
    playAgainShowHide.style.display = 'block';
    startGameShowHide.style.visibility = 'hidden';
  } 
}

function rock() {
  const rock = document.getElementById('playerChoice').innerHTML = 'Rock';
  return rock;
}
function paper() {
  const paper = document.getElementById('playerChoice').innerHTML = 'Paper';
  return paper;
}
function scissor() {
  const scissor = document.getElementById('playerChoice').innerHTML = 'Scissor';
  return scissor;
}

function getPlayerChoice() {
  const choice = document.getElementById('playerChoice').innerHTML;
  return choice;
}

function startGame() {
  return playRound(getPlayerChoice(), computerChoice());
}

function playAgain() {
  if(computerScore === 5 || playerScore === 5) {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('gameWinner').innerHTML = '';
    document.getElementById('winner').innerHTML = '';
    document.getElementById('playerChoice').innerHTML = '';
    document.getElementById('computerChoice').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    playAgainShowHide.style.display = 'none';
    startGameShowHide.style.visibility = 'visible'
  }
}
