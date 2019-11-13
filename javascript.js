// select elements
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const startMessage = document.getElementById('startMessage');
const scoreReport = document.getElementById('scoreReport');

// player and computer Score
let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

// get the game started
function initializeButtons() {
    rock.addEventListener("click", function () {
        playRound('Rock');
    });
    paper.addEventListener("click", function () {
        playRound('Paper');
    });
    scissors.addEventListener("click", function () {
        playRound('Scissors');
    });
}

// one function to control them all
function playRound(playerSelection) {
    startMessage.style.display = 'none';
    showPlayerHand(playerSelection);
    showRoundNumber(++roundNumber);
    const computerSelection = computerPlay();
    showComputerHand(computerSelection);
    updateScore(playerSelection, computerSelection);
    determineWinner(playerScore, computerScore);
}

// reveal what the player has chosen
function showPlayerHand(playerSelection) {
    const left = document.createElement('div');
    const playerHand = document.createElement('span');
    left.classList.add('left');
    playerHand.classList.add('playerHand');
<<<<<<< HEAD
    playerHand.id = `playerHand${roundNumber + 1}`;
=======
>>>>>>> 3803f206d10eb96bc2f830fc0601eb861cbad090
    playerHand.textContent = playerSelection;
    left.append(playerHand);
    scoreReport.append(left);
}

// display the round number
function showRoundNumber(roundNumber) {
    const center = document.createElement('div');
    center.classList.add('center');
    center.textContent = 'Round ' + roundNumber;
    scoreReport.append(center);
}

// computer picks a random hand
function computerPlay() {
    const chest = ["Rock", "Paper", "Scissors"];
    return chest[Math.round(0.5 + (Math.random() * chest.length)) - 1];
}

// reveal what the computer has chosen
function showComputerHand(computerSelection) {
    const right = document.createElement('div');
    const computerHand = document.createElement('span');
    right.classList.add('right');
    computerHand.classList.add('computerHand');
<<<<<<< HEAD
    computerHand.id = `computerHand${roundNumber}`;
=======
>>>>>>> 3803f206d10eb96bc2f830fc0601eb861cbad090
    computerHand.textContent = computerSelection;
    right.append(computerHand);
    scoreReport.append(right);
    // Add spacer between rounds
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    scoreReport.append(spacer);
}

// update the current scores
function updateScore(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return;
    } else if ((playerSelection == 'Rock' && computerSelection == 'Scissors')
        || (playerSelection == 'Paper' && computerSelection == 'Rock')
        || (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
<<<<<<< HEAD
        document.getElementById(`playerHand${roundNumber}`).classList.add('upperHand');
        document.getElementById('playerScore').textContent = (++playerScore).toString();
        return;
    } else {
        document.getElementById(`computerHand${roundNumber}`).classList.add('upperHand');
        document.getElementById('computerScore').textContent = (++computerScore).toString();
        return;
=======
        return document.getElementById('playerScore').textContent = (++playerScore).toString();
    } else {
        return document.getElementById('computerScore').textContent = (++computerScore).toString();
>>>>>>> 3803f206d10eb96bc2f830fc0601eb861cbad090
    }
}

// remove play area
function removePlayArea() {
    document.getElementById('rpsHeader').style.display = 'none';
    document.getElementById('rpsButtons').style.display = 'none';
    document.getElementById('rpsScoreboard').scrollIntoView();
}

// find out who won and show game over screen
function determineWinner(playerScore, computerScore) {
    if (playerScore == 3) {
        removePlayArea();
        document.getElementById('playerWins').style.display = 'block';
    }
    if (computerScore == 3) {
        removePlayArea();
        document.getElementById('computerWins').style.display = 'block';
    }
}

window.onload = initializeButtons();
