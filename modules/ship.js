export class Ship {
    constructor(length, shipId) {
        this.length = length;
        this.hits = 0;
    }

    get isSunk() {
        return this.length == this.hits ? true : false;
    }

    hit() {
        this.hits += 1;
    }
}

