class ATM {
  constructor(amount) {
    this.amount = amount;
    console.log(`Request: $${amount}\n`);
  }

  request(bill) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log(`Dispense: ${count} $${bill} bills`);

    return this;
  }
}

const atm = new ATM(425);

atm.request(100).request(50).request(20).request(10).request(5);
