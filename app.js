
// Obtain all elements we want to use


// Obtain all elements we want to use

// Score board elements
const playerScore = document.querySelector('.player-score');
const elroyScore = document.querySelector('.elroy-score');
let playerScoreVale = 0;
let elroyScoreValue = 0;

// Game board Elements
let gameContainer = document.querySelector('.game-container');
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

// Outcome/results board elements
let outcomeContainer = document.querySelector('.game-outcome-container')
let resultText = document.querySelector('.result-text');
let playerChoiceText = document.querySelector('.players-selection-text');
let elroyChoiceText = document.querySelector('.elroys-selection-text');
let playerChoiceToken = document.querySelector('#player');
let elroyChoiceToken = document.querySelector('#elroy');
let resetButton = document.querySelector('.result-button');

let elroysChoice;

// Find ID of clicked element
rock.addEventListener('click', findId);
paper.addEventListener('click', findId);
scissors.addEventListener('click', findId);

let itemClicked;

function findId() {
    itemClicked = event.srcElement.id;
    gameContainer.classList.add('hide');
    outcomeContainer.classList.add('show-flex');

    if (itemClicked === "rock") {
        playerChoiceText.innerHTML = "Rock";
        playerChoiceToken.classList.add('rock-token');
    } else if (itemClicked === "paper") {
        playerChoiceText.innerHTML = "paper";
        playerChoiceToken.classList.add('paper-token');
    } else if (itemClicked === "scissors") {
        playerChoiceText.innerHTML = "Scissors";
        playerChoiceToken.classList.add('scissors-token');
    }

    if (playerScoreVale === 5 || elroyScoreValue === 5) {
        if (playerScoreVale === 5) {
            resultText.innerHTML = "Well done, you beat Elroy";
        } else {
            resultText.innerHTML = "Elroy won this game, better luck next time.";
        }
        resetButton.innerHTML = "Restart Game";
    }

    elroyPick();
    results();

    outCome(itemClicked);

}

resetButton.addEventListener('click', finishRound);


function resetGame() {

    if (playerScoreVale === 5 || elroyScoreValue === 5) {
        resetButton.innerHTML = "Next Round";
        playerScoreVale = 0;
        playerScore.innerHTML = playerScoreVale;
        elroyScoreValue = 0;
        elroyScore.innerHTML = elroyScoreValue;
    }

    gameContainer.classList.remove('hide');
    outcomeContainer.classList.remove('show-flex');
    clearIcons();
    //resultText.innerHTML = "";
    resultText.innerHTML = "";
}

function finishRound() {
    resetGame();
}

function elroyPick() {
    let x = Math.floor((Math.random() * 9) + 1);
    if (1 <= x && x <= 3) {
        elroyChoiceToken.classList.add('rock-token');
        elroyChoiceText.innerHTML = "Rock";
        elroysChoice = "rock";
    } else if (4 <= x && x <= 6) {
        elroyChoiceToken.classList.add('paper-token');
        elroyChoiceText.innerHTML = "Paper";
        elroysChoice = "paper";
    } else if (7 <= x && x <= 9) {
        elroyChoiceToken.classList.add('scissors-token');
        elroyChoiceText.innerHTML = "Scissors";
        elroysChoice = "scissors";
    }
}

function clearIcons() {
    outcomeContainer.classList.remove('show-flex');
    playerChoiceToken.classList.remove('rock-token');
    playerChoiceToken.classList.remove('paper-token');
    playerChoiceToken.classList.remove('scissors-token');
    elroyChoiceToken.classList.remove('rock-token');
    elroyChoiceToken.classList.remove('paper-token');
    elroyChoiceToken.classList.remove('scissors-token');
}

function outCome(v) {
    if (v === elroysChoice) {
        resultText.innerHTML = "Draw";
    }
    else if (((v === "rock") && (elroysChoice === 'scissors')) ||
        ((v === "paper") && (elroysChoice === 'rock')) ||
        ((v === "scissors") && (elroysChoice === 'paper'))) {
        resultText.innerHTML = "You Win!!";
    } else if (((v === "rock") && (elroysChoice === 'paper')) ||
        ((v === "paper") && (elroysChoice === 'scissors')) ||
        ((v === "scissors") && (elroysChoice === 'rock'))) {
        resultText.innerHTML = "You Loose, Elroy Wins";
    }
}

function results() {
    if (resultText.innerHTML === "You Win!!") {
        playerScoreVale = playerScoreVale + 1;
        playerScore.innerHTML = playerScoreVale;
    } else if (resultText.innerHTML === "You Loose, Elroy Wins") {
        elroyScoreValue = elroyScoreValue + 1;
        elroyScore.innerHTML = elroyScoreValue;
    } else if (resultText.innerHTML === "Draw") {
        playerScoreVale = playerScoreVale;
        elroyScoreValue = elroyScoreValue;
    }
}