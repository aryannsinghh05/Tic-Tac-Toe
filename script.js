let boxes = document.querySelectorAll(".cell");
let resetbtn = document.querySelector(".reset-btn");
let statustext = document.querySelector(".status");

let currentPlayer = "X";

let board = ["", "", "", "", "", "", "", "", ""];

let gameActive = true;


let winning = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

function checkresult(){
    for (let i of winning){
        let a = i[0];
        let b = i[1];
        let c = i[2];
        if(board[a] !=""&& board[a] === board[b] && board[a] === board[c]){
        statustext.textContent = ` CONGRATULATIONS \nPlayer ${board[a]} Wins!`;
        statustext.classList.add("win-text");
        gameActive = false;
        boxes.forEach(box => box.disabled = true);
        return;
        }
    }
    if (!board.includes("")) {
        statustext.textContent = "It's a draw!";
        gameActive = false;
        boxes.forEach(box => box.disabled = true);
    }
    
}

function resetGame() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;

    boxes.forEach(box => {
        box.textContent = "";
        box.disabled = false;
    });

    statustext.classList.remove("win-text");

    statustext.textContent = "Player X's Turn";
}


boxes.forEach((box)=>{
    box.addEventListener("click", clicked);
})
function clicked(event){
    if (!gameActive) return;
    let index = event.target.dataset.index;
    board[index]=currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.disabled = true;

    checkresult();
    if (!gameActive) return;

    if(currentPlayer==="X"){
        currentPlayer="O";
    }
    else{
        currentPlayer = "X";
    }
    statustext.textContent = `Player ${currentPlayer}'s Turn`
}

resetbtn.addEventListener("click", resetGame);

