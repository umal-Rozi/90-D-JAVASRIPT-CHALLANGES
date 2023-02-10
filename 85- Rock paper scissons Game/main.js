
const palyerText= document.querySelector("#playerText");
const ComputerText= document.querySelector("#ComputerText");
const resultText= document.querySelector("#resultText");
const choiceBtn= document.querySelectorAll(".choicebtn");
let palyer;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener("click", () =>{

    palyer= button.textContent;
    computerTurn();
    palyerText.textContent = `Player: ${palyer}`;
    ComputerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
     
    switch (randNum) {
        case 1:
            computer ="Rock";
            break;
        case 2:
            computer ="Paper";
            break;
        case 3:
            computer ="Scissors";
            break;
    }
}

function checkWinner(){
    if (palyer == computer) {
        return "Draw!";
    }
    else if (computer == "Rock") {
        return ( palyer == "Paper") ? "YOU WIN!" : "YOU LOSE!";

    }
    else if (computer == "Paper") {
        return ( palyer == "Scissors") ? "YOU WIN!" : "YOU LOSE!";

    }
    else if (computer == "Scissors") {
        return ( palyer == "Rock") ? "YOU WIN!" : "YOU LOSE!";

    }
}