
const cell = document.querySelectorAll(".cell");
const statusTex = document.querySelector("#statusTex");
const restartBtn = document.querySelector("#restBtn");
const winconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "",""];
let currentPlayer = "X";
let running = false;

intializeGame();

function intializeGame() {
    cell.forEach(cell => cell.addEventListener ("click",  cellClicked));
    restartBtn.addEventListener("click",restarGame);
    statusTex.textContent = `${currentPlayer}'S turn`;
    running= true;

}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }
    updatecell(this, cellIndex);
    checkWinner();

}
function updatecell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent= currentPlayer;
    
}
function changeplayer(){
    currentPlayer =( currentPlayer == "X") ? "O" : "X";
    statusTex.textContent = `${currentPlayer} 'S trun `;

}
function checkWinner(){
    let roundWon =false;

    for (let i = 0; i < winconditions.length; i++) {
        const condition = winconditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];
        

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }
        if (cellA == cellB && cellB == cell) {
            roundWon = true;
            break;
        }
        
    }
    if (roundWon) {
        statusTex.textContent = `${currentPlayer} !wins`;
        running= false;
    }
    else if (!options.includes("")){
        statusTex.textContent = `Draw!`;
        running = false;
    }
    else{
        changeplayer();
    }

}
function restarGame(){
    currentPlayer ="X";
    options = ["", "", "", "", "", "", "", "",""];
    statusTex.textContent= `${currentPlayer}'S turn`;
    cell.forEach(cell =>  cell.textContent ="");
    running= true;

}

