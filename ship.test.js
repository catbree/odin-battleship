import { Ship } from "./ship.js";

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