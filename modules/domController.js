import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";


export function init() {
    const p1Gameboard = document.querySelector(".gameboard-container.player1")
    const p2Gameboard = document.querySelector(".gameboard-container.player2")
    createGameboard(p1Gameboard);
    createGameboard(p2Gameboard);
}

function createGameboard(gameboard) {
    for (let i = 0; i < 10; i++) {
        for (let i = 0; i < 10; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gameboard.appendChild(cell);
        }
    }
}