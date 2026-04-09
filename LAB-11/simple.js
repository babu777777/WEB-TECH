const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome!`);
});

eventEmitter.on('greet', (name) => {
    console.log(`Hope you are having a great day, ${name}!`);
});

eventEmitter.on('status', (name, status) => {
    console.log(`${name} is currently ${status}.`);
});

eventEmitter.on('delayed', (msg) => {
    setTimeout(() => {
        console.log(`Delayed Event: ${msg}`);
    }, 2000);
});

console.log("Triggering greet event...");
eventEmitter.emit('greet', 'Babu');

console.log("Triggering status event...");
eventEmitter.emit('status', 'Babu', 'online');

console.log("Triggering delayed event...");
eventEmitter.emit('delayed', 'This message appears after 2 seconds');