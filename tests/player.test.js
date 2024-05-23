import { Player } from '../modules/player.js';
import { Gameboard } from '../modules/gameboard.js';

test('create a human player with gameboard', () => {
    const player = new Player('Sebastian', 'human');
    expect(player.name).toBe('Sebastian');
    expect(player.type).toBe('human');
    expect(player.gameboard).toBeInstanceOf(Gameboard);
})

test('create a computer player with gameboard', () => {
    const player = new Player('Bot', 'computer');
    expect(player.name).toBe('Bot');
    expect(player.type).toBe('computer');
    expect(player.gameboard).toBeInstanceOf(Gameboard);
})