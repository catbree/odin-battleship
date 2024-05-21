import { Gameboard } from "../src/gameboard.js"
import { Ship } from "../src/ship.js"

test('place a ship', () => {
    const gameboard = new Gameboard();
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [4, 4]);
    expect(gameboard.cells[4][4].shipPlaced).toBe(true);
    expect(gameboard.cells[5][4].shipPlaced).toBe(true);
    expect(gameboard.cells[4][5].shipPlaced).toBe(false);
    expect(gameboard.cells[6][4].shipPlaced).toBe(false);
});

test('place a ship too far right', () => {
    const gameboard = new Gameboard();
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [9, 9]);
    expect(gameboard.cells[9][9].shipPlaced).toBe(false);
});