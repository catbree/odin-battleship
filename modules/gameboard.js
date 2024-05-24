export class Gameboard {
    constructor() {
        this.cells = new Array(10).fill(0).map(() => new Array(10).fill(0).map(() => new Cell())); // using this to initialise 2d array of cells
    }

    placeShipX(ship, startCoord) {
        const [startX, startY] = startCoord;  
        if (startX <= (10 - ship.length) && (!this.checkCellSurroundingShipExist(startCoord, [startX + ship.length -1, startY]))) {
            for (let i=0; i < ship.length; i++) {
                this.cells[startX + i][startY].shipPlaced = true;
                this.cells[startX + i][startY].shipId = ship;
            }
            return true;
        } else {
            return false;
        }
    }

    placeShipY(ship, startCoord) {
        const [startX, startY] = startCoord;  
        if (startY <= (10 - ship.length) && (!this.checkCellSurroundingShipExist(startCoord, [startX, startY + ship.length -1]))) {
            for (let i=0; i < ship.length; i++) {
                this.cells[startX][startY + i].shipPlaced = true;
                this.cells[startX][startY + i].shipId = ship;
            }
            return true;
        } else {
            return false;
        }
    }

    checkCellSurroundingShipExist(startCoord, endCoord) {
        const [startX, startY] = startCoord;
        const [endX, endY] = endCoord;

        //helper to detect out-of-bound as no ships
        const isShipPlaced = (x, y) => {
            if (x >= 0 && x < 10 && y >= 0 && y < 10) {
                return this.cells[x][y].shipPlaced;
            }
            return false;
        }
        
        //case 1: cells top
        for (let i = startX; i <= endX; i++) {
            if (isShipPlaced(i, startY - 1)) return true;
        }
        //case 2: cells left
        for (let i = startY; i <= endY; i++) {
            if (isShipPlaced(startX - 1, i)) return true;
        }
        //case 3: cells right
        for (let i = startY; i <= endY; i++) {
            if (isShipPlaced(startX + 1, i)) return true;
        }
        //case 4: cells below
        for (let i = startX; i <= endX; i++) {
            if (isShipPlaced(i, endY + 1)) return true;
        }
        //case 5: cells itself (horizontal check)
        for (let i = startX; i<= endX; i++) {
            if (isShipPlaced(i, startY)) return true;
        }
        //case 6: cells itself (vertical check)
        for (let i = startY; i<= endY; i++) {
            if (isShipPlaced(startX, i)) return true;
        }

        return false;
    }

    randomlyPlaceShip(ship) {
        let shipPlaced = false;
        while (!shipPlaced) {
            let startX = Math.floor(Math.random() * 10);
            let startY = Math.floor(Math.random() * 10);
            let randomNumber = Math.floor(Math.random() * 2);
    
            if (randomNumber == 0) {
                shipPlaced = this.placeShipX(ship, [startX, startY]);
            }
            if (randomNumber == 1) {
                shipPlaced = this.placeShipY(ship, [startX, startY]);
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