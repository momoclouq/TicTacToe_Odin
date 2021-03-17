//file to run all the scripts
let System = (() => {
    //let gameboard = [["X", "O", "X"], ["?", "X", "O"], ["X", "O", "X"]];

    let publicStartGame = function(playerX, playerY){
        let currentPlayer = 1;

        //create 2 players
        let player1 = Player(playerX, "X");
        let player2 = Player(playerY, "O");

        //add event to each button to move the correct value
        let allCells = document.querySelectorAll(".cell");
        for (let i = 0; i < allCells.length; i++){
            allCells[i].addEventListener("click", function(){
                if (Gameboard.publicCheckGame() == "nothing"){
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

        DisplayController.publicDisplayBoard(Gameboard.publicGetGameboard());
    };

    let publicReset = function(){
        publicStartGame();
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
    DisplayController.publicDisplayBoard(Gameboard.publicGetGameboard());

    //reset the gamestate
    System.publicReset();
});

