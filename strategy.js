class Shipping {
  constructor() {
    this.company = "";
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(pkg) {
    return this.company.calculate(pkg);
  }
}

class UPS {
  calculate({ weight }) {
    const basePrice = 15.26;
    const total = basePrice * weight;

    return total;
  }
}

class USPS {
  calculate({ weight }) {
    const basePrice = 21.21;
    const total = basePrice * weight;

    return total;
  }
}

class Fedex {
  calculate({ weight }) {
    const basePrice = 17.54;
    const total = basePrice * weight;

    return total;
  }
}

const package = { from: "82563", to: "10400", weight: 2 };

const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();

shipping.setStrategy(ups);
console.log("UPS Strategy: $" + shipping.calculate(package));
shipping.setStrategy(usps);
console.log("USPS Strategy: $" + shipping.calculate(package));
shipping.setStrategy(fedex);
console.log("Fedex Strategy: $" + shipping.calculate(package));
