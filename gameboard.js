export class Gameboard {
    constructor() {
    this.cells = new Array(10).fill(0).map(() => new Array(10).fill(new Cell())); // using this to initialise 2d array of cells
    }
}

class Cell {
    constructor() {
        this.shipPlaced = false;
        this.hit = false;
    }
}