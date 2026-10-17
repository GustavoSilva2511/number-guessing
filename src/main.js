import Game from "./game.js";
import UI from './ui.js';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from "chalk";

function main() {
    const gameInstance = new Game();
    gameInstance.start();
}

main();