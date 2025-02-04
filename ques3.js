const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('userDetails', (name, age) => {
    console.log(`Hello, "${name}"! You are ${age} years old.`);
});
emitter.emit('userDetails', 'Swetha', 20);
emitter.emit('userDetails', 'Navya', 19);
