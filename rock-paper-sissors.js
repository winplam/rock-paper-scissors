// Computer will randomly return either Rock, Paper, or Scissors
function computerPlay() {
    switch (Math.floor((Math.random() * 3) + 1)) {
        case 1:
            return "ROCK";
        case 2:
            return "PAPER";
        case 3:
            return "SCISSORS";
    }
}

// Player will be prompted to chose Rock, Paper or Scissor
function playerSelection() {
    let selection = prompt("Take your pick of Rock, Paper, or Scissors :)").toUpperCase();
    while (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS" && selection != "SCISSOR") {
        selection = prompt("Please enter one of the following choices: Rock, Paper, or Scissors.").toUpperCase();
    }
    switch (selection) {
        case "ROCK":
            return "ROCK";
        case "PAPER":
            return "PAPER";
        case "SCISSORS":
        case "SCISSOR":
            return "SCISSORS";
    }
}

// It's the computers turn to play
function computerSelection() {
    return computerPlay();
}

// Determine who when or if it's a tie
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK") {
        switch (computerSelection) {
            case "ROCK":
                return "It's a tie!";
            case "PAPER":
                return "Sorry... You lose! Paper beast Rock.";
            case "SCISSORS":
                return "Congratulations! You win! Rock beats scissors.";
        }
    } else if (playerSelection == "PAPER") {
        switch (computerSelection) {
            case "ROCK":
                return "Congratulations! You win! Paper beats rock.";
            case "PAPER":
                return "It's a tie!";
            case "SCISSORS":
                return "Sorry... You lose! Scissors beast Paper.";
        }
    } else if (playerSelection == "SCISSORS") {
        switch (computerSelection) {
            case "ROCK":
                return "Sorry... You lose! Rock beast Scissors.";
            case "PAPER":
                return "Congratulations! You win! Scissors beats paper.";
            case "SCISSORS":
                return "It's a tie!";
        }
    } else {
        return "ERROR! Nothing match.";
    }
}

// Play a game of Rock, Paper, Scissors
function game() {
    for (var i = 0; i < 5; i++) {
        console.log("Round " + i + ": " + playRound(playerSelection(), computerSelection()))
    }
}

game()