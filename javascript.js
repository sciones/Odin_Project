let humanScore = 0;
let computerScore = 0;

let rock;
let paper;
let scissors;


document.addEventListener("DOMContentLoaded", function() {
    rock = document.querySelector("#rock");
    paper = document.querySelector("#paper");
    scissors = document.querySelector("#scissors");
    let start = document.querySelector("#start");
    start.addEventListener("click", startGame)
});

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return num;
}

function conversion(num) {
    switch (num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice(pressed) {
    let output = document.querySelector("#output");
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    let result = document.createElement("p");
    let choices = document.createElement("p");
    let score = document.createElement("p");

    let choice = 0;
    switch (pressed) {
        case "rock":
            choice = 0;
            break;
        case "paper":
            choice = 1;
            break;
        case "scissors":
            choice = 2;
            break;
    }

    let comp = getComputerChoice();

    result.textContent = gameCalc(choice, comp);

    output.appendChild(result);

    score.textContent = "Your score = " + humanScore + ", Computer score = " + computerScore;
    output.appendChild(score);

    choices.textContent = "You chose: " + conversion(choice)
    + ", Computer chose: " + conversion(comp);

    output.appendChild(choices);

    if (humanScore >= 5 || computerScore >= 5) {
        rock.removeEventListener("click", handleRockClick);
        paper.removeEventListener("click", handlePaperClick);
        scissors.removeEventListener("click", handleScissorsClick);
        let gameover = document.createElement("p");
        gameover.textContent = "-- GAME OVER --";
        output.appendChild(gameover);
    }
}

function gameCalc(human, comp) {
    if (human == comp) {
        return "Tie";
    }
    if (human > comp) {
        if (comp == 0  && human != 1) {
            computerScore += 1;
            return"You lose!";
        } else {
            humanScore += 1;
            return "You win!";
        }
    } 
    if (comp > human) {
        if (human == 0 && comp != 1) {
            humanScore += 1;
            return "You win!"
        } else {
            computerScore += 1;
            return "You lose!";
        }
    }
}

function handleRockClick() {
    getHumanChoice("rock");
}

function handlePaperClick() {
    getHumanChoice("paper");
}

function handleScissorsClick() {
    getHumanChoice("scissors");
}

function startGame() {
    humanScore = 0;
    computerScore = 0;
    let output = document.querySelector("#output");
    while (output.firstChild) {
        output.removeChild(output.firstChild);
    }
    rock.addEventListener("click", handleRockClick);
    paper.addEventListener("click", handlePaperClick);
    scissors.addEventListener("click", handleScissorsClick);
}