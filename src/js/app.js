import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

console.log(loadGame, saveGame);
const game = new Game();
game.start();
