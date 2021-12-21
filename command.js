class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    this.value = command.undo(this.value);
  }

  add(value) {
    this.value = this.value + value;
  }

  subtract(value) {
    this.value = this.value - value;
  }

  multiply(value) {
    this.value = this.value * value;
  }

  divide(value) {
    this.value = this.value / value;
  }
}

class AddCommand {
  constructor(value) {
    this.valueToAdd = value;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(value) {
    this.valueToSubtract = value;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(value) {
    this.valueToMultiply = value;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(value) {
    this.valueToDivide = value;
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

const calculator = new Calculator();

calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new MultiplyCommand(2));
calculator.executeCommand(new SubtractCommand(10));
calculator.executeCommand(new DivideCommand(2));
console.log(calculator.value); // 5
calculator.undo();
console.log(calculator.value); // 10
