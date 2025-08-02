const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Listener
myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit
myEmitter.emit("greet", "Honey");