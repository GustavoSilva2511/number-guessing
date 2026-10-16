import Game from "./game.js";
import UI from './ui.js';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import chalk from "chalk";

const gameInstance = new Game();


async function main() {
    const rl = readline.createInterface({ input, output })
    let difficulty = "none";
    
    console.clear()

    while (true) {
        while (!["1", "2", "3"].includes(difficulty)) {
            difficulty = await rl.question("1 - Easy\n2 - Medium\n3 - Hard\nChoise difficulty: ")
            console.clear()
            switch (difficulty) {
                case "1":
                    gameInstance.setDifficulty("easy");
                    break;
                case "2":
                    gameInstance.setDifficulty("medium");
                    break;
                case "3":
                    gameInstance.setDifficulty("hard");
                    break;
                default:
                    console.log(chalk.red("Invalid option!"))
                    break;
            }
            
        }
        gameInstance.generateSecretNumber();
        let option;
        let response;

        do {
            option = await rl.question("Guess number: ")
            response = gameInstance.guess()
            switch (response) {
                case 'lower':
                    console.log(chalk.yellow(""))
            }
        } while (response != "correct")
        
        const a = await rl.question("Enter to quit....");
        rl.close()
    }
}

main();