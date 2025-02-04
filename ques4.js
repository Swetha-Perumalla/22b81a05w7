const Event = require('events');
const emitter = new Event();
emitter.once('eventTriggered', () => {
    console.log('The event was triggered for the first time!');
});
emitter.emit('eventTriggered');
emitter.emit('eventTriggered');
