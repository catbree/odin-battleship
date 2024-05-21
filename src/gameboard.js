import { Ship } from "./ship.js";

export class Gameboard {
    constructor() {
        this.cells = new Array(10).fill(0).map(() => new Array(10).fill(new Cell())); // using this to initialise 2d array of cells
    }

    placeShip(ship, startCoord) {
        const [startX, startY] = startCoord;  
        if (startX < 10 - ship.length) {
            for (let i=0; i < ship.length; i++) {
                this.cells[startX + i][startY].shipPlaced = true;
            }
        }
    }


}

class Cell {
    constructor() {
        this.shipPlaced = false;
        this.hit = false;
    }
}