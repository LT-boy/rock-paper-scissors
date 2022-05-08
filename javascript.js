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
		let result = "It's a tie! " + capitalizeFirstLetter(playerSelection) + " vs " + computerSelection;
		return result;
	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "scissors")) {
		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection;
		playerScore += 1;
		return result;
	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "rock")) {
		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + computerSelection;
		playerScore += 1;
		return result;
	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "paper")) {
		let result = "You win! " + capitalizeFirstLetter(playerSelection) + " beat " + computerSelection;
		playerScore += 1;
		return result;
	} else if ((playerSelection.toLowerCase() == "rock") && (computerSelection.toLowerCase() == "paper")) {
		let result = "You lose.. " + computerSelection + " beats " + capitalizeFirstLetter(playerSelection);
		computerScore += 1;
		return result;
	} else if ((playerSelection.toLowerCase() == "paper") && (computerSelection.toLowerCase() == "scissors")) {
		let result = "You lose.. " + computerSelection + " beat " + capitalizeFirstLetter(playerSelection);
		computerScore += 1;
		return result;
	} else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection.toLowerCase() == "rock")) {
		let result = "You lose.. " + computerSelection + " beats " + capitalizeFirstLetter(playerSelection);
		computerScore += 1;
		return result;
	} else {
		let result = "Incorrect selection! Try again."
		return result;
	}
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


let playerScore = 0;
let computerScore = 0;

addScore(playerScore, computerScore);

// Run playRound function when user clicks a button
document.getElementById("rock-btn").addEventListener("click", function() {
		document.getElementById("result-text").innerHTML = playRound("rock", computerPlay());
		addScore(playerScore, computerScore);
		if(playerScore >= 5) {
			addWinnerText()
		}
		else if(computerScore >= 5) {
			addLoserText()
		}
		else {
		}
});
document.getElementById("paper-btn").addEventListener("click", function() {
		document.getElementById("result-text").innerHTML = playRound("paper", computerPlay());
		addScore(playerScore, computerScore);
		if(playerScore >= 5) {
			addWinnerText()
		}
		else if(computerScore >= 5) {
			addLoserText()
		}
		else {
		}
});
document.getElementById("scissors-btn").addEventListener("click", function() {
		document.getElementById("result-text").innerHTML = playRound("scissors", computerPlay());
		addScore(playerScore, computerScore);
		if(playerScore >= 5) {
			addWinnerText()
		}
		else if(computerScore >= 5) {
			addLoserText()
		}
		else {
		}
});


function addScore(playerScore, computerScore) {
	if(playerScore <= 5 && computerScore <= 5) {
		document.getElementById("score").innerHTML = "Player" + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + playerScore + " : " + computerScore + "&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp" + "Computer";
	}
}

function addWinnerText() {
	document.getElementById("final-result").innerHTML = "Congratulations! You WON the game!";
	document.getElementById("final-result").classList.add('win-result');
	document.getElementById("result-text").innerHTML = "";
}

function addLoserText() {
	document.getElementById("final-result").innerHTML = "Sorry, you LOST the game...";
	document.getElementById("final-result").classList.add('lose-result');
	document.getElementById("result-text").innerHTML = "";
}


