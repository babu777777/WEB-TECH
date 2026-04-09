const { EventEmitter } = require('events');
const emitter = new EventEmitter();
emitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome!`);
});
emitter.on('greet', (name) => {
    console.log(`Have a great day, ${name}!`);
});
emitter.emit('greet', 'BABU');