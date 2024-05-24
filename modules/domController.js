import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { player1, player2, p1Gameboard, p2Gameboard } from "./main.js"

export function init() {
    createGameboard(player1, p1Gameboard);
    createGameboard(player2, p2Gameboard);
    updateGameboard(player1, p1Gameboard);
    updateGameboard(player2, p2Gameboard);

}

function createGameboard(player, gameboard) {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell noHit';

            //add class depending on player type
            if (player.type=='human') {
                cell.classList.add('human-cell');
            } else {
                cell.classList.add('computer-cell');
            }
            //add custom attribute for subsequent linking to its js equivalent
            cell.dataset.x = j; 
            cell.dataset.y = i;

            gameboard.appendChild(cell);
        }
    }
}

export function updateGameboard(player, gameboardElem) {
    const cellsElem = gameboardElem.querySelectorAll('.cell');
    
    cellsElem.forEach((cellElem) => {
        const x = parseInt(cellElem.dataset.x);
        const y = parseInt(cellElem.dataset.y);
        const cell = player.gameboard.cells[x][y];

        if(cell.shipPlaced == true) {
            cellElem.classList.add('ship');
        } else {
            cellElem.classList.remove('ship');
        }

        if(cell.isHit == true) {
            cellElem.classList.add('hit');
            cellElem.classList.remove('noHit');
        } else {
            cellElem.classList.remove('hit');
        }
    })
}

export function addGameboardOutline(gameboard) {
    gameboard.classList.add("outline");
}

export function removeGameboardOutline(gameboard) {
    gameboard.classList.remove("outline");
}

export function updateInstructionText(string) {
    const instructionElem = document.querySelector('.instruction-container');
    instructionElem.textContent = string;
    
}

