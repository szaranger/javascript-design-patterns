class Database {
  process() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
}

class MySQL extends Database {
  constructor() {
    super();
  }
}

const mySql = new MySQL();

mySql.connect = function () {
  console.log("MySQL: Connect step");
};

mySql.select = function () {
  console.log("MySQL: Select step");
};

mySql.disconnect = function () {
  console.log("MySQL: Disconnect step");
};

mySql.process();
