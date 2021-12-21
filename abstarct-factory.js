class Vehicle {
  startEngine() {}
}

class Car extends Vehicle {
  startEngine() {
    console.log("Car: Start engine");
  }
}

class Van extends Vehicle {
  startEngine() {
    console.log("Van: Start engine");
  }
}

class VehicleFactory {
  make() {}
}

class CarFactory extends VehicleFactory {
  makeCar() {
    console.log("Car created");
    return new Car();
  }
}

class VanFactory extends VehicleFactory {
  makeVan() {
    console.log("Van created");
    return new Van();
  }
}

const carFactory = new CarFactory();
const car = carFactory.makeCar();
car.startEngine();

const vanFactory = new VanFactory();
