class Flyweight {
  contructor(make, model, processor) {
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
}

class FlyWeightFactory {
  static flyweights = {};
  static count = 0;

  static get(make, model, processor) {
    if (!FlyWeightFactory.flyweights[make + model]) {
      FlyWeightFactory.flyweights[make + model] = new Flyweight(
        make,
        model,
        processor
      );
    }

    return FlyWeightFactory.flyweights[make + model];
  }

  static getCount() {
    for (let f in FlyWeightFactory.flyweights) FlyWeightFactory.count++;
    return FlyWeightFactory.count;
  }
}

let count = 0;

class ComputerCollection {
  computers = {};

  add(make, model, processor, memory, tag) {
    computers[tag] = new Computer(make, model, processor, memory, tag);
    count++;
  }

  get(tag) {
    return computers[tag];
  }

  getCount() {
    return count;
  }
}

class Computer {
  constructor(make, model, processor, memory, tag) {
    this.flyweight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
    this.getMake = function () {
      return this.flyweight.make;
    };
  }
}

const computers = new ComputerCollection();

computers.add("Apple", "MacBook Pro", "Intel", "5G", "Y755P");
computers.add("Apple", "MacBook Pro", "Intel", "6G", "X997T");
computers.add("Apple", "MacBook Pro", "Intel", "2G", "U8U80");
computers.add("Apple", "MacBook Pro", "Intel", "2G", "NT777");
computers.add("Apple", "MacBook Pro", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

console.log("Computers: " + computers.getCount());
console.log("Flyweights: " + FlyWeightFactory.getCount());
