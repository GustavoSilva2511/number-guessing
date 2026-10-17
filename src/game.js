class Game {
  constructor() {
    this.secretNumber;
    this.difficulty = 'medium';
    this.range = { min: 1, max: 100 };
    this.attempts = 0;
    this.timeStarted = null;
  }

  generateSecretNumber() {
  return Math.floor(Math.random() * (this.range.max - this.range.min + 1)) + this.range.min;
  
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
    switch (level) {
      case 'easy':
        this.range = { min: 1, max: 50 };
        break;
      case 'medium':
        this.range = { min: 1, max: 100 };
        break;
      case 'hard':
        this.range = { min: 1, max: 200 };
        break;
      default:
        this.range = { min: 1, max: 50 };
        console.log(`Invalid difficulty level. Defaulting to easy.`);
        break;
    }
    this.difficulty = level;
    this.secretNumber = this.generateSecretNumber();
  }

  getAttempts() {
    return this.attempts;
  }

  startTimer() {
    this.timeStarted = Date.now();
  }

  // get time in seconds
  getElapsedTime() {
    if (!this.timeStarted) {
      return 0;
    }
    const elapsedMilliseconds = Date.now() - this.timeStarted;
    return Math.floor(elapsedMilliseconds / 1000);
  }

  reset() {
    this.attempts = 0;
    this.timeStarted = null;
  }

  runAgain() {
    const ui = new UI();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Do you want to play again? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        this.reset();
        rl.close();
        this.reset();
        this.start();
      } else {
        ui.displayMessage('Thank you for playing! Goodbye!');
        rl.close();
      }
    }); 
  }

  start() {
    const ui = new UI();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const askDifficulty = async () => {
      rl.question('Choose difficulty (easy, medium, hard): ', (difficulty) => {
        try {
          this.setDifficulty(difficulty);
          ui.displayMessage(`You have chosen ${difficulty} difficulty. Guess the number between ${this.range.min} and ${this.range.max}.`);
          rl.close();
          this.run();
        } catch (error) {
          ui.displayMessage(ui.chalk.red(error.message));
          askDifficulty();
        }
      });
    };

    askDifficulty();
  }

  run() {
    const ui = new UI();
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.startTimer();

    const askGuess = () => {
      rl.question(`Enter your guess (${this.range.min}-${this.range.max}): `, (input) => {
        const guessNumber = parseInt(input, 10);
        if (isNaN(guessNumber) || guessNumber < this.range.min || guessNumber > this.range.max) {
          ui.displayMessage(ui.chalk.red(`Please enter a valid number between ${this.range.min} and ${this.range.max}.`));
          askGuess();
          return;
        }
        console.clear();
        const result = this.guess(guessNumber);
        if (result === 'correct') {
          ui.displayCorrectGuess();
          ui.displayMessage(`You guessed the number in ${this.getAttempts()} attempts and ${this.getElapsedTime()} seconds.`);
          rl.close();
          this.runAgain();
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