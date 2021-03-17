//file to run all the scripts
let System = (() => {
    //let gameboard = [["X", "O", "X"], ["?", "X", "O"], ["X", "O", "X"]];
    let currentPlayer = 1;
    let player1;
    let player2;
    let gameStart = false;

    //add event to each button to move the correct value
    let allCells = document.querySelectorAll(".cell");
    for (let i = 0; i < allCells.length; i++){
        allCells[i].addEventListener("click", function(){
            if (Gameboard.publicCheckGame() == "nothing" && gameStart){
                
                console.log("here");
                let r = (allCells[i].id)[1];
                let c = (allCells[i].id)[4];
                if (currentPlayer == 1){
                    player1.publicMakeAMove(r, c);
                    currentPlayer = 2;
                } else {
                    player2.publicMakeAMove(r, c);
                    currentPlayer = 1;
                }

                if (Gameboard.publicCheckGame() != "nothing"){
                    let resultDiv = document.querySelector("#result");
                    resultDiv.textContent = Gameboard.publicCheckGame();
                }
            }
        });
    }

    let publicStartGame = function(playerX, playerY){
        player1 = Player(playerX, "X");
        player2 = Player(playerY, "Y");
        currentPlayer = 1;
        gameStart = true;
        DisplayController.publicDisplayBoard(Gameboard.publicGetGameboard());
    };

    let publicReset = function(){
        currentPlayer = 1;
        gameStart = false;
        DisplayController.publicDisplayBoard(Gameboard.publicGetGameboard());
    };

    return {
        publicStartGame,
        publicReset
    };
})();

//link startGameBtn to startGame function
let startGameBtn = document.querySelector("#startGameBtn");
let playerXfield = document.querySelector("#playerXfield");
let playerYfield = document.querySelector("#playerYfield");

startGameBtn.addEventListener('click', () => {
    let player1 = playerXfield.value;
    let player2 = playerYfield.value;

    if (player1 == "" || player2 == "") alert("Please enter all the names!");
    else {
        System.publicStartGame(player1, player2);
    }
});

//add reset functionality
let resetGameBtn = document.querySelector("#resetGameBtn");
resetGameBtn.addEventListener("click", function(){
    playerXfield.value = "";
    playerYfield.value = "";

    let resultDiv = document.querySelector("#result");
    resultDiv.textContent = "";  
    
    //reset gameboard
    Gameboard.publicResetGameboard();
    console.log(Gameboard.publicGetGameboard());

    //reset the gamestate
    System.publicReset();
});

