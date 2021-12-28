const APPROVED_LIST = ["John", "Lisa"];

class Mortgage {
  constructor(name) {
    this.name = name;
  }

  applyFor(amount) {
    // access multiple subsystems
    let result = "approved";

    if (!new Bank().verify(this.name, amount)) {
      result = "denied";
    } else if (!new Credit().get(this.name)) {
      result = "denied";
    } else if (!new Background().check(this.name)) {
      result = "denied";
    }
    return `${this.name} has been ${result} for a ${amount} mortgage`;
  }
}

class Bank {
  verify(name, amount) {
    if (APPROVED_LIST.includes(name) && amount < 200000) {
      return true;
    }

    return false;
  }
}

class Credit {
  get(name) {
    if (APPROVED_LIST.includes(name)) {
      return true;
    }
    return false;
  }
}

class Background {
  check(name) {
    if (APPROVED_LIST.includes(name)) {
      return true;
    }
    return false;
  }
}

const mortgage = new Mortgage("John");
const result = mortgage.applyFor(100000);

console.log(result);
