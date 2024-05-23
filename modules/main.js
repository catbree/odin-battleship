import { Gameboard } from "./gameboard.js"
import { Ship } from "./ship.js"
import { Player } from "./player.js"
import { init, updateGameboard } from "./domController.js"


//initialise players
export const player1 = new Player('Sebastian', 'human');
export const player2 = new Player('Bot', 'computer');


//place ships for both players
player1.gameboard.placeShip(new Ship(2), [0, 0]);
player1.gameboard.placeShip(new Ship(2), [2, 2]);
player1.gameboard.placeShip(new Ship(3), [3, 6]);
player1.gameboard.placeShip(new Ship(4), [5, 7]);
player1.gameboard.placeShip(new Ship(5), [4, 9]);

player2.gameboard.placeShip(new Ship(2), [5, 0]);
player2.gameboard.placeShip(new Ship(2), [8, 3]);
player2.gameboard.placeShip(new Ship(3), [6, 8]);
player2.gameboard.placeShip(new Ship(4), [2, 5]);
player2.gameboard.placeShip(new Ship(5), [0, 4]);

document.addEventListener('DOMContentLoaded', init);
updateGameboard(player1);
updateGameboard(player2);

