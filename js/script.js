let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector('#msg');
let userScorePara = document.querySelector('#user_Score');
let compScorePara = document.querySelector('#computer_Score');
let computerGeneratedDiv = document.querySelector('.computerChoice');

// Generate random choice
const genComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

// Draw game code
const drawGame = () => {
    msg.innerText = "Game draw!";
    msg.style.backgroundColor = 'blue';
}

// Show winner
const showWinner = (userWin, choiceId, computerChoice) => {
    if (userWin) {
        userscore++;
        msg.innerText = `You win! ${choiceId} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
        userScorePara.innerText = userscore;
    } else {
        compscore++;
        msg.innerText = `You lose! ${computerChoice} beats ${choiceId}`;
        msg.style.backgroundColor = 'red';
        compScorePara.innerText = compscore;
    }
}

// Update computer generated choice image
const updateComputerGeneratedImage = (computerChoice) => {
    computerGeneratedDiv.className = 'computergenerated'; // Reset class name
    if (computerChoice === 'rock') {
        computerGeneratedDiv.classList.add('rock1');
    } else if (computerChoice === 'paper') {
        computerGeneratedDiv.classList.add('paper1');
    } else if (computerChoice === 'scissors') {
        computerGeneratedDiv.classList.add('s1');
    }
}

// Play game
const playGame = (choiceId) => {
    const computerChoice = genComputerChoice();
    updateComputerGeneratedImage(computerChoice);
    if (choiceId === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceId, computerChoice);
    }
}

choices.forEach((choice) => {
    const choiceId = choice.getAttribute("id");
    choice.addEventListener('click', () => {
        playGame(choiceId);
    });
});
