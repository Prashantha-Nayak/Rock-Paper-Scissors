let userscore = 0;
let compscore = 0;
let roundsPlayed = 0; // ✅ Track number of rounds

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

// Draw game
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

// Update computer generated image
const updateComputerGeneratedImage = (computerChoice) => {
    computerGeneratedDiv.className = 'computergenerated'; // Reset class
    if (computerChoice === 'rock') {
        computerGeneratedDiv.classList.add('rock1');
    } else if (computerChoice === 'paper') {
        computerGeneratedDiv.classList.add('paper1');
    } else if (computerChoice === 'scissors') {
        computerGeneratedDiv.classList.add('s1');
    }
}

// Final result after 10 moves
const showFinalResult = () => {
    if (userscore > compscore) {
        msg.innerText = "🎉 Game Over! You are the final winner!";
        msg.style.backgroundColor = 'green';
    } else if (compscore > userscore) {
        msg.innerText = "😞 Game Over! Computer wins the game!";
        msg.style.backgroundColor = 'red';
    } else {
        msg.innerText = "🤝 Game Over! It's a tie!";
        msg.style.backgroundColor = 'gray';
    }

    // Disable further clicks
    choices.forEach(choice => {
        choice.style.pointerEvents = 'none';
    });
}

// Play game
const playGame = (choiceId) => {
    if (roundsPlayed >= 10) return;

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

    roundsPlayed++; // ✅ Increment round count

    if (roundsPlayed === 10) {
        setTimeout(showFinalResult, 500); // ✅ Show result after a short delay
    }
}

