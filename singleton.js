const VEHICLE_TYPE = {
  CAR: "car",
  VAN: "van",
};

class Vehicle {
  constructor(vehicleType) {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.vahicleType = vehicleType;
    this.constructor.instance = this;
  }

  spec() {
    console.log(this.vahicleType);
  }
}

const car1 = new Vehicle(VEHICLE_TYPE.CAR);
const car2 = new Vehicle(VEHICLE_TYPE.VAN);

console.log(car1 === car2); // true
console.log(car1.spec()); // car
console.log(car2.spec()); // car (not van!)
