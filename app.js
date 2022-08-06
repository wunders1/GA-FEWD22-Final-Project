
// Obtain all elements we want to use


// Obtain all elements we want to use

// Player entry form elements
let playerEntryBackground = document.querySelector('.form-background');
let newPlayerModal = document.querySelector('.form-container');
let nameForm = document.querySelector('.name-form');
let pname = document.querySelector('#fname');
let playerNameBox = document.querySelector('.player-name');
let errorMessage = document.querySelector('.name-error');

// let letsPlayButton = document.querySelector('.letsPlayButton');
let playerName;

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
let outcomeContainer = document.querySelector('.game-outcome-container');
let resultText = document.querySelector('.result-text');
let playerChoiceText = document.querySelector('.players-selection-text');
let elroyChoiceText = document.querySelector('.elroys-selection-text');
let playerChoiceToken = document.querySelector('#player');
let elroyChoiceToken = document.querySelector('#elroy');
let resetButton = document.querySelector('.result-button');
let newPlayerButton = document.querySelector('.change-player-name-button');

let elroysChoice;

// Find ID of clicked element
rock.addEventListener('click', findId);
paper.addEventListener('click', findId);
scissors.addEventListener('click', findId);

let itemClicked;

// Find ID's for rules modal
let rulesBackground = document.querySelector('.rules');
let rulesModal = document.querySelector('.rules-content');
let closeButton = document.querySelector('.close');
let rulesButtonTop = document.querySelector('.rules-box-top');
let rulesButtonBottom = document.querySelector('.rules-box-bottom');


nameForm.addEventListener('submit', updatePlayerName);


function updatePlayerName(event) {
    event.preventDefault();
    playerName = pname.value;
    if (playerName.length > 1) {
        playerNameBox.innerHTML = playerName;
        errorMessage.classList.remove('show-block');
        playerEntryBackground.classList.add('hide');
    } else {
        errorMessage.classList.add('show-block');
    }
}


newPlayerButton.addEventListener('click', resetName);

function resetName() {
    playerName.innerHTML = "";
    nameForm.reset();
    playerEntryBackground.classList.remove('hide');
    resetGame();
}





function findId() {
    itemClicked = event.srcElement.id;
    gameContainer.classList.add('hide');
    outcomeContainer.classList.add('show-flex');
    rulesButtonBottom.classList.add('hide');

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

    elroyPick();
    outCome(itemClicked);
    results();

    if (playerScoreVale === 5 || elroyScoreValue === 5) {
        if (playerScoreVale === 5) {
            resultText.innerHTML = "Well done, you beat Elroy";
        } else {
            resultText.innerHTML = "Elroy won this game, better luck next time.";
        }
        resetButton.innerHTML = "Let's Play Again";
        newPlayerButton.classList.add('show-block');
    }
}

resetButton.addEventListener('click', finishRound);

function resetGame() {

    if (playerScoreVale === 5 || elroyScoreValue === 5) {
        //resetButton.innerHTML = "Let's Play Again";
        playerScoreVale = 0;
        playerScore.innerHTML = playerScoreVale;
        elroyScoreValue = 0;
        elroyScore.innerHTML = elroyScoreValue;
    }

    resetButton.innerHTML = "Next Round";
    gameContainer.classList.remove('hide');
    outcomeContainer.classList.remove('show-flex');
    rulesButtonBottom.classList.remove('hide');
    newPlayerButton.classList.remove('show-block');
    clearIcons();
    //resultText.innerHTML = "";
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
        //return player;
        resultText.innerHTML = "You Win!!";
    } else if (((v === "rock") && (elroysChoice === 'paper')) ||
        ((v === "paper") && (elroysChoice === 'scissors')) ||
        ((v === "scissors") && (elroysChoice === 'rock'))) {
        //return elroy;
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
    }
    else if (resultText.innerHTML === "Draw") {
        playerScoreVale = playerScoreVale;
        elroyScoreValue = elroyScoreValue;
    }
}

// let rulesBackground = document.querySelector('.rules');
// let rulesModal = document.querySelector('.rules-content');
// let closeButton = document.querySelector('.close');
// let rulesButtonTop = document.querySelector('.rules-box-top');
// let rulesButtonBottom = document.querySelector('.rules-box-bottom');


function showRules() {
    rulesBackground.classList.add('rules-show');
}

function hideRules() {
    rulesBackground.classList.remove('rules-show');
}

rulesButtonTop.addEventListener('click', showRules);
rulesButtonBottom.addEventListener('click', showRules);
closeButton.addEventListener('click', hideRules);