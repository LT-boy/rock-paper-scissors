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

// Inputs player and computer selection values and returns result
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
		let result = "Incorrect selection! Try again."
		return result;
	}
}

// Main game function to play 5 rounds, show round and calculate score
function game() {
	let yourScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		result = playRound(prompt("Make your selection (Rock, Paper, Scissors): "), computerPlay());
		if (result.includes("win")) {
			console.log(result);
			console.log("Round: " + (i + 1) + " of 5. Score: " + (yourScore + 1) + " - " + computerScore);
			yourScore = yourScore + 1;
		} else if (result.includes("lose")) {
			console.log(result);
			console.log("Round: " + (i + 1) + " of 5. Score: " + yourScore + " - " + (computerScore + 1));
			computerScore = computerScore + 1;
		} else if (result.includes("draw")) {
			console.log(result);
			console.log("Round: " + (i + 1) + " of 5. Score: " + yourScore + " - " + computerScore);
		} else {
			console.log(result);
			console.log("Round: " + (i + 1) + " of 5. Score: " + yourScore + " - " + computerScore);
			i = i - 1;
		}
	}
}

game()