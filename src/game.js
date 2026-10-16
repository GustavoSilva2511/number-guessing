import UI from './ui.js';
import readline from 'readline';    

class Game {
  constructor() {
    this.secretNumber = this.generateSecretNumber();
    this.difficulty = 'medium'; // Default difficulty
    this.attempts = 0;
  }

  generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
  }
  
  guess(number) {
    this.attempts++;
    if (number === this.secretNumber) {
      return 'correct';
    } else if (number < this.secretNumber) {
      return 'higher';
    } else {
      return 'lower';
    }
  }

  setDifficulty(level) {
    this.difficulty = level;
  }

  getAttempts() {
    return this.attempts;
  }

  run() {
    const ui = new UI();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askGuess = () => {
      rl.question('Enter your guess (1-100): ', (input) => {
        const guessNumber = parseInt(input, 10);
        if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
          ui.displayMessage(ui.chalk.red('Please enter a valid number between 1 and 100.'));
          askGuess();
          return;
        }

        const result = this.guess(guessNumber);
        if (result === 'correct') {
          ui.displayCorrectGuess();
          ui.displayMessage(`You guessed the number in ${this.getAttempts()} attempts.`);
          rl.close();
        } else if (result === 'higher') {
          ui.displayHigher();
          askGuess();
        } else {
          ui.displayLower();
          askGuess();
        }
      });
    };

    askGuess();
  }
}

export default Game;