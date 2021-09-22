const playerFactory = (number, symbol) => {

    const getNumber = () => {
        return number;
    }

    const getSymbol = () => {
        return symbol;
    };

    const declareVictor = () => {
        alert("Player " + number + " Wins!")
    };

    return { getNumber, getSymbol, declareVictor };
};

const gameBoard = (() => {
    let gameOver = false;

    let board = [];

    let players = [playerFactory(1, "O"), playerFactory(2, "X")];
    let playerTurn = 0;

    const blockConnector = (() => {
        for (let i = 0; i < 9; i++) {
            document.getElementById("id-" + (i + 1)).addEventListener('click', function(){
                if (board[i] === "-" && gameOver === false) {
                    board[i] = players[playerTurn].getSymbol();
                    displaySymbol("id-" + (i + 1), players[playerTurn].getSymbol());
                    checkForWinner();
                    nextPlayerTurn();
                }
                else if (gameOver === true) {
                    restartGame();
                };
            });
            board.push("-");
        }
    })();

    const nextPlayerTurn = () => {
        if (playerTurn === 0) {
            playerTurn++;
        } else {playerTurn = 0};
    };

    const displaySymbol = (id, symbol) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(symbol);
        newDiv.textContent = symbol;
        document.getElementById(id).appendChild(newDiv);
    };

    const checkBoardDraw = () => {
        for (let i = 0; i < 9; i++) {
            if (board[i] === "-") {
                return false;
            };
        };
        return true;
    };

    const checkForWinner = () => {
        if (board[0] === board[1] && board[1] === board[2] && board[0] !== "-") {
            declareWinner();
        }
        else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "-") {
            declareWinner();
        }
        else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "-") {
            declareWinner();
        }
        else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "-") {
            declareWinner();
        }
        else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "-") {
            declareWinner();
        }
        else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "-") {
            declareWinner();
        }
        else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "-") {
            declareWinner();
        }
        else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "-") {
            declareWinner();
        }
        else if (checkBoardDraw()) {
            declareDraw();
        };
    };

    const declareWinner = () => {
        players[playerTurn].declareVictor();
        gameOver = true;
    };

    const declareDraw = () => {
        alert("It's a Draw!");
        gameOver = true;
    };

    const restartGame = () => {
        gameOver = false;
        board = [];
        for (let i = 0; i < 9; i++) {
            document.getElementById("id-" + (i + 1)).replaceChildren();
            board.push("-");
        };
        playerTurn = 0;
    };

})();


