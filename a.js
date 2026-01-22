console.log("hello world");
class Car {
  constructor(name, speed) {
    this.name = name;

    this.speed = speed;
  }
  accelerator() {
    this.speed += speed;
    console.log(`${this.name} is runng at ${this.speed}`);
  }
}

const bmw = Car("bmw", 120);
Car.accelerator();
