const VEHICLE_TYPE = {
  CAR: "car",
  VAN: "van",
};

class Vehicle {
  constructor(vehicleType, model) {
    this.vehicleType = vehicleType;
    this.model = model;
  }

  spec() {
    console.log(`Type: ${this.vehicleType}, model: ${this.model}`);
  }

  clone() {
    return new Vehicle(this.vehicleType, this.model);
  }

  setVehicleType(vehicleType) {
    this.vehicleType = vehicleType;
  }

  setModel(model) {
    this.model = model;
  }
}

const car = new Vehicle(VEHICLE_TYPE.CAR, "X3");
car.spec();

const van = car.clone();
van.spec();

van.setVehicleType(VEHICLE_TYPE.VAN);
van.setModel('X10');
van.spec();