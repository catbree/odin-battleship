import { Gameboard } from "../modules/gameboard.js"
import { Ship } from "../modules/ship.js"

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

test('cell received attack and marked as hit', () => {
    const gameboard = new Gameboard();
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [4, 4]);
    expect(gameboard.cells[4][4].isHit).toBe(false);
    expect(gameboard.cells[4][4].shipPlaced).toBe(true);
    expect(gameboard.cells[4][4].shipId).toBe(ship2);
    expect(ship2.hits).toBe(0);
    gameboard.receiveAttack([4, 4]);
    expect(gameboard.cells[4][4].isHit).toBe(true);
    expect(gameboard.cells[4][4].shipPlaced).toBe(true);
    expect(ship2.hits).toBe(1);
    
});

test('check that all ships are sunk', () => {
    const gameboard = new Gameboard();
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [4, 4]);
    gameboard.receiveAttack([4, 4]);
    gameboard.receiveAttack([5, 4]);
    expect(gameboard.checkIfAllShipsSunk()).toBe(true);
    
});

test('check that not all ships are sunk', () => {
    const gameboard = new Gameboard();
    const ship2 = new Ship(2);
    gameboard.placeShip(ship2, [4, 4]);
    gameboard.receiveAttack([4, 4]);
    expect(gameboard.cells[5][4].shipPlaced).toBe(true);
    expect(gameboard.cells[5][4].isHit).toBe(false);
    expect(gameboard.checkIfAllShipsSunk()).toBe(false);
    
});