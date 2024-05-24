export class Gameboard {
    constructor() {
        this.cells = new Array(10).fill(0).map(() => new Array(10).fill(0).map(() => new Cell())); // using this to initialise 2d array of cells
    }

    placeShip(ship, startCoord) {
        const [startX, startY] = startCoord;  
        if (startY <= (10 - ship.length)) {
            for (let i=0; i < ship.length; i++) {
                this.cells[startX][startY + i].shipPlaced = true;
                this.cells[startX][startY + i].shipId = ship;
            }
        }
    }

    receiveAttack(coord) {
        const [x, y] = coord;
        this.cells[x][y].isHit = true;
        if (this.cells[x][y].shipPlaced == true) {
            this.cells[x][y].shipId.hit();
        }
    }

    checkIfAllShipsSunk() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.cells[i][j].shipPlaced == true && this.cells[i][j].isHit == false) {
                    return false; 
                }
            }
        }
        return true;
    }
}

class Cell {
    constructor() {
        this.shipPlaced = false;
        this.isHit = false;
        this.shipId = null;
    }
}