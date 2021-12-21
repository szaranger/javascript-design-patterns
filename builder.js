const VEHICLE_TYPE = {
  CAR: "car",
  VAN: "van",
};

const VEHICLE_COLOR = {
  WHITE: "white",
  SILVER: "silver",
  ORANGE: "orange",
};

const VEHICLE_TRANSMISSION = {
  MANUAL: "manual",
  AUTO: "auto",
};

class Vehicle {
  spec() {
    return `Type: ${this.vehicleType}, 
Color: ${this.color}, 
Doors: ${this.doors},
Transmission: ${this.transmission}`;
  }
}

class VehicleBuilder {
  constructor(vehicle = new Vehicle()) {
    this.vehicle = vehicle;
    return this;
  }

  ofType(vehicleType) {
    this.vehicle.vehicleType = vehicleType;
    return this;
  }

  addColor(color) {
    this.vehicle.color = color;
    return this;
  }

  addDoors(doors) {
    this.vehicle.doors = doors;
    return this;
  }

  addTransmission(transmission) {
    this.vehicle.transmission = transmission;
    return this;
  }

  build() {
    return this.vehicle;
  }
}

const vehicleBuilder = new VehicleBuilder();

const vehicle = vehicleBuilder
  .ofType(VEHICLE_TYPE.CAR)
  .addColor(VEHICLE_COLOR.SILVER)
  .addDoors(4)
  .addTransmission(VEHICLE_TRANSMISSION.AUTO)
  .build();

console.log(vehicle.spec());
