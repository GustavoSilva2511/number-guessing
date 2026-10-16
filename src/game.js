class Game {
  constructor() {
    this.secretNumber;
    this.difficulty = 'medium'; // Default difficulty
    this.windowNumbers = {
      "easy": {
        min: 1,
        max: 100
      },
      "medium": {
        min: 1,
        max: 1000
      },
      "hard": {
        min: 1,
        max: 10000
      }
    }
    this.attempts = 0;
  }

  generateSecretNumber() {
    return Math.floor(Math.random() * this.windowNumbers["easy"].max) + 1; // Generates a number between 1 and 100
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
    this.secretNumber = this.generateSecretNumber();
  }

  getAttempts() {
    return this.attempts;
  }
}

export default Game;