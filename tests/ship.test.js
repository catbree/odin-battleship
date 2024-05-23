import { Ship } from "../src/ship.js";

test('ship sunk if length = hits', () => {
    const battleship = new Ship(4);
    battleship.hits = 4;
    expect(battleship.isSunk).toBe(true);
});

test('battleship not sunk if length > hits', () => {
    const battleship = new Ship(4);
    battleship.hits = 3;
    expect(battleship.isSunk).toBe(false);
});

test('battleship gets hit', () => {
    const battleship = new Ship(4);
    battleship.hit();
    expect(battleship.hits).toBe(1);
});