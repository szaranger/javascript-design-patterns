class Red {
  constructor(light) {
    this.light = light;
  }

  go() {
    console.log("Red -> for 1 minute");
    light.change(new Green(light));
  }
}

class Yellow {
  constructor(light) {
    this.light = light;
  }

  go() {
    console.log("Yellow -> for 10 seconds");
    light.change(new Red(light));
  }
}

class Green {
  constructor(light) {
    this.light = light;
  }

  go() {
    console.log("Green -> for 1 minute");
    light.change(new Red(light));
  }
}

class TrafficLight {
  constructor() {
    this.count = 0;
    this.currentState = new Red(this);
  }

  change(state) {
    // Limits number of changes
    if (this.count++ >= 10) return;
    this.currentState = state;
    this.currentState.go();
  }

  start() {
    this.currentState.go();
  }
}

const light = new TrafficLight();
light.start();
