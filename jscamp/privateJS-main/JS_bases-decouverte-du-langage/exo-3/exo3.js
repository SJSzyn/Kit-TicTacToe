// you can write js here
console.log('exo-3');

// Part 1: Retrieve the user's choice
// Prompt the user to enter their choice (rock, paper, or scissors)
var playerInput = prompt("Your choice (rock, paper, scissors)?");


// Function to get the player's choice with case-insensitivity
function getPlayerChoice(playerInput) {
    return playerInput.toLowerCase(); // Convert the input to lowercase
}

// Part 2: Retrieve the program's choice
// Function to randomly generate the program's choice
function getProgramChoice() {
    var choices = ['rock', 'paper', 'scissors']; // Array of possible choices
    var randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index
    return choices[randomIndex]; // Return the choice at the random index
}

// Part 3: Compare the choices
// Function to determine the winner
function determineWinner(playerChoice, programChoice) {
    if (playerChoice === programChoice) {
        return "It's a tie!"; // If choices are the same, it's a tie
    } 
    // Rules to determine the winner
    if ((playerChoice === 'rock' && programChoice === 'scissors') ||
        (playerChoice === 'scissors' && programChoice === 'paper') ||
        (playerChoice === 'paper' && programChoice === 'rock')) {
        return "You win!"; // Scenarios where the player wins
    }
    return "Computer wins!"; // Otherwise, the computer wins
}

// Part 4: Announce the winner
// Function to play the game
function playGame() {
    var playerChoice = getPlayerChoice(playerInput); // Get the player's choice
    var programChoice = getProgramChoice(); // Get the program's choice
    console.log("You chose: " + playerChoice); // Display the player's choice
    console.log("Computer chose: " + programChoice); // Display the program's choice
    console.log(determineWinner(playerChoice, programChoice)); // Determine and display the winner
}

// Start the game
playGame();