const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.querySelector('.restart-btn');
const winnerMessage = document.querySelector('.winner-message');

let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    checkWin();
    checkDraw();
    swapPlayer();
}

function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            gameActive = false;
            highlightWinningCells(cells[a], cells[b], cells[c]);
            displayWinner(`${cells[a].textContent} wins!`);
        }
    }
}

function checkDraw() {
    let draw = true;
    for (let cell of cells) {
        if (cell.textContent === '') {
            draw = false;
            break;
        }
    }
    if (draw && gameActive) {
        gameActive = false;
        displayWinner('It\'s a draw!');
    }
}

function highlightWinningCells(a, b, c) {
    a.style.backgroundColor = 'lightgreen';
    b.style.backgroundColor = 'lightgreen';
    c.style.backgroundColor = 'lightgreen';
}

function displayWinner(message) {
    winnerMessage.textContent = message;
}

function restartGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = '';
    });
    gameActive = true;
    currentPlayer = 'X';
    winnerMessage.textContent = '';
}

function swapPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);
