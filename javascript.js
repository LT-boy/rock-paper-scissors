// // Randomly returned values: Rock, Paper or Scissors
// function computerPlay() {
// 	if (Math.floor(Math.random() * 3) === 0) {
// 		return "Rock";
// 	} else if (Math.floor(Math.random() * 3) === 1) {
// 		return "Paper";
// 	} else {
// 		return "Scissors";
// 	}
// }


// // Inputs player and computer selection values and returns result
// function playRound(playerSelection, computerSelection) {
// 	if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
// 		let result = "It's a tie! " + capitalizeFirstLetter(playerSelection) + " vs " + computerSelection;
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "scissors")) {
// 		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection;
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "rock")) {
// 		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection;
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "paper")) {
// 		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beat " + computerSelection;
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "paper")) {
// 		let result = "You lose! " + computerSelection + " beats " + capitalizeFirstLetter(playerSelection);
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "scissors")) {
// 		let result = "You lose! " + computerSelection + " beat " + capitalizeFirstLetter(playerSelection);
// 		return result;
// 	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "rock")) {
// 		let result = "You lose! " + computerSelection + " beats " + capitalizeFirstLetter(playerSelection);
// 		return result;
// 	} else {
// 		let result = "Incorrect selection! Try again."
// 		return result;
// 	}
// }


// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }


// // Main game function to play 5 rounds, show round and calculate score
// function game() {
// 	let yourScore = 0;
// 	let computerScore = 0;
// 	for (let i = 0; i < 5; i++) {
// 		result = playRound(prompt("Make your selection (Rock, Paper, Scissors): "), computerPlay());
// 		if (result.includes("win")) {
// 			console.log("Round: " + (i + 1) + " of 5");
// 			console.log(result);
// 			console.log("Score: " + (yourScore + 1) + " - " + computerScore);
// 			yourScore = yourScore + 1;
// 		} else if (result.includes("lose")) {
// 			console.log("Round: " + (i + 1) + " of 5");
// 			console.log(result);
// 			console.log("Score: " + yourScore + " - " + (computerScore + 1));
// 			computerScore = computerScore + 1;
// 		} else if (result.includes("tie")) {
// 			console.log("Round: " + (i + 1) + " of 5");
// 			console.log(result);
// 			console.log("Score: " + (yourScore) + " - " + (computerScore));
// 		} else {
// 			console.log("Round: " + (i + 1) + " of 5");
// 			console.log(result);
// 			console.log("Score: " + yourScore + " - " + computerScore);
// 			i = i - 1;
// 		}
// 	}
// 	console.log("*************************");
// 	console.log("Final score: " + yourScore + " - " + computerScore);
// 	if (yourScore > computerScore) {
// 		console.log("You win the game!!!");
// 		console.log("*************************");
// 	} else if (yourScore < computerScore) {
// 		console.log("You lose...");
// 		console.log("*************************");
// 	} else {
// 		console.log("It's a tie.");
// 		console.log("*************************");
// 	}
// }


// // Run game
// game();