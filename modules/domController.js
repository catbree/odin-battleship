import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { player1, player2 } from "./main.js"

export function init() {
    const p1Gameboard = document.querySelector(".gameboard-container.player1")
    const p2Gameboard = document.querySelector(".gameboard-container.player2")
    createGameboard(p1Gameboard);
    createGameboard(p2Gameboard);
    updateGameboard(player1, p1Gameboard);
    updateGameboard(player2, p2Gameboard);

}

function createGameboard(gameboard) {

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            
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
        } else {
            cellElem.classList.remove('hit');
        }
    })
}


