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

class Car {
  constructor(options) {
    this.vehicleType = options.vehicleType;
    this.doors = options.doors ?? 4;
    this.transmission = options.transmission ?? VEHICLE_TRANSMISSION.AUTO;
    this.color = options.color ?? VEHICLE_COLOR.SILVER;
  }
}

class Van {
  constructor(options) {
    this.vehicleType = options.vehicleType;
    this.transmission = options.transmission ?? VEHICLE_TRANSMISSION.MANUAL;
    this.color = options.color ?? VEHICLE_COLOR.ORANGE;
  }
}

class VehicleFactory {
  createVehicle(options) {
    switch (options.vehicleType) {
      case VEHICLE_TYPE.CAR:
        this.vehicle = Car;
        break;
      case VEHICLE_TYPE.VAN:
        this.vehicle = Van;
        break;
    }

    return new this.vehicle(options);
  }
}

const carFactory = new VehicleFactory();

const car = carFactory.createVehicle({
  vehicleType: VEHICLE_TYPE.CAR,
  color: VEHICLE_COLOR.WHITE,
  doors: 3,
});

const van = carFactory.createVehicle({
  vehicleType: VEHICLE_TYPE.VAN,
  color: VEHICLE_COLOR.ORANGE,
  doors: 5,
});

// true
console.log(car.vehicleType === VEHICLE_TYPE.CAR);
// { vehicleType: 'car', color: 'white', doors: 5, transmission: 'auto' }
console.log(car);
// true
console.log(van.vehicleType === VEHICLE_TYPE.VAN);
// { vehicleType: 'van', color: 'orange', doors: 5, transmission: 'manual' }
console.log(van);
