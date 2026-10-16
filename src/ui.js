import chalk from 'chalk';

class UI {
  constructor() {
    this.chalk = chalk;
  }

  displayMessage(message) {
    console.log(message);
  }

  displayCorrectGuess() {
    this.displayMessage(this.chalk.green('Correct! You guessed the number.'));
  }

  displayHigher() {
    this.displayMessage(this.chalk.yellow('Try a higher number.'));
  }

  displayLower() {
    this.displayMessage(this.chalk.red('Try a lower number.'));
  }
}

export default UI;