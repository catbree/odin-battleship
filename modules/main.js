import { Gameboard } from "./gameboard.js"
import { Ship } from "./ship.js"
import { Player } from "./player.js"
import { init, updateGameboard } from "./domController.js"


//initialise players
export const player1 = new Player('Sebastian', 'human');
export const player2 = new Player('Bot', 'computer');


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

document.addEventListener('DOMContentLoaded', init);

player1.gameboard.receiveAttack([4, 4]);


