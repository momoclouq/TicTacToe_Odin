//objects using factory functions
let Gameboard = (() => {
    let gameboardx = [];
    let DOMgameboard = document.querySelector("#gameboard");

    //private functions
    function createCell(row, col){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = `r${row}-c${col}`;
        cell.addEventListener("click", () => {
            
        });
        return cell;
    }

    let _privateCreateGameboard = function(){
        for (let r = 0; r <3; r++){
            //for inner gameboard
            let row = [];
            for (let c = 0; c < 3; c++){
                //add the cells to the DOM
                let cell = createCell(r, c);
                DOMgameboard.appendChild(cell);

                //add the cell to the inner gameboard for testing
                row.push("?");
            }
            gameboard.push(row);
        }
    }

    //return X-O if the game is finished
    //return nothing if the game is still happening
    //return draw otherwise
    let publicCheckGame = (gameboard) => {
        let end = true;

        for (let c = 0; c < 3; c++){
            let xResult = true;
            let yResult = true;
            for (let r = 0; r < 3; r++){
                if (gameboard[r][c] == "?") end = false;
                if (gameboard[r][c] != 'X') xResult = false;
                if (gameboard[r][c] != 'O') yResult = false;
            }
            if (xResult) return "X";
            if (yResult) return "O";
        }

        for (let r = 0; r < 3; r++){
            let xResult = true;
            let yResult = true;
            for (let c = 0; c < 3; c++){
                if (gameboard[r][c] != 'X') xResult = false;
                if (gameboard[r][c] != 'O') yResult = false;
            }
            if (xResult) return "X";
            if (yResult) return "O";
        }
        
        let xResult = true;
        let yResult = true;
        for (let r = 0, c = 0; r < 3 && c < 3; r++, c++){
            if (gameboard[r][c] != 'X') xResult = false;
            if (gameboard[r][c] != 'O') yResult = false;
        }
        if (xResult) return "X";
        if (yResult) return "O";

        xResult = true;
        yResult = true;
        for (let r = 2, c = 0; r >= 0 && c < 3; r--, c++){
            if (gameboard[r][c] != 'X') xResult = false;
            if (gameboard[r][c] != 'O') yResult = false;
        }
        if (xResult) return "X";
        if (yResult) return "O";

        if (end) return "draw";
        else return "nothing";
    }

    //public functions
    let publicGetGameboard = () => {
        return Array.from(gameboard);
    }

    //initialize the game board
    //_privateCreateGameboard();

    return {
        publicGetGameboard,
        publicCheckGame
    }
})();

let DisplayController = (() => {
    //public methods
    let publicDisplayBoard = function(gameboard) {
        for (let r = 0; r < gameboard.length; r++){
            for (let c = 0; c < gameboard.length; c++){
                //access the correct cell with row and col
                let cell = document.querySelector(`#r${r}-c${c}`);

                switch(gameboard[r][c]){
                    case 'X': cell.textContent = "X"; break;
                    case 'O': cell.textContent = "O"; break;
                    default: cell.textContent = "?"; break;
                }
            }
        }
    };

    let publicTest = () => {
        console.log("testing");
    };

    return {
        publicDisplayBoard,
        publicTest
    };
})();

let Player = (name) => {
    return {};
};

