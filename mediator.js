class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(from.name + " -> " + this.name + ": " + message);
  }
}

class Chatroom {
  constructor() {
    this.participants = {};
  }

  join(participant) {
    this.participants[participant.name] = participant;
    participant.chatroom = this;
  }

  send(message, from, to) {
    if (to) {
      // single message
      to.receive(message, from);
    } else {
      // broadcast message
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}

const michael = new Participant("Michael");
const emily = new Participant("Jane");
const paul = new Participant("Paul");
const emily = new Participant("Emily");

const chatroom = new Chatroom();
chatroom.join(michael);
chatroom.join(emily);
chatroom.join(paul);
chatroom.join(emily);

michael.send("Hey Jane, how was your weekend?");
emily.send("Hey Michael, it was great. How was yours?", michael);
paul.send("Hey peeps, how are we going?");
emily.send("Great Paul. Thank you", paul);
