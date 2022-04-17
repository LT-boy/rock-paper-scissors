// Randomly returned values: Rock, Paper or Scissors
function computerPlay() {
	if (Math.floor(Math.random() * 3) === 0) {
		return "Rock";
	} else if (Math.floor(Math.random() * 3) === 1) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
		let result = "It's a draw! " + playerSelection + " and " + computerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "scissors")) {
		let result = "You win! " + playerSelection + " beats " + computerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "rock")) {
		let result = "You win! " + playerSelection + " beats " + computerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "paper")) {
		let result = "You win! " + playerSelection + " beat " + computerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "paper")) {
		let result = "You lose! " + computerSelection + " beats " + playerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "scissors")) {
		let result = "You lose! " + computerSelection + " beat " + playerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "rock")) {
		let result = "You lose! " + computerSelection + " beats " + playerSelection;
		return result;
	} else {
		let result = "Incorrect selection!"
		return result;
	}
}



console.log(playRound(prompt("Make your selection (Rock, Paper, Scissors): "), computerPlay()));