// old interface
class Shipping {
  request(zipStart, zipEnd, weight) {
    const baseCost = 24.38;
    return baseCost * weight;
  }
}

// new interface
class AdvancedShipping {
  login(credentials) {
    this.credentials = credentials;
  }

  setStart(start) {
    this.start = start;
  }

  setDestination(destination) {
    this.destination = destination;
  }

  calculate(weight) {
    const baseCost = 22.49;
    return baseCost * weight;
  }
}

// adapter interface
class ShippingAdapter {
  constructor(credentials) {
    this.credentials = credentials;
    const shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
      request: function (zipStart, zipEnd, weight) {
        shipping.setStart(zipStart);
        shipping.setDestination(zipEnd);
        return shipping.calculate(weight);
      },
    };
  }
}

const shipping = new Shipping();
const credentials = { token: "49ab1-7re8" };
const adapter = new ShippingAdapter(credentials);

// original shipping object and interface
let cost = shipping.request("89801", "10210", 2);
console.log("Old cost: $" + cost);

// new shipping object with adapted interface
cost = adapter.request("89801", "10210", 2);

console.log("New cost: $" + cost);
