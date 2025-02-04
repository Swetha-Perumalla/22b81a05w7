const EventEmitter = require('events');

class EventManagement extends EventEmitter {
    constructor() {
        super();
    }

    startEvent() {
        console.log("Starting the event...");
        this.emit('start');
    }

    inProgressEvent() {
        console.log("Event is in progress...");
        this.emit('in-progress');
    }

    completedEvent() {
        console.log("Event has been completed!");
        this.emit('completed');
    }
}

module.exports = EventManagement;
