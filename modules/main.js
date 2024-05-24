import { Gameboard } from "./gameboard.js"
import { Ship } from "./ship.js"
import { Player } from "./player.js"
import { init, updateGameboard, addGameboardOutline, removeGameboardOutline, updateInstructionText } from "./domController.js"


//initialise players & gameboards
export const player1 = new Player('Sebastian', 'human');
export const player2 = new Player('Bot', 'computer');
export const p1Gameboard = document.querySelector(".gameboard-container.player1")
export const p2Gameboard = document.querySelector(".gameboard-container.player2")


//place ships for both players
player1.gameboard.placeShip(new Ship(2), [5, 0]);
player1.gameboard.placeShip(new Ship(2), [8, 3]);
player1.gameboard.placeShip(new Ship(3), [6, 4]);
player1.gameboard.placeShip(new Ship(4), [2, 6]);
player1.gameboard.placeShip(new Ship(5), [0, 4]);

player2.gameboard.placeShip(new Ship(2), [3, 0]);
player2.gameboard.placeShip(new Ship(2), [8, 3]);
player2.gameboard.placeShip(new Ship(3), [6, 4]);
player2.gameboard.placeShip(new Ship(4), [2, 6]);
player2.gameboard.placeShip(new Ship(5), [4, 4]);

//initialise player1 as starting player
let currentPlayer = player1;
const computerHits = new Set(); //Set to keep track of computer's hit so computer doesn't hit the same cell more than once.

document.addEventListener('DOMContentLoaded', () => {
    init();
    startGame();
});

function startGame() {
    p2Gameboard.addEventListener('click', handlePlayerTurn);
    updateInstructionText(`Your turn. Click on a cell on your opponent's gameboard to launch an attack.`);
}

function handleComputerTurn() {

    let x;
    let y;

    do {
        x = generateRandomNumberUpTill9();
        y = generateRandomNumberUpTill9();
    } while (computerHits.has(`${x}${y}`));

    computerHits.add(`${x}${y}`); //add a hit coord to set

    player1.gameboard.receiveAttack([x, y]);
    updateGameboard(player1, p1Gameboard);

    if (!checkEndGameCondition()) {
        setTimeout(() => {
            togglePlayer();
        }, 500);
    }
}

function handlePlayerTurn(event) {

    //if not a cell, do nothing
    if (!event.target.classList.contains('cell')) return;
    //if clicking on cell that is already hit, do nothing
    if (!event.target.classList.contains('noHit')) return;

    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
          

    //handle player's move
    if (currentPlayer === player1) {
        player2.gameboard.receiveAttack([x, y]);
        updateGameboard(player2, p2Gameboard);
    } else {
        player1.gameboard.receiveAttack([x, y]);
        updateGameboard(player1, p1Gameboard);
    }

    if (!checkEndGameCondition()) {
        togglePlayer();
    }

}

function togglePlayer() {
    if (currentPlayer === player1) {
        currentPlayer = player2;
        p2Gameboard.removeEventListener('click', handlePlayerTurn);
        updateInstructionText(`Your opponent's turn to attack.`);
        removeGameboardOutline(p2Gameboard);
        addGameboardOutline(p1Gameboard);
        handleComputerTurn(500);
    } else {
        currentPlayer = player1;
        removeGameboardOutline(p1Gameboard);
        addGameboardOutline(p2Gameboard);
        p2Gameboard.addEventListener('click', handlePlayerTurn);
        updateInstructionText(`Your turn. Click on a cell on your opponent's gameboard to launch an attack.`);
    }
}

function checkEndGameCondition() {

    if (player1.gameboard.checkIfAllShipsSunk()) {
        updateInstructionText(`Computer won, better luck next time!`);
        endGame();
        return true;
    }
    
    if (player2.gameboard.checkIfAllShipsSunk()) {
        updateInstructionText(`You won!`);
        endGame();
        return true;
    }

    return false;
}

function generateRandomNumberUpTill9() {
    return Math.floor(Math.random() * 10);
}

function endGame() {
    p1Gameboard.removeEventListener('click', handlePlayerTurn);
    p2Gameboard.removeEventListener('click', handlePlayerTurn);
    removeGameboardOutline(p1Gameboard);
    removeGameboardOutline(p2Gameboard);
}

