// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice ( rock, paper, scissors) ?")

function getPlayerChoice(playerInput) {
    if (playerInput.toLowerCase() === 'bomb') {
        return 'Won';
    }
 
    var playerInputLower = playerInput.toLowerCase();
 
    if ((playerInputLower === 'rock') || (playerInputLower === 'paper') || (playerInputLower === 'scissors')) {
        return playerInputLower;
    } else {
        console.log("Error: Not right input use rock, paper or scissors");
    }
 }
 
 function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
 }
 
 function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tied';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Won';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Won';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Won';
    } else {
        return 'Lost';
    }
 }

 
 function playGame() {
    var uChoice = getPlayerChoice(prompt("Your choice ( rock, paper, scissors) ?"));
    var computerChoice = getComputerChoice();
    console.log('User chose: ' + uChoice);
    console.log('Computer chose: ' + computerChoice);
    console.log('Result: ' + findWinner(uChoice, computerChoice));
 }