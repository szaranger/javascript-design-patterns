class Person {
  constructor(name) {
    this.name = name;
  }

  hydrate() {
    const memento = JSON.stringify(this);
    return memento;
  }

  dehydrate(memento) {
    const m = JSON.parse(memento);
    this.name = m.name;
  }
}

// CareTaker
class LocalStorage {
  constructor() {
    this.mementos = {};
  }

  add(key, memento) {
    this.mementos[key] = memento;
  }

  get(key) {
    return this.mementos[key];
  }
}

const john = new Person("John Doe");
const emily = new Person("Emily Smith");
const localStorage = new LocalStorage();

// Save state
localStorage.add(1, john.hydrate());
localStorage.add(2, emily.hydrate());

// Assign false names
john.name = "Michael Knight";
emily.name = "Stephanie Mason";

// Restore original state
john.dehydrate(localStorage.get(1));
emily.dehydrate(localStorage.get(2));

console.log(john.name);
console.log(emily.name);
