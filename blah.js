// Mars Rover Simulator
class MarsRover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.directions = ['N', 'E', 'S', 'W'];
  }

  turnLeft() {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 3) % 4];
  }

  turnRight() {
    const currentIndex = this.directions.indexOf(this.direction);
    this.direction = this.directions[(currentIndex + 1) % 4];
  }

  move() {
    switch (this.direction) {
      case 'N':
        this.y += 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'W':
        this.x -= 1;
        break;
    }
  }

  processCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case 'L':
          this.turnLeft();
          break;
        case 'R':
          this.turnRight();
          break;
        case 'M':
          this.move();
          break;
      }
    }
  }

  getPosition() {
    return `${this.x} ${this.y} ${this.direction}`;
  }
}

// Example usage
const rover = new MarsRover(0, 0, 'N');
console.log('Starting position:', rover.getPosition());

rover.processCommands('MMRMMRMRRM');
console.log('Final position:', rover.getPosition());
