const window = global;

class Event {
  constructor() {
    this.handlers = []; // observers
  }

  subscribe(fn) {
    this.handlers.push(fn);
  }

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) {
        return item;
      }
    });
  }

  fire(eventDetails, context) {
    const scope = context || window;

    this.handlers.forEach(function (item) {
      item.call(scope, eventDetails);
    });
  }
}

const handleClick = function (item) {
  console.log("fired: " + item);
};

const event = new Event();

event.subscribe(handleClick);
event.fire("event #1");
event.unsubscribe(handleClick);
event.fire("event #2");
event.subscribe(handleClick);
event.fire("event #3");
