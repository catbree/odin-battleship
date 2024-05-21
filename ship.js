export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = null;
    }

    get isSunk() {
        return this.length == this.hits ? true : false;
    }
}

