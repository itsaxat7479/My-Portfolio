const board = document.getElementById('board');
const dice = document.getElementById('dice');

const playerPieces = ['🔴', '🟡', '🟢', '🔵'];
const diceValues = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

let currentPlayer = 0;
let currentPosition = [0, 0, 0, 0];

function rollDice() {
const diceRoll = Math.floor(Math.random() * 6) + 1;
dice.textContent = diceValues[diceRoll - 1];
movePlayer(diceRoll);
}

function movePlayer(steps) {
currentPosition[currentPlayer] += steps;
if (currentPosition[currentPlayer] > 39) {
currentPosition[currentPlayer] -= 40;
}
updateBoard();
currentPlayer = (currentPlayer + 1) % 4;
}

function updateBoard() {
board.innerHTML = '';
for (let i = 0; i < 40; i++) {
const cell = document.createElement('div');
cell.classList.add('cell');
if (currentPosition.includes(i)) {
const playerIndex = currentPosition.indexOf(i);
cell.textContent = playerPieces[playerIndex];
}
board.appendChild(cell);
}
}

updateBoard();
